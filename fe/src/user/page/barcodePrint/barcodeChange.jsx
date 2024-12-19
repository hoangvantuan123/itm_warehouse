import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, Layout, message, Form } from 'antd'
const { Title } = Typography
const { Header, Content } = Layout
import 'moment/locale/vi'
import { useCallback, useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import BarcodeChangeAction from '../../components/actions/barcodePrint/barcodeChangAction'
import TabelBarcodeChange from '../../components/table/barcodePrint/tableBarcodeChange'
import {
  createChangeBarcode,
  getPrinterDevice,
  isExistBarcode,
  searchPage,
} from '../../../features/barcode/barcodeChangeService'
import {
  BARCODE_ERR_MESSAGE,
  BARCODE_SUCCESS_MESSAGE,
} from '../../../utils/constants'

import { FilterOutlined } from '@ant-design/icons'
import BarcodeChangeFilter from '../../components/actions/barcodePrint/barcodeChangeFilter'

export default function BarcodeChange({ permissions, isMobile }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [reload, setReload] = useState(0);
  const { t } = useTranslation()
  const [fromDate, setFromDate] = useState(dayjs().startOf('week'))
  const [toDate, setToDate] = useState(dayjs().endOf('week'))
  const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])
  const [showSearch, setShowSearch] = useState(false)

  const [modal2Open, setModal2Open] = useState(false)
  const [error, setError] = useState('')

  const [gridData, setGridData] = useState([])
  const [selectRow, setSelectRow] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [formChange] = Form.useForm()

  const [lotNoSearch, setLotNoSearch] = useState('');
  const [matIdSearch, setMatIdSearch] = useState('');
  const [barcodeSearch, setBarcodeSearch] = useState('');

  const [oldQty, setOldQty] = useState()
  const [NewQty, setNewQty] = useState()

  const [BarcodeID, setBarcodeID] = useState('')
  const [ItemNo, setItemNo] = useState('')
  const [LotNo, setLotNo] = useState('')
  const [DateCode, setDateCode] = useState('')
  const [ReelNo, setReelNo] = useState('')
  const [NewBarcodeID, setNewBarCodeId] = useState('')
  const [Remark, setRemark] = useState('')
  const [UserID, setUserID] = useState('')
  const [device, setDevice] = useState('')
  const barcodeRef = useState(null)
  const changeQtyRef = useRef(null)
  const remarkRef = useRef(null)

  const [sizeLabel, setSizeLabel] = useState({
    barCodePosX: Number(180),
    barCodePosY: Number(30),
    barCodeSizeX: Number(1),
    barCodeSizeY: Number(1),
    QrPosX: Number(700),
    QrPosY: Number(60),
    QrSizeX: Number(3.5),
    QrSizeY: Number(3.5),
    paperSizeX: Number(790),
    paperSizeY: Number(160),
  })

  const getMultiSelectedRows = () => {
    const selectedRows = selectRow.rows.items

    let rows = []

    selectedRows.forEach((range) => {
      const start = range[0]
      const end = range[1] - 1

      for (let i = start; i <= end; i++) {
        rows.push(data[i])
      }
    })

    return rows
  }

  useEffect(() => {
    formChange.resetFields();
    
  }, [formChange])

  useEffect(() => {

    fetchData();
    resetAllData();

    const userInfo = localStorage.getItem('userInfo')
    const parsedData = JSON.parse(userInfo)
    getDeviceOptions(parsedData.UserId);
    const storedDevices = JSON.parse(localStorage.getItem("optionDevices")) || [];
    setDevice(storedDevices[0]?.value)
  }, [reload]);

  const onFinish = async () => {
    fetchData();
  }

  const fetchData = async () => {
    setData([])

    let loadingMessage;

    try {
      setLoading(true)
      loadingMessage = message.loading('Please Wait...', 0)
      const result = await searchPage(
        formatDate(fromDate),
        formatDate(toDate),
        lotNoSearch || null,
        matIdSearch || null,
        barcodeSearch || null,
      )

      setData(result.data.data || [])
    } catch (err) {
      setData([])
    } finally {
      setLoading(false)
      if (loadingMessage) loadingMessage()
    }
  }

  const onChangeBarcode = async (e) => {
    const inputValue = e.target.value
    let oldQty = ''
    if (!inputValue.includes('/')) {
      setModal2Open(true), setError(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
      resetAllData()
      formChange.resetFields()
      return
    }

    const arrLot = inputValue.split('/')
    if (arrLot.length != 5) {
      setModal2Open(true), setError(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
      resetAllData()
      formChange.resetFields()
      return
    }

    const param = {
      barcodeID: inputValue,
      itemNo: arrLot[0],
      lotNo: arrLot[1] + '/' + arrLot[3] + '/' + arrLot[4],
    }

    try {
      const result = await isExistBarcode(param)

      if (!result.status) {
        setModal2Open(true), setError(result.message + ': ' + result.data)
        resetAllData()
        formChange.resetFields()
        barcodeRef.current.focus()
      } else {
        oldQty = Number(arrLot[2])
        setBarcodeID(inputValue)
        setItemNo(arrLot[0])
        setLotNo(arrLot[1])
        setOldQty(oldQty)
        setDateCode(arrLot[3])
        setReelNo(arrLot[4])
      }
    } catch (err) {
      message.error(err)
    }

    formChange.setFieldsValue({ preQty: oldQty })
    changeQtyRef.current.focus()
  }

  const onChangeNewQty = (e) => { }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const btnOpenModal = useCallback(async () => {
    const validBody = (body) => {
      if (!body.ItemNo.includes('/')) {
        message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
        return
      }
    }

    const listSelected = getMultiSelectedRows()
    const createPayload = (isConfirm, rows, device, sizeLabel) => ({
      isConfirm,
      listSelected: rows,
      device: device,
      sizeLabel: sizeLabel
    })

    const handleCreateChangeBarcode = async (body) => {
      let loadingMessage;
      try {
        loadingMessage = message.loading('Printing...', 0)
        return await createChangeBarcode(body)
      } catch (err) {
        console.error('Error creating barcode change:', err)
        message.error(BARCODE_ERR_MESSAGE.PRINTER_ERROR)
      }
      finally{
        if (loadingMessage) loadingMessage()
      }
    }

    if (listSelected.length >= 1) {
      const body = createPayload(false, listSelected, device, sizeLabel)
      const isSucces = await handleCreateChangeBarcode(body)
      if (isSucces.result.status) {
        message.success(BARCODE_SUCCESS_MESSAGE.PRINTER_SUCCESS)
        return
      } else {
        setModal2Open(true), setError(isSucces.result.message)
        resetAllData()
        return
      }
    } else {
      const singleRow = {
        ItemNo,
        LotNo,
        NewQty,
        oldQty,
        DateCode,
        ReelNo,
        BarcodeID,
        NewBarcodeID,
        Remark,
        UserID,
        NewStatus: '',
      }

      const body = createPayload(true, [singleRow], device, sizeLabel)
      const isSucces = await handleCreateChangeBarcode(body)

      if (isSucces.result.status) {
        message.success(BARCODE_SUCCESS_MESSAGE.PRINTER_SUCCESS);
        setIsModalVisible(true);
        resetAllData();
        return
      } else {
        setModal2Open(true), setError(isSucces.result.message);
        resetAllData();
        return
      }
    }
  }, [getMultiSelectedRows, createChangeBarcode, setData, setIsModalVisible])

  const onKeyDownBarcode = (e) => {
    if (e.key === 'Enter') {
      onChangeBarcode(e)
    }
  }

  const onKeyDownChangeQty = (e) => {
    const value = Number(e.target.value)
    if (value > oldQty) {
      message.error(BARCODE_ERR_MESSAGE.NOT_LANGER_THAN_PRE_QTY)
      setNewQty(null)
      formChange.setFieldsValue({ qty: 0 })
      setNewBarCodeId(null)
      return
    }

    if (e.key == 'Enter') {
      const newQty = oldQty - value
      setNewQty(newQty)
      formChange.setFieldsValue({ qty: newQty })
      setNewBarCodeId(
        ItemNo + '/' + LotNo + '/' + newQty + '/' + DateCode + '/' + ReelNo,
      )
      remarkRef.current.focus()
    }
  }

  const getDeviceOptions = async (body) => {
    try {
      const result = await getPrinterDevice(body)
      if (result?.result) {
        const data = result.result

        const formattedOptions = data.map((item, index) => ({
          label: item.ip,
          value: `${item.ip}:${item.port}`,
          key: index.toString(),
        }))

        localStorage.setItem("optionDevices", JSON.stringify(formattedOptions));
      } else {
        message.error(BARCODE_ERR_MESSAGE.NO_DATA_PRINTER)
        return
      }
    } catch (err) {
      console.error('Error creating barcode change:', err)
      message.error(BARCODE_ERR_MESSAGE.NO_DATA_PRINTER)
    }
  }

  const handleOnchangeDevice = (e) => {
    if (!e) {
      setDevice(null)
    } else {
      setDevice(e.value)
    }
  }

  const resetAllData = () => {
    setItemNo('')
    setLotNo('')
    setNewQty('')
    setOldQty('')
    setDateCode('')
    setReelNo('')
    setBarcodeID('')
    setNewBarCodeId('')
    setRemark('')
    setUserID('')
    // setDevice('')
    formChange.resetFields()
  }

  return (
    <Layout className="h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('BARCODE CHANGE')}</title>
      </Helmet>

      <div className="flex flex-col h-full ">
        <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">

          <div className="flex items-center justify-between mb-2">
            <Title level={4} className="mt-2 uppercase opacity-85 ">
              {t('CHANGE BARCODE')}
            </Title>
            <BarcodeChangeAction
              fromDate={fromDate}
              toDate={toDate}
              onFinish={onFinish}
              handleEnter={onKeyDownBarcode}
              btnOpenModal={btnOpenModal}
              formChange={formChange}
            />
          </div>

          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
              <FilterOutlined />
              {t('Điều kiện truy vấn')}
            </h2>
          </summary>
          <BarcodeChangeFilter
            fromDate={fromDate}
            setFromDate= {setFromDate}
            toDate={toDate}
            setToDate = {setToDate}
            onFinish={onFinish}
            setMatIdSearch={setMatIdSearch}
            setLotNoSearch={setLotNoSearch}
            setBarcodeSearch={setBarcodeSearch}
            handleEnter={onKeyDownBarcode}
            btnOpenModal={btnOpenModal}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            setReload={setReload}

            formChange={formChange}
            onKeyDownChangeQty={onKeyDownChangeQty}
            barcodeRef={barcodeRef}
            changeQtyRef={changeQtyRef}
            remarkRef={remarkRef}
            onChangeNewQty={onChangeNewQty}
            oldQty={oldQty}
            newQty={NewBarcodeID}
            setRemark={setRemark}
            setUserId={setUserID}
            clickedRowData={clickedRowData}
            handleOnchangeDevice={handleOnchangeDevice}
            sizeLabel = {sizeLabel}
            setSizeLabel={setSizeLabel}

            modal2Open={modal2Open}
            setModal2Open={setModal2Open}
            error={error}
            setError={setError}
          />
        </Header>

        <Content className="flex-grow px-4  bg-slate-50">
          <div className="h-full flex flex-col">
            <div className="flex-grow">
              <TabelBarcodeChange
                data={data}
                setGridData={setGridData}
                gridData={gridData}
                setSelectRow={setSelectRow}
                setClickedRowData={setClickedRowData}

                showSearch={showSearch}
                setShowSearch={setShowSearch}
              />
            </div>
          </div>
        </Content>
      </div>
    </Layout>
  )
}
