import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, notification, message } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import DeliveryActions from '../../components/actions/material/deliveryActions'
import TableDeliveryList from '../../components/table/material/tableDeliveryList'
import { GetCodeHelpCombo } from '../../../features/codeHelp/getCodeHelpCombo'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import DeliveryListQuery from '../../components/query/material/deliveryListQuery'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'

export default function DeliveryList({ permissions, isMobile }) {
  const gridRef = useRef(null)
  const navigate = useNavigate()

  const [loadingA, setLoadingA] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [dataUnit, setDataUnit] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month'))
  const [toDate, setToDate] = useState(dayjs())
  const [deliveryNo, setDeliveryNo] = useState('')
  const [bizUnit, setBizUnit] = useState(0)
  const [checkedRowKey, setCheckedRowKey] = useState(null)
  const [keyPath, setKeyPath] = useState(null)
  const [checkedPath, setCheckedPath] = useState(false)
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), [])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [gridData, setGridData] = useState([])
  const [isAPISuccess, setIsAPISuccess] = useState(true)
  const { t } = useTranslation()

  const fetchDeliveryData = async () => {
    if (!isAPISuccess) {
      return
    }
    setLoadingA(true)
    setIsAPISuccess(false)

    let hideLoadingMessage
    try {
      hideLoadingMessage = message.loading(
        'Đang tải dữ liệu, vui lòng chờ...',
        0,
      )
      const deliveryResponse = await GetDeliveryList(
        formData ? formatDate(formData) : '',
        toDate ? formatDate(toDate) : '',
        deliveryNo,
        bizUnit,
      )
      if (deliveryResponse?.success) {
        setData(deliveryResponse.data || [])
        setIsAPISuccess(true)
      } else {
        setData([])
        setIsAPISuccess(true)
        message.error('Có lỗi xảy ra khi tải dữ liệu.')
      }
    } catch (error) {
      setData([])
      setIsAPISuccess(true)
      message.error('Có lỗi xảy ra khi tải dữ liệu.')
    } finally {
      if (hideLoadingMessage) hideLoadingMessage()
      setIsAPISuccess(true)
      setLoadingA(false)
    }
  }

  useEffect(() => {
    fetchDeliveryData()
  }, [])

  const fetchCodeHelpData = useCallback(async () => {
    setLoading(true)
    try {
      const codeHelpResponse = await GetCodeHelpCombo(
        '',
        6,
        10003,
        1,
        '%',
        '',
        '',
        '',
        '',
      )
      setDataUnit(codeHelpResponse?.data || [])
    } catch (error) {
      setDataUnit([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchCodeHelpData = useMemo(
    () => debounce(fetchCodeHelpData, 100),
    [fetchCodeHelpData],
  )

  const nextPageStockIn = useCallback(() => {
    if (keyPath) {
      navigate(`/wms/u/warehouse/material/waiting-iqc-stock-in/${keyPath}`)
    }
  }, [keyPath, navigate])

  const onCellClicked = (cell, event) => {
    let rowIndex

    if (cell[0] !== -1) {
      return
    }

    if (cell[0] === -1) {
      rowIndex = cell[1]
      setIsMinusClicked(true)
    } else {
      rowIndex = cell[0]
      setIsMinusClicked(false)
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      setKeyPath(null)
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < gridData.length) {
      const rowData = gridData[rowIndex]

      const filteredData = {
        DelvNo: rowData.DelvNo,
        DelvMngNo: rowData.DelvMngNo,
        ImpType: rowData.ImpType,
        TotalQty: rowData.TotalQty,
        OkQty: rowData.OkQty,
        RemainQty: rowData.RemainQty,
        DelvDate: rowData.DelvDate,
        CustSeq: rowData.CustSeq,
        CustNm: rowData.CustNm,
        DomOrImp: rowData.DomOrImp,
        PurchaseType: rowData.PurchaseType,
        BizUnitName: rowData.BizUnitName,
        BizUnit: rowData.BizUnit,
        EmpSeq: rowData.EmpSeq,
        EmpName: rowData.EmpName,
        DeptSeq: rowData.DeptSeq,
        DeptName: rowData.DeptName,
        CurrSeq: rowData.CurrSeq,
        CurrName: rowData.CurrName,
        ExRate: rowData.ExRate,
      }
      const secretKey = 'TEST_ACCESS_KEY'
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(filteredData),
        secretKey,
      ).toString()

      if (isAPISuccess) {
        const encryptedToken = encodeBase64Url(encryptedData)
        setKeyPath(encryptedToken)
        setClickedRowData(rowData)
        setLastClickedCell(cell)
      }
    }
  }

  useEffect(() => {
    debouncedFetchCodeHelpData()
    return () => {
      debouncedFetchCodeHelpData.cancel()
    }
  }, [debouncedFetchCodeHelpData])
  return (
    <>
      <Helmet>
        <title>ITM - {t('Delivery List')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Delivery List')}
              </Title>
              <DeliveryActions
                fetchData={fetchDeliveryData}
                nextPageStockIn={nextPageStockIn}
                isAPISuccess={isAPISuccess}
              />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
                  <FilterOutlined />
                  {t('Điều kiện truy vấn')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>
              <div className="flex p-2 gap-4">
                <DeliveryListQuery
                  formData={formData}
                  setFormData={setFormData}
                  setDeliveryNo={setDeliveryNo}
                  setToDate={setToDate}
                  toDate={toDate}
                  deliveryNo={deliveryNo}
                  bizUnit={bizUnit}
                  setBizUnit={setBizUnit}
                  dataUnit={dataUnit}
                />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableDeliveryList
              data={data}
              setCheckedPath={setCheckedPath}
              checkedPath={checkedPath}
              setKeyPath={setKeyPath}
              loading={loading}
              setData={setData}
              onCellClicked={onCellClicked}
              setGridData={setGridData}
              gridData={gridData}
            />
          </div>
        </div>
      </div>
    </>
  )
}
