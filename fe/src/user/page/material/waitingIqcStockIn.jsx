import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
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
import CryptoJS from "crypto-js";
import ModalWaitingIqcStockIn from '../../components/modal/material/modalWaitingIqcStockIn'
import { GetSConvertDC } from '../../../features/material/getSConvertDC'
import { GetCheckItemLotExist } from '../../../features/material/getCheckItemLotExists'
import { GetCheckIQCHold } from '../../../features/material/getCheckIQCHold'
import { SMaterialQRCheckWeb } from '../../../features/material/postSMaterialQRCheck'



function formatToYYYYMMDD(date) {
  const d = new Date(date)
  if (isNaN(d.getTime())) throw new Error('Invalid date')

  const year = d.getFullYear()
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  const day = d.getDate().toString().padStart(2, '0')

  return `${year}${month}${day}`
}

const sampleTableA = [
  {
    itemSeq: '58569',
    itemNo: 'NIK0998',
    totalQty: 160000,
    okQty: 0,
    remainQty: 160000,
  },
  {
    itemSeq: '002',
    itemNo: 'DIO0032',
    totalQty: 50000,
    okQty: 0,
    remainQty: 50000,
  },
]

export default function WaitingIqcStockIn({ permissions, isMobile }) {
  const { t } = useTranslation()
  const { id } = useParams();
  const workerRef = useRef(null)
  const inputCodeRef = useRef(null)
  const [inputCode, setInputCode] = useState(null)
  const [data, setData] = useState(sampleTableA)
  const bufferRef = useRef('')
  const dataRef = useRef(sampleTableA)
  const [modal2Open, setModal2Open] = useState(false)
  const [error, setError] = useState(null)
  const [scanHistory, setScanHistory] = useState([])
  const newDate = new Date()
  const [status, setStatus] = useState(false)
  const [filteredData, setFilteredData] = useState(null);
  console.log("filteredData" , filteredData)
  const secretKey = "TEST_ACCESS_KEY";

  const decodeBase64Url = (base64Url) => {
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const padding = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
    base64 += padding;
    return base64;
  };
  
  const decryptData = (encryptedToken) => {
    try {
      const base64Data = decodeBase64Url(encryptedToken);
      const bytes = CryptoJS.AES.decrypt(base64Data, secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      console.log("Route path has not been selected yet");
      return null;
    }
  };
  useEffect(() => {
    if (id) {
      const data = decryptData(id);
      setFilteredData(data);
    } 
  }, [id])
  useEffect(() => {
    dataRef.current = data
  }, [data])

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../../workers/workerWatingIqcStockIn.js', import.meta.url),
    )

    workerRef.current.onmessage = async (event) => {
      const { success, message: resultMessage, data: resultData } = event.data
      if (success) {
        if (resultData) {
          const { itemNo, qty, lot, dc, reel, barcode } = resultData
          try {
            const [itemLotExistSuccess, iqcHoldSuccess, sConvertDCResult] =
              await Promise.all([
                GetCheckItemLotExist(itemNo, lot),
                GetCheckIQCHold(itemNo, lot),
                GetSConvertDC(itemNo, dc, formatToYYYYMMDD(new Date())),
              ])

            if (
              itemLotExistSuccess.success &&
              iqcHoldSuccess.success &&
              sConvertDCResult.success
            ) {
              const { ProductionDate, YYWW, YYMM, YYYYMMDD } =
                sConvertDCResult.data[0]

              setData((prevData) =>
                prevData.map((item) =>
                  item.itemNo === itemNo
                    ? {
                      ...item,
                      okQty: item.okQty + qty,
                      remainQty: item.remainQty - qty,
                    }
                    : item,
                ),
              )

              setScanHistory((prevHistory) => [
                ...prevHistory,
                {
                  warehouseName: 'Warehouse 004',
                  itemNo: itemNo,
                  lotNumber: lot,
                  itemQty: qty,
                  productionDate: ProductionDate,
                  warehouseDate: '',
                  yyww: YYWW,
                  yymm: YYMM,
                  yymmdd: YYYYMMDD,
                  dc: dc,
                  barcode: barcode,
                },
              ])

              message.success(resultMessage)
            } else {
              message.error('Một trong các API đã thất bại')
            }
          } catch (error) {
            console.error('Error during API calls:', error)
            message.error('Đã có lỗi xảy ra khi gọi API')
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
  }, [])

  const handleCheckBarcode = (barcode) => {
    workerRef.current.postMessage({
      type: 'CHECK_BARCODE',
      barcode,
      tableData: dataRef.current,
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
              <WaitingIqcStockInActions status={status} />
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
    </>
  )
}
