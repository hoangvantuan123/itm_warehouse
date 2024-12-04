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


export default function StockOutRequestFiFo({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const secretKey = 'TEST_ACCESS_KEY'
  /*  */
  const [filteredData, setFilteredData] = useState(null)
  const [modal3Open, setModal3Open] = useState(false)
  useEffect(() => {
    const savedState = localStorage.getItem("detailsStateStockOutDetails");
    setIsOpenDetails(savedState === "open");
  }, []);

  const handleToggle = (event) => {
    const isOpen = event.target.open;
    setIsOpenDetails(isOpen);
    localStorage.setItem("detailsStateStockOutDetails", isOpen ? "open" : "closed");
  };


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
  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      if (data) {
        setFilteredData(data)
      }
    }
  }, [id])

  const fetchDataA = async (outReqSeq) => {
    try {
      setLoading(true)
      const response = await GetITMSPDMMOutReqItemListWEB(outReqSeq)
      setData(response?.data || [])
    } catch (error) {
      setData([])
    } finally {
      setLoading(false)
    }
  }





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
              <StockOutRequestActionsDetails />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open={isOpenDetails}
              onToggle={handleToggle}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
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
            <TableTransferStockOutFiFo />
          </div>
        </div>
      </div>

    </>
  )
}
