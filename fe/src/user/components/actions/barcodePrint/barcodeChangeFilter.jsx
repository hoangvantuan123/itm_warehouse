import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Card,
  Modal,
  Input,
  DatePicker,
  Select,
  message,
  Form,
  Row,
  Divider,
  Button,
} from 'antd'

import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import '@glideapps/glide-data-grid/dist/index.css'
import {
  checkConfirmBarcode,
  checkConfirmNewBarcode,
  confirmBarcode,
  createDevicePrintBy,
} from '../../../../features/barcode/barcodeChangeService'
import {
  BARCODE_ERR_MESSAGE,
  BARCODE_SUCCESS_MESSAGE,
} from '../../../../utils/constants'
import ModalWaiting from '../../modal/material/modalWaiting'
import { ArrowIcon } from '../../icons'
import {
  FilterOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

export default function BarcodeChangeFilter({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  onFinish,
  setLotNoSearch,
  setMatIdSearch,
  setBarcodeSearch,
  handleEnter,
  isModalVisible,
  setIsModalVisible,
  setReload,

  modal2Open,
  setModal2Open,
  error,
  setError,

  formChange,
  onKeyDownChangeQty,
  barcodeRef,
  changeQtyRef,
  remarkRef,
  onChangeNewQty,
  newQty,
  setRemark,
  setUserId,
  handleOnchangeDevice,
  sizeLabel,
  setSizeLabel,
}) {
  const [form] = Form.useForm()
  const [formPopup] = Form.useForm()
  const [data, setData] = useState([])
  const { t } = useTranslation()

  const [oldBarcode, setOldBarcode] = useState('')
  const [newBarcode, setNewBarcode] = useState('')
  const [cfBarcode, setCfBarcode] = useState('')
  const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])
  
  const oldBarcodeRef = useRef(null)
  const newBarcodeRef = useRef(null)
  const userIdModalRef = useRef(null)
  const userIDRef = useRef(null)
  const inputRef = useRef(null);
  const [devices, setDevices] = useState(() =>
    JSON.parse(localStorage.getItem("optionDevices")) || [],
  )
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("userInfo")) || {},
  )
  const [name, setName] = useState('');

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

  const onKeyDownRemark = (e) => {
    if (e.key === 'Enter') {
      setRemark(e.target.value)
      userIDRef.current.focus()
    }
  }

  const onKeyDownUserId = (e) => {
    if (e.key === 'Enter') {
      setUserId(e.target.value)
    }
  }

  const onChangeUserId = (e) => {
    const userid = e.target.value
    setUserId(userid)
  }

  const onChangeRemark = (e) => {
    const remark = e.target.value
    setRemark(remark)
  }

  const handleKeyDownOldBarcode = async (e) => {
    if (e.key === 'Enter') {
      const oldBarcode = e.target.value

      if (!oldBarcode.includes('/')) {
        setModal2Open(true)
        setError(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT)
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
          message.info(BARCODE_SUCCESS_MESSAGE.CHECK_OLD_BARCODE_OK)
        } else {
          setError(BARCODE_ERR_MESSAGE.BARCODEID_NOT_EXISTS)
          setModal2Open(true)
          resetValueModal()
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
        setError(BARCODE_ERR_MESSAGE.NEW_BARCODEID_NOT_EXISTS)
        formPopup.resetFields(['newBarcode'])
        setModal2Open(true)
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
          formPopup.setFieldsValue({ cfBarcode: result.data[0].NewBarcodeID })
          formPopup.setFieldsValue({ userid: result.data[0].UserID })
          formPopup.setFieldsValue({ status: 'OK' })
          // formPopup.setFieldsValue({ time: result.result[0].LastDateTime});

          const newRow = {
            oldBarcode: dataConfirm.oldBarcode,
            newBarcode: result.data[0].NewBarcodeID,
            isconfirm: 'OK',
          }

          const isDuplicate = data.some(
            (row) =>
              row.newBarcode === newRow.newBarcode &&
              row.oldBarcode === newRow.oldBarcode,
          )

          if (!isDuplicate) {
            setData([...data, newRow])
            userIdModalRef.current.focus()
          } else {
            message.info(BARCODE_ERR_MESSAGE.DUPLICATE_ROW)
          }
        } else {
          setError(BARCODE_ERR_MESSAGE.BARCODEID_NOT_EXISTS)
          setModal2Open(true)
          formPopup.resetFields(newBarcode)
          resetValueModal()
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

      setIsModalVisible(false)

      if (result.status) {
        setModal2Open(true);
        setError(BARCODE_SUCCESS_MESSAGE.BARCODE_CONFIRM_SUCCESS);
        resetValueModal();
        setReload((pre) => pre + 1);
      } else {
        setError(BARCODE_ERR_MESSAGE.BARCODE_NOT_CONFIRM)
        setModal2Open(true)
        resetValueModal()
      }
    } catch (err) {
      message.error(err)
      resetValueModal()
      setError(err)
      setModal2Open(true)
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


  const setConfigSizeLabel = () => {
    formChange.setFieldsValue({
      barcodePosX: sizeLabel?.barCodePosX,
      barcodePosY: sizeLabel?.barCodePosY,
      barcodeSizeX: sizeLabel?.barCodeSizeX,
      barcodeSizeY: sizeLabel?.barCodeSizeY,

      qrcodePosX: sizeLabel?.QrPosX,
      qrcodePosY: sizeLabel?.QrPosY,
      qrcodeSizeX: sizeLabel?.QrSizeX,
      qrcodeSizeY: sizeLabel?.QrSizeY,

    })
  }

  const onChangeBarcodePosX =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'barCodePosX': Number(value),
    }));
  }

  const onChangeBarcodePosY =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'barCodePosY': Number(value),
    }));
  }

  const onChangeBarcodeSizeX =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'barCodeSizeX': Number(value),
    }));
  }

  const onChangeBarcodeSizeY =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'barCodeSizeY': Number(value),
    }));
  }

  const onChangeQrPosX =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'QrPosX': Number(value),
    }));
  }

  const onChangeQrPosY =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'QrPosY': Number(value),
    }));
  }

  const onChangeQrSizeX =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'QrSizeX': Number(value),
    }));
  }

  const onChangeQrSizeY =(e) => {
    const  value = e.target.value;
    setSizeLabel((prevState) => ({
      ...prevState,
      'QrSizeY': Number(value),
    }));
  }
  
  useEffect(() => {
    form.setFieldsValue({ toDate: toDate })
    form.setFieldsValue({ fromDate: fromDate })
    setConfigSizeLabel();
  }, [formChange, devices, setConfigSizeLabel, form, name])

  const addItem = async (e) => {
    e.preventDefault();
    const nameSplit = name.split(':');
    if (!nameSplit[0]?.trim() || !nameSplit[0]?.trim()) {
      message.error(BARCODE_ERR_MESSAGE.ADDRESS_IP_INCORECT);
      return;
    }
    const body = {
      userId: currentUser.UserId || 'annonymous',
      ip: nameSplit[0],
      port: nameSplit[1],
    }

    try {
      const result = await createDevicePrintBy(body);
      if (result?.result.status) {
        message.success(BARCODE_SUCCESS_MESSAGE.NEW_PRINTER_ADDED);
        const updatedDevices = [...devices, { label: nameSplit[0], value: name }];
        localStorage.setItem('storedDevices', JSON.stringify(updatedDevices));
        setDevices(updatedDevices);

      } else {
        message.error(BARCODE_ERR_MESSAGE.NEW_PRINTER_ADD_ERR)
        return
      }
    } catch (err) {
      setModal2Open(true);
      setError(BARCODE_ERR_MESSAGE.NEW_PRINTER_ADD_ERR);
    }

    setName('');
  };

  return (
    <div className="mt-1">
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
            <DatePicker
              size="small"
              onChange={(e) => setFromDate(e)}
            />
          </Form.Item>

          <Form.Item label="To Date" name="toDate">
            <DatePicker
              size="small"
              onChange={(e) => setToDate(e)}
            />
          </Form.Item>

          <Form.Item label="Barcode" name="barcode">
            <Input
              placeholder=""
              size="small"
              className="w-96"
              onChange={(e) => setBarcodeSearch(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Mat ID" name="matID">
            <Input
              placeholder=""
              size="small"
              className="w-28"
              onChange={(e) => setMatIdSearch(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Lot No" name="lotNo">
            <Input
              placeholder=""
              size="small"
              className="w-36"
              onChange={(e) => setLotNoSearch(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Card>

      <details
        className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
            <FilterOutlined />
            {t('Thông tin chi tiết')}
          </h2>
          <span className="relative size-5 shrink-0">
            <ArrowIcon />
          </span>
        </summary>

        <Card className="mb-1 p-1 shadow-sm" size="small">
          <Form
            layout={'vertical'}
            form={formChange}
            style={{
              maxWidth: 'inline' ? 'none' : 600,
            }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
              {t('Thông tin thay đổi')}
            </h2>

            <Card className="m-0 p-0" bodyStyle={{ padding: 0, paddingLeft: 20, paddingTop: 5, paddingBottom: 5 }}>
              <Row className="flex m-0 p-0 gap-3">
                <Form.Item
                  label={<span className='font-medium'>Barcode</span>}
                  name="oldBarcode"
                  rules={[
                    {
                      required: true,
                      message: BARCODE_ERR_MESSAGE.BARCODE_NOT_NULL,
                    },
                  ]}
                  className='m-0'
                >
                  <Input
                    placeholder=""
                    onKeyDown={handleEnter}
                    className="w-[300px]"
                    size="small"
                    ref={barcodeRef}
                  />
                </Form.Item>
                <Form.Item label = {<span className='font-medium'>Pre QTY</span>} name="preQty" className='m-0'>
                  <Input
                    placeholder=""
                    type="number"
                    min={0}
                    disabled={true}
                    size="small"
                    className='w-24'
                  />
                </Form.Item>
                <Form.Item
                  label = {<span className='font-medium'>Change QTY</span>}
                  name="changeQty"
                  className='m-0'
                  rules={[
                    {
                      required: true,
                      message: BARCODE_ERR_MESSAGE.QTY_NOT_NULL,
                    },
                  ]}
                >
                  <Input
                    placeholder=""
                    type="number"
                    min={0}
                    onKeyDown={onKeyDownChangeQty}
                    ref={changeQtyRef}
                    size="small"
                  />
                </Form.Item>
                <Form.Item label = {<span className='font-medium'>QTY</span>} name="qty" className='m-0'>
                  <Input
                    placeholder=""
                    type="number"
                    min={0}
                    value={newQty}
                    disabled={true}
                    onChange={onChangeNewQty}
                    size="small"
                    className="w-24"
                  />
                </Form.Item>

                <Form.Item label = {<span className='font-medium'>Remark</span>} name="remark" className='m-0'>
                  <Input
                    placeholder=""
                    onKeyDown={onKeyDownRemark}
                    onChange={onChangeRemark}
                    ref={remarkRef}
                    size="small"
                    className='w-64'
                  />
                </Form.Item>
                <Form.Item label= {<span className='font-medium'>User ID</span>} name="userID" className='m-0'>
                  <Input
                    placeholder=""
                    onKeyDown={onKeyDownUserId}
                    onChange={onChangeUserId}
                    ref={userIDRef}
                    size="small"
                    className='w-24'
                  />
                </Form.Item>

                <Form.Item
                  label={<span className='font-medium'>Device Printer</span>}
                  name="device"
                  className="w-40 m-0"
                >
                  <Select
                    labelInValue
                    id="typeSelect"
                    defaultValue={devices[0]}
                    allowClear
                    
                    onChange={handleOnchangeDevice}
                    size="small"
                    dropdownRender={(menu) => (
                      <>
                        {menu}
                        <Divider
                          style={{
                            margin: '0px 0',
                          }}
                        />
                        
                          <Input
                            placeholder="IP:PORT"
                            ref={inputRef}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={(e) => e.stopPropagation()}
                            size='small'
                          />
                          
                          <Button
                            type="text"
                            icon={<PlusOutlined />}
                            onClick={addItem}>
                          </Button>
                        
                      </>
                    )}

                    options={devices?.map((item) => ({
                      label: item?.label ,
                      value: item?.value,
                    }))}

                  />
                </Form.Item>
              </Row>
            </Card>

            <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase mt-3">
              {t('Cài đặt in tem')}
            </h2>
            <span className="relative size-5 shrink-0"></span>

            <Card bodyStyle={{ padding: 0, paddingLeft: 20, paddingTop: 5, paddingBottom: 5 }} >
              <Row className="flex m-0 p-0 gap-10 ">
                <Form.Item label={<span className='font-medium'>1D Position</span>} layout={'inline'} className='m-0'>
                  <div className="flex gap-3">
                    <Form.Item name="barcodePosX" className='w-32 m-0' layout={'inline'} >
                      <Input 
                      placeholder="X" 
                      type="number" min={0} 
                      size="small" 
                      onChange={onChangeBarcodePosX} 
                      />
                    </Form.Item>
                    <Form.Item name="barcodePosY" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="Y" 
                      type="number" 
                      min={0} 
                      size="small"
                      onChange={onChangeBarcodePosY}
                       />
                    </Form.Item>
                  </div>
                </Form.Item>

                <Form.Item label={<span className='font-medium'>1D Size</span>} layout={'inline'} className='m-0'>
                  <div className="flex gap-3">
                    <Form.Item name="barcodeSizeX" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="X" 
                      type="number" 
                      min={0} 
                      size="small" 
                      onChange={onChangeBarcodeSizeX}
                      />
                    </Form.Item>

                    <Form.Item name="barcodeSizeY" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="Y" 
                      type="number" 
                      min={0} 
                      size="small"
                      onChange={onChangeBarcodeSizeY}
                       />
                    </Form.Item>
                  </div>
                </Form.Item>

                <Form.Item label={<span className='font-medium'>2D Position</span>} layout={'inline'} className='m-0' >
                  <div className="flex gap-3">
                    <Form.Item name="qrcodePosX" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="X" 
                      type="number" 
                      min={0} 
                      size="small" 
                      onChange={onChangeQrPosX}
                      />
                    </Form.Item>

                    <Form.Item name="qrcodePosY" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="Y" 
                      type="number" 
                      min={0} 
                      size="small"
                      onChange={onChangeQrPosY}
                       />
                    </Form.Item>
                  </div>
                </Form.Item>

                <Form.Item label={<span className='font-medium'>2D Size</span>} layout={'inline'} className='m-0'>
                  <div className="flex gap-3">
                    <Form.Item name="qrcodeSizeX" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="X" 
                      type="number" 
                      min={0} 
                      size="small" 
                      onChange={onChangeQrSizeX}
                      />
                    </Form.Item>
                    <Form.Item name="qrcodeSizeY" className='w-32 m-0' layout={'inline'}>
                      <Input 
                      placeholder="Y" 
                      type="number" 
                      min={0} 
                      size="small" 
                      onChange={onChangeQrSizeY}
                      />
                    </Form.Item>
                  </div>
                </Form.Item>
              </Row>
            </Card>
          </Form>
        </Card>
      </details>

      <Modal
        title="Print Label Confirmation"
        open={isModalVisible}
        maskClosable={false}
        closable={false}
        bodyStyle={{
          maxHeight: '500px',
          overflowY: 'auto',
        }}
        width={600}
        footer={[
          <Button key="ok" type="primary" onClick={handleBtnConfirm}>
            Confirm
          </Button>,
        ]}
      >
        <Form
          layout={'inline'}
          form={formPopup}
          initialValues={{
            layout: 'inline',
          }}
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
            <Input size="small" style={{ width: 100 }} ref={userIdModalRef} />
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
      <ModalWaiting
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
        error={error}
      />

    </div>
  )
}
