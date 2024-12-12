import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Card,
  Button,
  Modal,
  Space,
  Input,
  Typography,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Select,
  message,
  Form,
  Radio,
} from 'antd'

import { CreatePrintLabel } from '../../../../features/barcode/printBarcodeService'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import '@glideapps/glide-data-grid/dist/index.css'
import {
  checkConfirmBarcode,
  checkConfirmNewBarcode,
  confirmBarcode,
} from '../../../../features/barcode/barcodeChangeService'
import {
  BARCODE_ERR_MESSAGE,
  BARCODE_SUCCESS_MESSAGE,
} from '../../../../utils/constants'

export default function BarcodeChangeAction({
  fromDate,
  toDate,
  setNewDataAction,
  onFinish,
  onChangeBarcode,
  handleEnter,
  btnOpenModal,
  isModalVisible,
  setIsModalVisible,

  formChange,
  onChangeQty,
  onChangeNewQty,
  oldQty,
  newQty,
  setRemark,
  setUserId,
  clickedRowData,
}) {
  const [form] = Form.useForm()
  const [formPopup] = Form.useForm()
  const [data, setData] = useState([])

  const [oldBarcode, setOldBarcode] = useState('')
  const [newBarcode, setNewBarcode] = useState('')
  const [cfBarcode, setCfBarcode] = useState('')
  const [dataConfirm, setDataConfirm] = useState({})
  const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])
  form.setFieldsValue({ toDate: toDate })
  form.setFieldsValue({ fromDate: fromDate })
  const oldBarcodeRef = useRef(null)
  const newBarcodeRef = useRef(null)

  const [newLabel, setNewLabel] = useState({
    VENDOR: '',
    PARTNO: '',
    ITEMCD: '',
    LOTTOTALCNT: Number(0),
    LOTNO: '',
    QTY: Number(0),
    DATECODE: Number(),
    REELNO: '',
    USER_ID: '',
    REMARK: '',
    ISSUENO: '',
    LOTID: '',
  })

  const onFormLayoutChange = ({ layout }) => {}

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  const columns = useMemo(
    () => [
      { title: 'OLD BARCODE' },
      { title: 'NEW BARCODE' },
      { title: 'STATUS' },
    ],
    [],
  )
  const [cols, setCols] = useState(columns)
  const onColumnResize = useCallback(
    (column, newSize) => {
      const index = cols.indexOf(column)
      if (index !== -1) {
        const newCol = {
          ...column,
          width: newSize,
        }
        const newCols = [...cols]
        newCols.splice(index, 1, newCol)
        setCols(newCols)
      }
    },
    [cols],
  )

  const getData = useCallback(
    ([col, row]) => {
      const dataGrid = data[row] || {}
      const { oldBarcode = '', newBarcode = '', isconfirm = '' } = dataGrid

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(oldBarcode) },
        1: { kind: GridCellKind.Text, data: safeString(newBarcode) },
        2: { kind: GridCellKind.Text, data: safeString(isconfirm) },
      }

      if (columnMap.hasOwnProperty(col)) {
        const { kind, data } = columnMap[col]
        return { kind, data, displayData: data }
      }

      return { kind: GridCellKind.Text, data: '', displayData: '' }
    },
    [data],
  )

  const onChangeRemark = (e) => {
    setRemark(e.target.value)
  }

  const onChangeUserId = (e) => {
    setUserId(e.target.value)
  }

  const handleKeyDownOldBarcode = async (e) => {
    if (e.key === 'Enter') {
      const oldBarcode = e.target.value

      if (!oldBarcode.includes('/')) {
        message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
        return
      }

      const parts = oldBarcode.split('/')
      if (parts.length != 5) {
        message.info(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
        return
      }

      const dataConfirm = {
        oldBarcode,
        newBarcode,
        isconfirm: true,
      }

      try {
        setOldBarcode(oldBarcode)
        const result = await checkConfirmBarcode(dataConfirm)

        if (result.result[0] != null) {
          setNewBarcode(result.result[0].NewBarcodeID)
        } else {
          message.info(BARCODE_ERR_MESSAGE.NO_DATA_BARCODEID)
        }
      } catch (err) {
        console.log(err)
      }
      newBarcodeRef.current.focus()
    }
  }

  const onKeyDownNewBarcode = async (e) => {
    if (e.key === 'Enter') {
      const INewBarcode = e.target.value
      if (!INewBarcode.includes('/')) {
        message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
        return
      }

      const parts = INewBarcode.split('/')
      if (parts.length != 5) {
        message.info(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
        return
      }

      if (INewBarcode != newBarcode) {
        console.log(newBarcode)
        message.info(BARCODE_ERR_MESSAGE.NEW_BARCODE_NOT_MATCH)
        return
      }

      const dataConfirm = {
        oldBarcode,
        newBarcode,
        isconfirm: true,
      }

      try {
        const result = await checkConfirmNewBarcode(dataConfirm)

        if (result != null) {
          formPopup.setFieldsValue({ cfBarcode: result.result[0].NewBarcodeID })
          formPopup.setFieldsValue({ userid: result.result[0].UserID })
          formPopup.setFieldsValue({ status: 'OK' })
          // formPopup.setFieldsValue({ time: result.result[0].LastDateTime});

          const newRow = {
            oldBarcode: dataConfirm.oldBarcode,
            newBarcode: result.result[0].NewBarcodeID,
            isconfirm: 'OK',
          }

          const isDuplicate = data.some(
            (row) =>
              row.newBarcode === newRow.newBarcode &&
              row.oldBarcode === newRow.oldBarcode,
          )

          if (!isDuplicate) {
            setData([...data, newRow])
          } else {
            message.info(BARCODE_ERR_MESSAGE.DUPLICATE_ROW)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleBtnConfirm = async () => {
    const body = data
    try {
      const result = await confirmBarcode(body)
      resetValueModal()
      setIsModalVisible(false)
      if (result.status) {
        message.info(BARCODE_SUCCESS_MESSAGE.BARCODE_CONFIRM_SUCCESS)
      } else {
        message.info(BARCODE_ERR_MESSAGE.BARCODE_NOT_CONFIRM)
      }
    } catch (err) {
      message.error(err)
      resetValueModal()
      setIsModalVisible(false)
    }
  }

  const handleCancel = () => {
    resetValueModal()
    setIsModalVisible(false)
  }

  const resetValueModal = () => {
    setOldBarcode('')
    setNewBarcode('')
    setCfBarcode('')
    setUserId('')
    setData([])
    formPopup.resetFields()
  }

  useEffect(() => {
    formChange.resetFields()
    if (clickedRowData?.BarcodeID) {
      formChange.setFieldsValue({ oldBarcode: clickedRowData.BarcodeID })
    }
    if (clickedRowData?.Remark) {
      formChange.setFieldsValue({ remark: clickedRowData.Remark })
    }
    if (clickedRowData?.UserID) {
      formChange.setFieldsValue({ userID: clickedRowData.UserID })
    }
  }, [formChange, clickedRowData])

  return (
    <div className="mt-1">
      <Card className="mb-1 p-1 shadow-sm" size="small">
        <Card className="mb-1 p-1 shadow-sm" size="small">
          <Form
            layout={'inline'}
            form={form}
            initialValues={{
              layout: 'inline',
            }}
            style={{
              maxWidth: 'inline' ? 'none' : 600,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label="From Date" name="fromDate">
              <DatePicker size="small" />
            </Form.Item>

            <Form.Item label="To Date" name="toDate">
              <DatePicker size="small" />
            </Form.Item>

            <Form.Item label="Barcode" name="barcode">
              <Input placeholder="" size="small" />
            </Form.Item>
            <Form.Item label="Mat ID" name="matID">
              <Input placeholder="" size="small" />
            </Form.Item>
            <Form.Item label="Lot No" name="lotNo">
              <Input placeholder="" size="small" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="small" htmlType="submit">
                SEARCH
              </Button>
            </Form.Item>

            <Form.Item>
              <Button onClick={btnOpenModal} type="primary" size="small">
                PRINT
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card className="mb-1 p-1 shadow-sm" size="small">
          <Form
            layout={'inline'}
            form={formChange}
            initialValues={{
              layout: 'inline',
            }}
            onValuesChange={onFormLayoutChange}
            style={{
              maxWidth: 'inline' ? 'none' : 600,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Barcode" name="oldBarcode">
              <Input placeholder="" size="small" onKeyDown={handleEnter} />
            </Form.Item>
            <Form.Item label="Pre QTY" name="preQty">
              <Input
                placeholder=""
                size="small"
                type="number"
                min={0}
                disabled={true}
              />
            </Form.Item>
            <Form.Item label="Change QTY" name="changeQty">
              <Input
                placeholder=""
                size="small"
                type="number"
                min={0}
                onChange={onChangeQty}
              />
            </Form.Item>
            <Form.Item label="QTY" name="qty">
              <Input
                placeholder=""
                size="small"
                type="number"
                min={0}
                value={newQty}
                disabled={true}
                onChange={onChangeNewQty}
              />
            </Form.Item>

            <Form.Item label="Remark" name="remark">
              <Input placeholder="" size="small" onChange={onChangeRemark} />
            </Form.Item>
            <Form.Item label=" User ID" name="userID">
              <Input placeholder="" size="small" onChange={onChangeUserId} />
            </Form.Item>

            <Form.Item label="1D Position" layout={'inline'}>
              <Form.Item name="barcodePosX" layout={'inline'}>
                <Input
                  placeholder="X"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>
              <Form.Item name="barcodePosY" layout={'inline'}>
                <Input
                  placeholder="Y"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item label="1D Size" layout={'inline'}>
              <Form.Item name="barcodeSizeX" layout={'inline'}>
                <Input
                  placeholder="X"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>

              <Form.Item name="barcodeSizeY" layout={'inline'}>
                <Input
                  placeholder="Y"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item label="2D Position" layout={'inline'}>
              <Form.Item name="qrcodePosX" layout={'inline'}>
                <Input
                  placeholder="X"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>

              <Form.Item name="qrcodePosY" layout={'inline'}>
                <Input
                  placeholder="Y"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>
            </Form.Item>

            <Form.Item label="2D Size" layout={'inline'}>
              <Form.Item name="qrcodeSizeX" layout={'inline'}>
                <Input
                  placeholder="X"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>
              <Form.Item name="qrcodeSizeY" layout={'inline'}>
                <Input
                  placeholder="Y"
                  size="small"
                  style={{ width: 50 }}
                  type="number"
                  min={0}
                />
              </Form.Item>
            </Form.Item>
          </Form>
        </Card>

        <Modal
          title="Print Label Confirmation"
          visible={isModalVisible}
          onOk={handleBtnConfirm}
          onCancel={handleCancel}
          width={800}
        >
          <Form
            layout={'inline'}
            form={formPopup}
            initialValues={{
              layout: 'inline',
            }}
            onValuesChange={onFormLayoutChange}
            style={{
              maxWidth: 'inline' ? 'none' : 600,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Barcode" name="oldBarcode" layout={'inline'}>
              <Input
                size="small"
                style={{ width: 350 }}
                onKeyDown={handleKeyDownOldBarcode}
              />
            </Form.Item>

            <Form.Item label="New Barcode" name="newBarcode" layout={'inline'}>
              <Input
                size="small"
                style={{ width: 320 }}
                ref={newBarcodeRef}
                onKeyDown={onKeyDownNewBarcode}
              />
            </Form.Item>

            <Form.Item
              label="Barcode Confirm"
              name="cfBarcode"
              layout={'inline'}
            >
              <Input size="small" style={{ width: 300 }} disabled={true} />
            </Form.Item>

            <Form.Item label="Time" name="time">
              <DatePicker size="small" />
            </Form.Item>

            <Form.Item label="User ID" name="userid">
              <Input size="small" style={{ width: 100 }} />
            </Form.Item>

            <Form.Item label="Status" name="status">
              <Input size="small" style={{ width: 100 }} disabled={true} />
            </Form.Item>
          </Form>

          <div className="w-full gap-1  h-screen flex items-center justify-center pb-8">
            <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
              <DataEditor
                columns={cols}
                getCellContent={getData}
                rows={data.length}
                getCellsForSelection={true}
                width="100%"
                height="100%"
                rowMarkers={('checkbox-visible', 'both')}
                onColumnResize={onColumnResize}
                smoothScrollY={true}
                smoothScrollX={true}
                rowSelect="multi"
              />
            </div>
          </div>
        </Modal>
      </Card>
    </div>
  )
}
