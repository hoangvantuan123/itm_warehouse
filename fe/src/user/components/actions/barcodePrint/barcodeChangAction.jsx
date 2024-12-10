import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Card,
  Button,
  Modal,
  Input,
  DatePicker,
  Select,
  message,
  Form,
} from 'antd'

import { DataEditor, GridCellKind } from "@glideapps/glide-data-grid";
import '@glideapps/glide-data-grid/dist/index.css';
import { checkConfirmBarcode, checkConfirmNewBarcode, confirmBarcode } from "../../../../features/barcode/barcodeChangeService";
import { BARCODE_ERR_MESSAGE, BARCODE_SUCCESS_MESSAGE } from "../../../../utils/constants";
import ModalWaiting from "../../modal/material/modalWaiting";



export default function BarcodeChangeAction({
  fromDate,
  toDate,
  onFinish,
  handleEnter,
  btnOpenModal,
  isModalVisible,
  setIsModalVisible,

  modal2Open,
  setModal2Open,
  error,
  setError,

  formChange,
  onKeyDownChangeQty,
  changeQtyRef,
  remarkRef,
  onChangeNewQty,
  oldQty,
  newQty,
  setRemark,
  setUserId,
  onDropDownChange,
  optionDevices,
  clickedRowData,
  handleOnchangeDevice,

}) {
  const [form] = Form.useForm();
  const [formPopup] = Form.useForm();
  const [data, setData] = useState([]);

  const [oldBarcode, setOldBarcode] = useState('');
  const [newBarcode, setNewBarcode] = useState('');
  const [cfBarcode, setCfBarcode] = useState('');
  const [dataConfirm, setDataConfirm] = useState({});
  const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])
  form.setFieldsValue({ toDate: toDate });
  form.setFieldsValue({ fromDate: fromDate });
  const oldBarcodeRef = useRef(null);
  const newBarcodeRef = useRef(null);
  const userIdModalRef = useRef(null);
  const userIDRef = useRef(null);


  const onFormLayoutChange = ({ layout }) => {
  };

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
      setRemark(e.target.value);
      userIDRef.current.focus();
    }

  }

  const onKeyDownUserId = (e) => {
    if (e.key === 'Enter') {
      setUserId(e.target.value);
    }
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
          setNewBarcode(result.result[0].NewBarcodeID);
          message.info(BARCODE_SUCCESS_MESSAGE.CHECK_OLD_BARCODE_OK)
        } else {
          setError(BARCODE_ERR_MESSAGE.BARCODEID_NOT_EXISTS);
          setModal2Open(true);
          resetValueModal();
        }

      } catch (err) {
        console.log(err)
      }
      newBarcodeRef.current.focus();
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
        setError(BARCODE_ERR_MESSAGE.NEW_BARCODEID_NOT_EXISTS);
        formPopup.resetFields(["newBarcode"]);
        setModal2Open(true);
        return;
      }

      const dataConfirm = {
        oldBarcode,
        newBarcode,
        isconfirm: true,
      }

      try {
        const result = await checkConfirmNewBarcode(dataConfirm)

        if (result != null) {

          formPopup.setFieldsValue({ cfBarcode: result.data[0].NewBarcodeID });
          formPopup.setFieldsValue({ userid: result.data[0].UserID });
          formPopup.setFieldsValue({ status: "OK" });
          // formPopup.setFieldsValue({ time: result.result[0].LastDateTime});

          const newRow = {
            oldBarcode: dataConfirm.oldBarcode,
            newBarcode: result.data[0].NewBarcodeID,
            isconfirm: "OK"
          };

          const isDuplicate = data.some(
            (row) =>
              row.newBarcode === newRow.newBarcode &&
              row.oldBarcode === newRow.oldBarcode,
          )

          if (!isDuplicate) {
            setData([...data, newRow]);
            userIdModalRef.current.focus();
          } else {
            message.info(BARCODE_ERR_MESSAGE.DUPLICATE_ROW);
          }

        } else {
          setError(BARCODE_ERR_MESSAGE.BARCODEID_NOT_EXISTS);
          setModal2Open(true);
          formPopup.resetFields(newBarcode);
          resetValueModal();
        }

      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleBtnConfirm = async () => {

    const body = data;
    try {
      const result = await confirmBarcode(
        body
      );

      setIsModalVisible(false);

      if (result.status) {
        setModal2Open(true);
        setError(BARCODE_SUCCESS_MESSAGE.BARCODE_CONFIRM_SUCCESS);
        resetValueModal();
      } else {
        setError(BARCODE_ERR_MESSAGE.BARCODE_NOT_CONFIRM);
        setModal2Open(true);
        resetValueModal();
      }

    } catch (err) {
      message.error(err);
      resetValueModal();
      setError(err);
      setModal2Open(true);
      setIsModalVisible(false);
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

            <Form.Item
              label="Barcode"
              name="oldBarcode"
              rules={[
                {
                  required: true,
                  message: BARCODE_ERR_MESSAGE.BARCODE_NOT_NULL,
                },
              ]}
            >
              <Input
                placeholder=""
                size="small"
                onKeyDown={handleEnter}
                className='w-[300px]'
              />
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
            <Form.Item
              label="Change QTY"
              name="changeQty"
              rules={[
                {
                  required: true,
                  message: BARCODE_ERR_MESSAGE.QTY_NOT_NULL,
                },
              ]}>
              <Input
                placeholder=""
                size="small"
                type="number"
                min={0}
                onKeyDown={onKeyDownChangeQty}
                ref={changeQtyRef}
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
                onChange={onChangeNewQty} />
            </Form.Item>

            <Form.Item label="Remark" name="remark">
              <Input placeholder="" size="small" onKeyDown={onKeyDownRemark} ref={remarkRef} />
            </Form.Item>
            <Form.Item label=" User ID" name="userID">
              <Input placeholder="" size="small" onKeyDown={onKeyDownUserId} ref={userIDRef} />
            </Form.Item>

            <Form.Item label="1D Position" layout={'inline'}>
              <div className="flex gap-0">
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
              </div>

            </Form.Item>


            <Form.Item label="1D Size" layout={'inline'}>
              <div className="flex gap-0">
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
              </div>
            </Form.Item>


            <Form.Item label="2D Position" layout={'inline'}>
            <div className="flex gap-0">
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
              </div>
            </Form.Item>

            <Form.Item label="2D Size" layout={"inline"}>
            <div className="flex gap-0">
              <Form.Item name="qrcodeSizeX" layout={"inline"} >
                <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} />
              </Form.Item>
              <Form.Item name="qrcodeSizeY" layout={"inline"} >
                <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} />
              </Form.Item>
              </div>
            </Form.Item>


            <Form.Item label="Device Printer" name="device">
              <Select
                labelInValue
                id="typeSelect"
                defaultValue=""
                size="small"
                style={{
                  width: 150,
                }}
                allowClear
                options={optionDevices}
                onDropdownVisibleChange={onDropDownChange}
                onChange={handleOnchangeDevice}
              />
            </Form.Item>


          </Form>

        </Card>

        <Modal
          title="Print Label Confirmation"
          visible={isModalVisible}
          onOk={handleBtnConfirm}
          maskClosable={false}
          closable={false}
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

            <Form.Item label="Barcode" name="oldBarcode" layout={"inline"} >
              <Input size="small" style={{ width: 350 }}
                onKeyDown={handleKeyDownOldBarcode} />
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

      </Card>

    </div>

  );
}
