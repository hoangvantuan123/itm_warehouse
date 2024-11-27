import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, message, Modal } from 'antd'
const { Title } = Typography
import 'moment/locale/vi'
import WaitingIqcStockInActions from '../../components/actions/material/waitingIqcStockInActions'
import TableTransferWaitingIqcStockIn from '../../components/table/material/tableTransferWaitingIqcStockIn'
import { FilterOutlined } from '@ant-design/icons'
import WaitingIqcStockInQuery from '../../components/query/material/waitingIqcStockInQuery'
import { ArrowIcon } from '../../components/icons'
import CryptoJS from 'crypto-js'
import ModalWaitingIqcStockIn from '../../components/modal/material/modalWaitingIqcStockIn'
import { SMaterialQRCheckWeb } from '../../../features/material/postSMaterialQRCheck'
import ErrorPage from '../../components/modal/default/errorPage'
import { GetSUGGetActiveDeliveryItem } from '../../../features/material/getSUGGetActiveDeliveryItem'
import { SCOMCloseCheckWEB } from '../../../features/material/postScomCloseCheck'
import { SCOMCloseItemCheckWEB } from '../../../features/material/postScomCloseItemCheck'
import { debounce } from 'lodash'
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../../utils/constants'

export default function WaitingIqcStockIn({ permissions, isMobile }) {
  const { t } = useTranslation()
  const { id } = useParams()
  const workerRef = useRef(null)
  const inputCodeRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [inputCode, setInputCode] = useState(null)
  const [data, setData] = useState([])
  const bufferRef = useRef('')
  const dataRef = useRef(data)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [error, setError] = useState(null)
  const [scanHistory, setScanHistory] = useState([])
  const dataRefSacenHistory = useRef(scanHistory)
  const [status, setStatus] = useState(false)
  const [filteredData, setFilteredData] = useState(null)
  const secretKey = 'TEST_ACCESS_KEY'

  const fetchDeliveryData = async (delvNo, purchaseType) => {
    try {
      setLoading(true)
      const response = await GetSUGGetActiveDeliveryItem(delvNo, purchaseType)
      setData(response?.data || [])
    } catch (error) {
      setData([])
    } finally {
      setLoading(false)
    }
  }

  const decodeBase64Url = (base64Url) => {
    try {
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const padding =
        base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4))
      return base64 + padding
    } catch (error) {
      throw new Error('Invalid Base64 URL')
    }
  }

  const decryptData = (encryptedToken) => {
    try {
      const base64Data = decodeBase64Url(encryptedToken)
      const bytes = CryptoJS.AES.decrypt(base64Data, secretKey)
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
      return JSON.parse(decryptedData)
    } catch (error) {
      setModal3Open(true)
      return null
    }
  }

  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      if (data) {
        setFilteredData(data)
        fetchDeliveryData(data?.DelvNo, data?.PurchaseType)
      }
    }
  }, [id])

  useEffect(() => {
    dataRef.current = data
    dataRefSacenHistory.current = scanHistory
  }, [data, scanHistory])

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../../workers/workerWatingIqcStockIn.js', import.meta.url),
    )

    workerRef.current.onmessage = async (event) => {
      const { success, message: resultMessage, data: resultData } = event.data
      if (success) {
        if (resultData) {
          const { itemNo, qty, lot, dc, reel, barcode, permitSerl, permitSeq } =
            resultData

          const formData = {
            workingTag: 'A',
            idx_no: '1',
            status: '0',
            dataSeq: '1',
            selected: '1',
            permitSeq: permitSeq,
            permitSerl: permitSerl,
            bizUnit: filteredData?.BizUnit,
            bizUnitName: filteredData?.BizUnitName,
            sMImpKind: filteredData?.ImpType,
            sMImpKindName: filteredData?.PurchaseType,
            itemNo: itemNo,
            lotNo: lot,
            qty: qty,
            dateCode: dc,
            reelNo: reel,
            barcode: barcode,
          }
          const resSuccess = await SMaterialQRCheckWeb(formData)
          if (resSuccess.success) {
            const dataResSuccess = resSuccess.data[0]
            message.success(resultMessage)
            setData((prevData) =>
              prevData.map((item) =>
                item.ItemNo === itemNo
                  ? {
                    ...item,
                    OkQty: item.OkQty + qty,
                    RemainQty: item.RemainQty - qty,
                  }
                  : item,
              ),
            )

            setScanHistory((prevHistory) => [
              ...prevHistory,
              {
                SMImpKind: dataResSuccess?.SMImpKind,
                ItemNo: dataResSuccess?.ItemNo,
                LotNo: dataResSuccess?.LotNo,
                Qty: dataResSuccess?.Qty,
                DateCode: dataResSuccess?.DateCode,
                ReelNo: dataResSuccess?.ReelNo,
                Barcode: dataResSuccess?.Barcode,
                ItemSeq: dataResSuccess?.ItemSeq,
                WHSeq: dataResSuccess?.WHSeq,
                WHName: dataResSuccess?.WHName,
                CreateDate: dataResSuccess?.CreateDate,
                RegDate: dataResSuccess?.RegDate,
                YYWW: dataResSuccess?.YYWW,
                YYMM: dataResSuccess?.YYMM,
                YYMMDD: dataResSuccess?.YYMMDD,
                InvoiceNo: dataResSuccess?.InvoiceNo,
                PermitSerl: dataResSuccess?.PermitSerl,
                PermitSeq: dataResSuccess?.PermitSeq,
                EmpSeq: dataResSuccess?.EmpSeq,
                EmpName: dataResSuccess?.EmpName,
                DeptSeq: dataResSuccess?.DeptSeq,
                DeptName: dataResSuccess?.DeptName,
                CurrSeq: dataResSuccess?.CurrSeq,
                CurrName: dataResSuccess?.CurrName,
                ExRate: dataResSuccess?.ExRate,
                Price: dataResSuccess?.Price,
                CurAmt: dataResSuccess?.CurAmt,
                DomPrice: dataResSuccess?.DomPrice,
                DomAmt: dataResSuccess?.DomAmt,
                LotNoFull: dataResSuccess?.LotNoFull,
                StdUnitSeq: dataResSuccess?.StdUnitSeq,
                STDUnitName: dataResSuccess?.STDUnitName,
                UnitSeq: dataResSuccess?.UnitSeq,
                UnitName: dataResSuccess?.UnitName,
                CustSeq: dataResSuccess?.CustSeq,
                CustName: dataResSuccess?.CustName,
                ItemName: dataResSuccess?.ItemName,
                Spec: dataResSuccess?.Spec,
                DateIn: dataResSuccess?.DateIn,
                StdQty: dataResSuccess?.StdQty,
                FromAmt: dataResSuccess?.FromAmt,
                FromVAT: dataResSuccess?.FromVAT,
                BizUnit: dataResSuccess?.BizUnit,
              },
            ])
          } else {
            setModal2Open(true)
            setError(resSuccess?.message)
          }
        }
      } else {
        setModal2Open(true)
        setError(resultMessage)
      }
    }

    return () => {
      workerRef.current.terminate()
    }
  }, [filteredData])

  const handleCheckBarcode = (barcode) => {
    workerRef.current.postMessage({
      type: 'CHECK_BARCODE',
      barcode,
      tableData: dataRef.current,
      tableScanHistory: dataRefSacenHistory.current,
    })
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && bufferRef.current.trim()) {
        const barcode = bufferRef.current.trim()
        handleCheckBarcode(barcode)
        setInputCode(barcode)
        bufferRef.current = ''
      } else if (e.key.length === 1) {
        bufferRef.current += e.key
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    const handleFocus = () => setStatus(true)

    const handleBlur = () => setStatus(false)

    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
    }
  }, [])

  /* SAVE */

  const handelSubmitSheet = useCallback(
    debounce(() => {
      if (scanHistory.length === 0) {
        message.warning('Không có dữ liệu nào')
        return
      }

      const xmlData = scanHistory
        .map((row, index) => {
          return `
        <DataBlock2>
          <WorkingTag>A</WorkingTag>
          <IDX_NO>${index + 1}</IDX_NO>
          <DataSeq>${index + 1}</DataSeq>
          <Status>0</Status>
          <Selected>0</Selected>
          <TABLE_NAME>DataBlock2</TABLE_NAME>
          <ServiceSeq>4492</ServiceSeq> 
          <MethodSeq>2</MethodSeq>
          <BizUnit>${row?.BizUnit}</BizUnit> 
          <Date>${row?.DateIn}</Date>
          <DeptSeq>${row?.DeptSeq}</DeptSeq> 
          <BizUnitOld>${row?.BizUnit}</BizUnitOld>
          <DateOld>${row?.DateIn}</DateOld> 
          <DeptSeqOld>${row?.DeptSeq}</DeptSeqOld> 
        </DataBlock2>
      `
        })
        .join('\n')


      SCOMCloseItemCheckWEB(xmlData)
        .then((req) => {
          if (req.success === true) {
            message.success(SUCCESS_MESSAGES.DELETE_DATA)
          } else {
            message.error(req.message)
          }
        })
        .catch((err) => {
          message.error(ERROR_MESSAGES.ERROR_FE)
        })
    }, 300),

    [scanHistory],
  )
  const handleSubmit = () => {
    const formData = {
      workingTag: 'A',
      idx_no: '1',
      status: '0',
      dataSeq: '1',
      selected: '1',
      isChangedMst: '1',
      bizUnit: filteredData?.BizUnit,
      date: '20241126',
      deptSeq: filteredData?.DeptSeq,
      serviceSeq2: '4492',
      methodSeq: '2',
      dtlUnitSeq: '1',
    }

    SCOMCloseCheckWEB(formData)
    handelSubmitSheet()
  }

  return (
    <>
      <Helmet>
        <title>ITM - {t('Waiting Iqc Stock In')}</title>
      </Helmet>

      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85">
                Waiting Iqc Stock In
              </Title>
              <WaitingIqcStockInActions
                status={status}
                handleSubmit={handleSubmit}
              />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
                  <FilterOutlined />
                  {t('Điều kiện truy vấn')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>
              <div className="flex p-2 gap-4">
                <WaitingIqcStockInQuery />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableTransferWaitingIqcStockIn
              sampleTableA={data}
              sampleTableB={scanHistory}
            />
          </div>
        </div>
      </div>
      <ModalWaitingIqcStockIn
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
        error={error}
      />
      <ErrorPage modal3Open={modal3Open} setModal3Open={setModal3Open} />
    </>
  )
}
