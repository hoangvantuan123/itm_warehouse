import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FileTextOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import StockOutRequestActionsDetails from '../../components/actions/material/StockOutRequestActionsDetails'
import StockOutRequestQueryFiFo from '../../components/query/material/stockOutReqQueryFiFo'
import TableTransferStockOutFiFo from '../../components/table/material/tableTransferStockOutFifo'
import { GetITMSPDMMOutReqItemListWEB } from '../../../features/material/GetITMSPDMMOutReqItemListWEB'
import { SMaterialQRCheckStockOutFiFoWeb } from '../../../features/material/postCheckStockOutFiFo'

export default function StockOutRequestFiFo({ permissions, isMobile }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams()
  /* SOS*/
  const workerRef = useRef(null)
  const [inputCode, setInputCode] = useState(null)
  const [inputBarCode, setInputBarCode] = useState(null)
  const [result, setResult] = useState(null)
  const [loadingSave, setLoadingSave] = useState(false)

  const bufferRef = useRef('')
  const dataRef = useRef()  /* DATA */
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [modal4Open, setModal4Open] = useState(false)
  const [modal5Open, setModal5Open] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [scanHistory, setScanHistory] = useState([])
  const dataRefSacenHistory = useRef() /* DATA */
  const [status, setStatus] = useState(false)
  const [filteredData, setFilteredData] = useState(null)


  const [loading, setLoading] = useState(false)
  const [dataA, setDataA] = useState([])

  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const secretKey = 'TEST_ACCESS_KEY'
  /*  */

  useEffect(() => {
    const savedState = localStorage.getItem('detailsStateStockOutFiFo')
    setIsOpenDetails(savedState === 'open')
  }, [])

  const handleToggle = (event) => {
    const isOpen = event.target.open
    setIsOpenDetails(isOpen)
    localStorage.setItem(
      'detailsStateStockOutFiFo',
      isOpen ? 'open' : 'closed',
    )
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
      navigate(`/u/warehouse/material/stock-out-request`)
      return null
    }
  }

  const fetchDataA = async (outReqSeq) => {
    try {
      setLoading(true)
      const response = await GetITMSPDMMOutReqItemListWEB(outReqSeq)
      setDataA(response?.data || [])
    } catch (error) {
      setDataA([])
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      if (data) {
        setFilteredData(data)
        fetchDataA(data?.OutReqSeq)
      }
    }
  }, [id])


  /* SOS 2 */
  const addToScanHistory = useCallback((dataResSuccess, callback) => {
    const newLotNoFull = dataResSuccess?.LotNoFull?.trim().toLowerCase()
    const newBarcode = dataResSuccess?.Barcode?.trim().toLowerCase()

    setScanHistory((prevHistory) => {
      const isExist = prevHistory.some(
        (item) =>
          item.LotNoFull?.trim().toLowerCase() === newLotNoFull &&
          item.Barcode?.trim().toLowerCase() === newBarcode,
      )

      if (!isExist) {
        const updatedHistory = [
          ...prevHistory,
          {

          },
        ]
        callback()
        return updatedHistory
      }
      return prevHistory
    })
  }, [])

  const handleCheckBarcode = useCallback((barcode) => {
    const currentTableData = dataRef.current
    const currentScanHistory = dataRefSacenHistory.current

    workerRef.current.postMessage({
      type: 'CHECK_BARCODE',
      barcode,
      tableData: currentTableData,
      tableScanHistory: currentScanHistory,
    })
  }, [])


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

    const handleFocus = () => setStatus(true)

    const handleBlur = () => setStatus(false)

    const handleClick = () => setStatus(true)

    window.addEventListener('keypress', handleKeyPress)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleBlur)
    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleBlur)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const debouncedCheckBarcode = useCallback(
    debounce(async (formData, resultMessage) => {
      const resSuccess = await SMaterialQRCheckStockOutFiFoWeb(formData)
      if (resSuccess.success) {
        const dataResSuccess = resSuccess.data[0]
        console.log('dataResSuccess', dataResSuccess)
        message.success(resultMessage)
        setInputBarCode(null)
        setModal2Open(false)
        setInputCode(null)

        /*   addToScanHistory(dataResSuccess, () => {
            setDataA((prevData) =>
              prevData.map((item) =>
                item.ItemNo === formData.itemNo
                  ? {
                    ...item,
  
                  }
                  : item,
              ),
            )
          }) */
      } else {
        setModal2Open(true)
        setError(resSuccess?.message)
      }
    }, 100),
    [addToScanHistory],
  )

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../../workers/workeStockOutFiFo.js', import.meta.url),
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

          debouncedCheckBarcode(formData, resultMessage)
        }
      } else {
        setModal2Open(true)
        setError(resultMessage)
      }
    }

    return () => {
      workerRef.current.terminate()
      debouncedCheckBarcode.cancel()
    }
  }, [filteredData, debouncedCheckBarcode])









  return (
    <>
      <Helmet>
        <title>ITM - {t('Stock Out Request')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Stock Out FIFO')}
              </Title>
              <StockOutRequestActionsDetails status={status} />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open={isOpenDetails}
              onToggle={handleToggle}

            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
                  <FileTextOutlined />
                  {t('Giá trị')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>
              <div className="flex p-2 gap-4">
                <StockOutRequestQueryFiFo />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg">
            <TableTransferStockOutFiFo sampleTableA={dataA} />
          </div>
        </div>
      </div>
    </>
  )
}
