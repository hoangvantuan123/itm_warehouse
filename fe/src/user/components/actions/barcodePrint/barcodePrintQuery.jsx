import { useEffect, useRef, useState } from 'react'
import {
  Card,
  Button,
  Modal,
  Input,
  Select,
  Form,
  Row,
  Divider,
  message,
} from 'antd'
import { PlusOutlined, RestFilled, SaveFilled } from '@ant-design/icons'

import LabelItem from './labeldesign'
import { VENDOR_LIST } from '../../../../utils/sysConstants'
import { useTranslation } from 'react-i18next'
import { createDevicePrintBy } from '../../../../features/barcode/barcodeChangeService'
import { BARCODE_ERR_MESSAGE, BARCODE_SUCCESS_MESSAGE } from '../../../../utils/constants'

export default function BarcodePrintQuery({
  formQuery,
  fromDate,
  toDate,

  isModalVisible,
  onClickCancel,

  onDropDownChange,
  handleOnchangeDevice,

  onChangeVendor,
  onClearVendorValue,
  onKeyDownPartNo,
  onKeyDownMatId,
  onKeyDownLotTotalCnt,
  onKeyDownLotNo,
  onKeyDownQty,
  onKeyDownDateCode,
  onKeyDownReelNo,
  onKeyDownUserId,
  onKeyDownRemark,
  onChangeRemark,
  onChangeUserId,
  onKeyDownBarcode,

  partNoRef,
  matIdRef,
  lotNoRef,
  qtyRef,
  dateCodeRef,
  reelNoRef,
  userIdRef,
  remarkRef,
  lotTotalCNTRef,
  barcodeRef,

  formPreview,
  onFinishPreview,
  sizeLabel,
  previewLabel,
  setPreviewLabel,
  label,
  onClickOk,
  onClickReset,

  modal2Open,
  setModal2Open,
  error,
  setError,
}) {
  const { t } = useTranslation()
  const [formSearch] = Form.useForm()

  const inputRef = useRef(null);
  const [devices, setDevices] = useState(() =>
    JSON.parse(localStorage.getItem("optionDevices")) || [],
  )
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("userInfo")) || {},
  )
  const [name, setName] = useState('');

  const setFieldsQuery = () => {
    if (previewLabel) {
      formQuery.setFieldsValue({
        matID: previewLabel?.ITEMCD,
        lotNo: previewLabel?.LOTNO,
        qty: previewLabel?.QTY,
        dateCode: previewLabel?.DATECODE,
        userID: previewLabel?.USER_ID,
        reelNo: previewLabel?.REELNO,

      })

      formPreview.setFieldsValue({
        barcodePosX: sizeLabel.barCodePosX,
        barcodePosY: sizeLabel.barCodePosY,
        barcodeSizeX: sizeLabel.barCodeSizeX,
        barcodeSizeY: sizeLabel.barCodeSizeY,
        qrcodePosX: sizeLabel.QrPosX,
        qrcodePosY: sizeLabel.QrPosY,
        qrcodeSizeX: sizeLabel.QrSizeX,
        qrcodeSizeY: sizeLabel.QrSizeY,
      })
    }
    setPreviewLabel(null)
  }

  useEffect(() => {
    setFieldsQuery();
    
  }, [fromDate, toDate, setFieldsQuery, devices, name])

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
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
            {t('Thông tin tem')}
          </h2>
        </summary>
        <Card bodyStyle={{ padding: 0, paddingLeft: 20 }}>
          <Form
            layout="vertical"
            form={formQuery}
            style={{
              maxWidth: 'inline' ? 'none' : 600,
            }}
            autoComplete="off"
          >
            <Row className="flex m-0 p-0 gap-4">
              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Vendor</span>}
                name={'vendor'}

                className="w-36 p-0 m-0"
              >
                <Select
                  labelInValue
                  allowClear
                  id="vendorSelect"
                  defaultValue="All"
                  size="small"
                  onChange={onChangeVendor}
                  options={VENDOR_LIST?.map((item) => ({
                    label: item?.label,
                    value: item?.value,
                  }))}
                  onClear={onClearVendorValue}
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Barcode</span>}
                name={'barcode'}
                className="p-0 m-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownBarcode}
                  ref={barcodeRef}
                  className="w-[440px]"
                  size="small"
                />
              </Form.Item>
   
              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Device Printer</span>}
                name="device"
                className=" m-0 p-0 sm:w-28 md:w-32"
              >
                <Select
                  labelInValue 
                  defaultValue={devices[0]}    
                  allowClear

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
                    label: item?.label,
                    value: item?.value,
                  }))}
                  onDropdownVisibleChange={onDropDownChange}
                  onChange={handleOnchangeDevice}
                  size="small"
                />
              </Form.Item>
            </Row>

            <Row className="gap-4 flex m-0 p-0 mt-2">
              <Form.Item
                label={<span className="m-0 p-0 font-medium ">Part No</span>}
                name={'partNo'}
                className=" md:w-36 m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownPartNo}
                  ref={partNoRef}
                  size="small"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Mat ID</span>}
                name={'matID'}
                className=" m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownMatId}
                  ref={matIdRef}
                  size="small"
                  className="w-36"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Lot Total CNT</span>}
                name={'lotTotalCNT'}

                className="m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownLotTotalCnt}
                  ref={lotTotalCNTRef}
                  size="small"
                  className="sm:w-20 md:w-24"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Lot No</span>}
                name={'lotNo'}
                className=" m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownLotNo}
                  ref={lotNoRef}
                  size="small"
                  className="sm:w-36 md:w-40"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Qty</span>}
                name={'qty'}

                className=" m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownQty}
                  ref={qtyRef}
                  size="small"
                  className="sm:w-12 md:w-16"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Date Code</span>}
                name={'dateCode'}
                size="small"
                className=" m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownDateCode}
                  ref={dateCodeRef}
                  size="small"
                  className="sm:w-20 md:w-24"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Reel No</span>}
                name={'reelNo'}

                className=" m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownReelNo}
                  ref={reelNoRef}
                  size="small"
                  className="sm:w-32 md:w-36"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">User ID</span>}
                name={'userID'}

                className=" m-0 p-0"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownUserId}
                  onChange={onChangeUserId}
                  ref={userIdRef}
                  size="small"
                  className="sm:w-24 md:w-28"
                />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Issue No</span>}
                name={'issueNo'}
                className=" m-0 p-0 sm:w-16 md:w-20"
              >
                <Input placeholder="" size="small" />
              </Form.Item>

              <Form.Item
                label={<span className="m-0 p-0 pb-0 font-medium">Remark</span>}
                name={'remark'}
                className=" m-0 p-0 xl:w-36 2xl:w-44"
              >
                <Input
                  placeholder=""
                  onKeyDown={onKeyDownRemark}
                  onChange={onChangeRemark}
                  ref={remarkRef}
                  size="small"
                />
              </Form.Item>

            </Row>
          </Form>
        </Card>

        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 mt-3">
          <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600 uppercase">
            {t('Cài đặt in tem')}
          </h2>
        </summary>
        <Card className="m-0 p-0 " bodyStyle={{ padding: 0, paddingLeft: 25 , paddingTop:10, paddingBottom:10 }}>

          <Form
            layout={'vertical'}
            form={formPreview}
            style={{
              maxWidth: 'inline' ? 'none' : 600,
            }}
            autoComplete="off"
            onFinish={onFinishPreview}
          >
            <Row className="flex m-0 p-0 gap-11 items-end">
              <Form.Item 
              label={<span className="m-0 p-0 pb-0 font-medium">1D Position</span>}
              layout={'inline'}
              className='m-0 p-0'
              >
                <div className="flex gap-3">
                  <Form.Item name="barcodePosX" className="w-20 m-0 p-0">
                    <Input placeholder="X" type="number" min={0} step={0.1} size="small" />
                  </Form.Item>
                  <Form.Item name="barcodePosY" className="w-20 m-0 p-0">
                    <Input placeholder="Y" type="number" min={0} step={0.1} size="small" />
                  </Form.Item>
                </div>
              </Form.Item>

              <Form.Item 
              label={<span className="m-0 p-0 pb-0 font-medium">1D Size</span>}
              layout={'inline'}
              className='m-0 p-0'
              >
                <div className="flex gap-3">
                  <Form.Item
                    name="barcodeSizeX"
                    className="w-20 m-0 p-0"
                    layout={'inline'}
                  >
                    <Input placeholder="X" type="number" min={0} step={0.1} size="small" />
                  </Form.Item>

                  <Form.Item
                    name="barcodeSizeY"
                    className="w-20 m-0 p-0"
                    layout={'inline'}
                  >
                    <Input placeholder="Y" type="number" min={0} step={0.1} size="small" />
                  </Form.Item>
                </div>
              </Form.Item>

              <Form.Item 
              label={<span className="m-0 p-0 pb-0 font-medium">2D Position</span>}
              layout={'inline'}
              className='m-0 p-0'
              >
                <div className="flex gap-3">
                  <Form.Item
                    name="qrcodePosX"
                    className="w-20 m-0 p-0"
                    layout={'inline'}
                  >
                    <Input
                      placeholder="X"
                      type="number"
                      min={0}
                      step={0.1}
                      size="small" />
                  </Form.Item>

                  <Form.Item
                    name="qrcodePosY"
                    className="w-20 m-0 p-0"
                    layout={'inline'}
                  >
                    <Input
                      placeholder="Y"
                      type="number"
                      min={0}
                      step={0.1}
                      size="small" />
                  </Form.Item>
                </div>
              </Form.Item>

              <Form.Item
              label={<span className="m-0 p-0 pb-0 font-medium">2D Size</span>} 
              layout={'inline'}
              className='m-0 p-0'
              >
                <div className="flex gap-3">
                  <Form.Item
                    name="qrcodeSizeX"
                    className="w-20 m-0 p-0"
                    layout={'inline'}
                  >
                    <Input placeholder="X" type="number" min={0} step={0.1} size="small" />
                  </Form.Item>
                  <Form.Item
                    name="qrcodeSizeY"
                    className="w-20 m-0 p-0"
                    layout={'inline'}
                  >
                    <Input placeholder="Y" type="number" min={0} step={0.1} size="small" />
                  </Form.Item>
                </div>
              </Form.Item>

              <Form.Item 
              className="w-20 m-0 p-0 ">
                <Button
                  icon={<SaveFilled />}
                  className="uppercase"
                  htmlType="submit"
                  size="small"
                >
                  Preview
                </Button>
              </Form.Item>
              <Form.Item className="w-24 m-0 p-0">
                <Button
                  icon={<RestFilled />}
                  className="uppercase"
                  onClick={onClickReset}
                  size="small"
                >
                  Reset
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </Card>
      </Card>

      <Modal
        title="Print Label Confirmation"
        open={isModalVisible}
        onOk={onClickOk}
        onCancel={onClickCancel}
        className="w-3"
      >
        <LabelItem label={label} dataSize={sizeLabel} />
      </Modal>
    </div>
  )
}
