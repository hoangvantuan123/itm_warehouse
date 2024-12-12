import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, Layout, Button, message, Form } from 'antd'
const { Title } = Typography
const { Header, Content } = Layout
import 'moment/locale/vi'
import { useCallback, useEffect, useMemo, useState } from 'react'
import dayjs from 'dayjs'
import BarcodeChangeAction from '../../components/actions/barcodePrint/barcodeChangAction'
import TabelBarcodeChange from '../../components/table/barcodePrint/tableBarcodeChange'
import {
  createChangeBarcode,
  searchPage,
} from '../../../features/barcode/barcodeChangeService'
import { use } from 'react'
import { BARCODE_ERR_MESSAGE, ERROR_MESSAGES } from '../../../utils/constants'

export default function BarcodeChange({ permissions, isMobile }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const { t } = useTranslation()
  const [dataInfo, setDataInfo] = useState([])
  const [rowChecked, setRowChecked] = useState(null)
  const [fromDate, setFromDate] = useState(dayjs().startOf('week'))
  const [toDate, setToDate] = useState(dayjs().endOf('week'))
  const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])

  const [gridData, setGridData] = useState([])
  const [selectRow, setSelectRow] = useState(null)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [dataAc, setDataAc] = useState({})
  const [formChange] = Form.useForm()

  const [oldQty, setOldQty] = useState()
  const [NewQty, setNewQty] = useState('')
  const [changeQty, setChangeQty] = useState('')

  const [BarcodeID, setBarcodeID] = useState('')
  const [ItemNo, setItemNo] = useState('')
  const [LotNo, setLotNo] = useState('')
  const [DateCode, setDateCode] = useState('')
  const [ReelNo, setReelNo] = useState('')
  const [NewBarcodeID, setNewBarCodeId] = useState('')
  const [Remark, setRemark] = useState('')
  const [UserID, setUserID] = useState('')

  const getMultiSelectedRows = () => {
    const selectedRows = selectRow.rows.items

    let rows = []

    selectedRows.forEach((range) => {
      const start = range[0]
      const end = range[1] - 1

      for (let i = start; i <= end; i++) {
        rows.push(data[i])
        setDataInfo(data[i])
      }
    })

    return rows
  }

  const getValues = () => {
    const values = formChange.getFieldsValue()
    console.log('Current values:', values)
  }

  useEffect(() => {
    formChange.resetFields()
    const unsubscribe = formChange.setFieldsValue(() => {
      getValues()
    })

    return () => unsubscribe
  }, [formChange])

  const listSelect = useCallback(
    async (e) => {
      setRowChecked(null)

      const selectedRows = getMultiSelectedRows()
      if (selectedRows.length === 0) {
        message.warning('Vui lòng chọn ít nhất một hàng.')
        return
      }

      setRowChecked(selectedRows)
    },
    [data, selectRow],
  )

  const onFinish = async (e) => {
    setData([])
    const { fromDate, toDate, lotNo, matID, barcode } = e

    try {
      const result = await searchPage(
        formatDate(fromDate),
        formatDate(toDate),
        lotNo,
        matID,
        barcode,
      )

      setData(result.data.data || [])
    } catch (err) {
      setData([])
    }
  }

  const onChangeBarcode = (e) => {
    const inputValue = e.target.value
    setBarcodeID(inputValue)

    if (!inputValue.includes('/')) {
      message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
      return
    }

    const arrLot = inputValue.split('/')
    if (arrLot.length != 5) {
      message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
      return
    }

    setItemNo(arrLot[0])
    setLotNo(arrLot[1])
    setOldQty(arrLot[2])
    setDateCode(arrLot[3])
    setReelNo(arrLot[4])
    formChange.setFieldsValue({ preQty: arrLot[2] })
  }

  const onChangeQty = (e) => {
    const changeQty = e.target.value
    const newQty = oldQty - changeQty
    setNewQty(newQty)
    formChange.setFieldsValue({ qty: newQty })
    setNewBarCodeId(
      ItemNo + '/' + LotNo + '/' + newQty + '/' + DateCode + '/' + ReelNo,
    )
  }

  const onChangeNewQty = (e) => {}

  const [isModalVisible, setIsModalVisible] = useState(false)

  const btnOpenModal = async (e) => {
    const listSelected = getMultiSelectedRows()

    if (listSelected.length >= 1) {
      const body = {
        isConfirm: false,
        listSelected,
      }

      try {
        const result = await createChangeBarcode(body)

        setData(result.data || [])
      } catch (err) {
        setData([])
      }
    } else {
      setIsModalVisible(true)
      const listSelected = []
      listSelected.push({
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
      })

      const body = {
        isConfirm: true,
        listSelected,
      }

      try {
        const result = await createChangeBarcode(body)

        setData(result.data || [])
      } catch (err) {
        setData([])
      }
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      onChangeBarcode(e)
    }
  }

  return (
    <Layout className="h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('BARCODE CHANGE')}</title>
      </Helmet>

      <div className="flex flex-col h-full ">
        <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">
          <Title level={5} className="mt-2 uppercase">
            {t('BARCODE CHANGE')}
          </Title>

          <BarcodeChangeAction
            fromDate={fromDate}
            toDate={toDate}
            setNewDataAction={setDataAc}
            onFinish={onFinish}
            onChangeBarcode={onChangeBarcode}
            handleEnter={handleEnter}
            btnOpenModal={btnOpenModal}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            formChange={formChange}
            onChangeQty={onChangeQty}
            onChangeNewQty={onChangeNewQty}
            oldQty={oldQty}
            newQty={NewBarcodeID}
            setRemark={setRemark}
            setUserId={setUserID}
            clickedRowData={clickedRowData}
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
              />
            </div>
          </div>
        </Content>
      </div>
    </Layout>
  )
}
