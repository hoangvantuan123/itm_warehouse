import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import TableDeliveryList from '../../components/table/material/tableDeliveryList'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import StockOutRequestActions from '../../components/actions/material/StockOutRequestActions'
import StockOutRequestActionsDetails from '../../components/actions/material/StockOutRequestActionsDetails'
import StockOutRequestQueryDetails from '../../components/query/material/stockOutReqQueryDetails'
import TableStockOutRequestDetails from '../../components/table/material/tableStockOutRequestDetails'

const gridDataDA = [
  {
    IDX_NO: '123',
    IsStop: true,
    IsConfirm: false,
    FactUnitName: 'Unit A',
    ReqDate: '2024-12-01',
    OutReqNo: 'REQ-001',
    DeptName: 'Sales',
    EmpName: 'John Doe',
    CustName: 'Customer 1',
    UseTypeName: 'Use Type 1',
    WorkOrderNo: 'WO-001',
    AssyItemName: 'Item A',
    AssyItemNo: '12345',
    AssyItemSpec: 'Spec 1',
    AssyUnitName: 'Unit 1',
    ProcName: 'Proc A',
    AssyQty: '100',
    AssyProgQty: '50',
    ItemName: 'Item B',
    ItemNo: '67890',
    ItemSpec: 'Spec 2',
    UnitName: 'Box',
    Qty: '200',
    ProgQty: '150',
    IsReturn: false,
    Remark: 'No issues',
    ItemSeq: '1',
    ItemUnitSeq: '1',
    AssyItemSeq: '1',
    PJTSeq: 'PJT-001',
    WBSSeq: 'WBS-001',
    FactUnit: 'Fact A',
    OutReqSeq: 'REQSEQ-001',
    UseType: 'Type A',
    OSPPOSeq: 'OS-001',
    ProgStatus: 'In Progress',
    ProgStatusName: 'In Progress Status',
    ProdPlanNo: 'PLAN-001',
    ProdPlanSeq: 'SEQ-001',
    ProdReqNo: 'REQ-001',
  },
  {
    IDX_NO: '124',
    IsStop: false,
    IsConfirm: true,
    FactUnitName: 'Unit B',
    ReqDate: '2024-12-02',
    OutReqNo: 'REQ-002',
    DeptName: 'Marketing',
    EmpName: 'Jane Doe',
    CustName: 'Customer 2',
    UseTypeName: 'Use Type 2',
    WorkOrderNo: 'WO-002',
    AssyItemName: 'Item B',
    AssyItemNo: '67891',
    AssyItemSpec: 'Spec 3',
    AssyUnitName: 'Unit 2',
    ProcName: 'Proc B',
    AssyQty: '200',
    AssyProgQty: '100',
    ItemName: 'Item C',
    ItemNo: '98765',
    ItemSpec: 'Spec 4',
    UnitName: 'Pack',
    Qty: '300',
    ProgQty: '250',
    IsReturn: true,
    Remark: 'Returned item',
    ItemSeq: '2',
    ItemUnitSeq: '2',
    AssyItemSeq: '2',
    PJTSeq: 'PJT-002',
    WBSSeq: 'WBS-002',
    FactUnit: 'Fact B',
    OutReqSeq: 'REQSEQ-002',
    UseType: 'Type B',
    OSPPOSeq: 'OS-002',
    ProgStatus: 'Completed',
    ProgStatusName: 'Completed Status',
    ProdPlanNo: 'PLAN-002',
    ProdPlanSeq: 'SEQ-002',
    ProdReqNo: 'REQ-002',
  },
]


export default function StockOutRequestDetails({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(gridDataDA)
  const [dataUnit, setDataUnit] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month'))
  const [toDate, setToDate] = useState(dayjs())
  const [deliveryNo, setDeliveryNo] = useState('')
  const [bizUnit, setBizUnit] = useState(4)
  const [checkedRowKey, setCheckedRowKey] = useState(null)
  const [keyPath, setKeyPath] = useState(null)
  const [checkedPath, setCheckedPath] = useState(false)
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), [])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [gridData, setGridData] = useState([])
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  /* CodeHelp */
  const [modalVisible1, setModalVisible1] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const [modalVisible3, setModalVisible3] = useState(false)
  const [loadingCodeHelp, setLoadingCodeHelp] = useState(false)
  const [errorCodeHelp, setErrorCodeHelp] = useState('')
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
      setModal3Open(true)
      return null
    }
  }
  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      console.log('data' , data)
      if (data) {
        setFilteredData(data)
      }
    }
  }, [id])

  
  const fetchDeliveryData = useCallback(async () => {
    setLoading(true)
    try {

    } catch (error) {
      setData([])
    } finally {
      setLoading(false)
    }
  }, [formData, toDate, deliveryNo, bizUnit, formatDate])

  const fetchCodeHelpData = useCallback(async () => {
    setLoading(true)
    try {
      const codeHelpResponse = await GetCodeHelp(
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


  const debouncedFetchDeliveryData = useMemo(
    () => debounce(fetchDeliveryData, 100),
    [fetchDeliveryData],
  )
  const debouncedFetchCodeHelpData = useMemo(
    () => debounce(fetchCodeHelpData, 100),
    [fetchCodeHelpData],
  )


  const nextPageStockIn = useCallback(() => {
    if (keyPath) {
      navigate(`/u/warehouse/material/waiting-iqc-stock-in/${keyPath}`)
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
        IsStop: rowData.IsStop,
      
      }
      const secretKey = 'TEST_ACCESS_KEY'
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(filteredData),
        secretKey,
      ).toString()
      const encryptedToken = encodeBase64Url(encryptedData)
      setKeyPath(encryptedToken)
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }

  }


  useEffect(() => {
    debouncedFetchDeliveryData()
    return () => {
      debouncedFetchDeliveryData.cancel()
    }
  }, [debouncedFetchDeliveryData])

  useEffect(() => {
    debouncedFetchCodeHelpData()
    return () => {
      debouncedFetchCodeHelpData.cancel()
    }
  }, [debouncedFetchCodeHelpData])


  const handleSearch1 = async () => {
    setLoadingCodeHelp(true)
    setModalVisible1(true)
    setErrorCodeHelp('')
   
  }
  const handleSearch2 = async () => {
    setLoadingCodeHelp(true)
    setModalVisible2(true)
    setErrorCodeHelp('')
   
  }
  
  const handleSearch3 = async () => {
    setLoadingCodeHelp(true)
    setModalVisible3(true)
    setErrorCodeHelp('')
   
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
                {t('Stock Out Request')}
              </Title>
              <StockOutRequestActionsDetails/>
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open={isOpenDetails}
              onToggle={handleToggle}
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

                <StockOutRequestQueryDetails
                  formData={formData}
                  setFormData={setFormData}
                  setToDate={setToDate}
                  toDate={toDate}
                  dataUnit={dataUnit}
                  setBizUnit={setBizUnit}

                  
                />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg">
            <TableStockOutRequestDetails data={data}
              loading={loading}
              setData={setData}
              onCellClicked={onCellClicked}
              setGridData={setGridData}
              gridData={gridData} />


          </div>
        </div>
      </div>
     
    </>
  )
}
