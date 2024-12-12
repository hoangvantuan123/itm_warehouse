import { useCallback, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
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
} from 'antd'
import { SaveFilled } from '@ant-design/icons'

import LabelItem from './labeldesign'
import { CreatePrintLabel } from '../../../../features/barcode/printBarcodeService'

export default function BarcodePrintAction({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  vendor,
  setVendor,
  matID,
  setMatID,
  lotNo,
  setLotNo,
  dataSearch,
  btnSearch,
  dataInfo,
  btnPrinter,
  rowSelects,
  setRowChecked,
}) {

  const [sizeLabel, setSizeLabel] = useState({
    barCodePosX: Number(0),
    barCodePosY: Number(0),
    barCodeSizeX: Number(0.8),
    barCodeSizeY: Number(20),
    QrPosX: Number(0),
    QrPosY: Number(0),
    QrSizeX: Number(40),
    QrSizeY: Number(0),
    paperSizeX: Number(0),
    paperSizeY: Number(0),
  })

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

  const handleInputNewLabel = (e, field) => {
    setNewLabel((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }))
  }

  const [ip, setIP] = useState('')
  const [port, setPort] = useState('')

  const handleFromDate = (date) => {
    setFromDate(date)
  }
  const handleToDate = (date) => {
    setToDate(date)
  }

  const handleChange = (value) => {
    setVendor(value)
  }

  const handleInputChange = (e, field) => {
    setSizeLabel((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }))
  }

  const vendorList = []
  vendorList.push({ label: 'NEXPERIA', value: 'NEXPERIA' })
  vendorList.push({ label: 'PANASONIC', value: 'PANASONIC' })
  vendorList.push({ label: 'ALPHA OMEGA', value: 'ALPHA OMEGA' })
  vendorList.push({ label: 'TEXAS INSTRUMENT', value: 'TEXAS INSTRUMENT' })
  vendorList.push({ label: 'INFINEON', value: 'INFINEON' })
  vendorList.push({ label: 'MITSUMI', value: 'MITSUMI' })
  vendorList.push({ label: 'ABLIC', value: 'ABLIC' })
  vendorList.push({ label: 'SMK', value: 'SMK' })
  vendorList.push({ label: 'NISSHINBO', value: 'NISSHINBO' })

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const btnOpenModal = () => {
    setIsModalVisible(true)
    btnPrinter()
  }

  const btnOpenModalPreview = () => {
    setIsModalVisible(true)
    setRowChecked(null)
    let LOTID =
      newLabel.ITEMCD +
      '/' +
      newLabel.LOTNO +
      '/' +
      newLabel.QTY +
      '/' +
      newLabel.DATECODE +
      '/' +
      newLabel.REELNO

    setNewLabel((prevState) => {
      const updatedLabel = {
        ...prevState,
        LOT_ID: LOTID,
      }

      setRowChecked([updatedLabel])

      return updatedLabel
    })
  }

  const postPrint = useCallback(async () => {
    const dataPost = {
      ip,
      port,
      data: rowSelects,
      newLabel: newLabel,
    }

    try {
      const itemList = await CreatePrintLabel(dataPost)
    } catch (error) {
      message.error('Kiểm tra kết nối máy in !')
    }
  }, [ip, port, rowSelects])

  const handleBtnConfirm = () => {
    if (!port || !ip) {
      message.error('PORT và IP không được để trống')
      return
    }
    postPrint()
  }

  return (
    <div className="mt-1">
      <Card className="mb-2 p-2 shadow-sm" size="small">
        <Card className="mb-2 p-2 shadow-sm" size="small">
          <div className="flex gap-3">
            <Space direction="vertical" size={6}>
              <Typography.Text>From date</Typography.Text>
              <DatePicker
                value={fromDate}
                className="w-full"
                onChange={handleFromDate}
              />
            </Space>
            <Space direction="vertical" size={6}>
              <Typography.Text>To date</Typography.Text>
              <DatePicker
                value={toDate}
                className="w-full"
                onChange={handleToDate}
              />
            </Space>
            <Space direction="vertical" size={6}>
              <Typography.Text>Vendor</Typography.Text>
              <Select
                id="typeSelect"
                defaultValue="All"
                style={{
                  width: 190,
                }}
                onChange={handleChange}
                options={vendorList?.map((item) => ({
                  label: item?.label,
                  value: item?.value,
                }))}
              />
            </Space>
            <Space direction="vertical" size={6}>
              <Typography.Text>Mat ID</Typography.Text>
              <Input
                value={matID}
                className="w-full bg-blue-50"
                onChange={(e) => setMatID(e.target.value)}
              />
            </Space>
            <Space direction="vertical" size={6}>
              <Typography.Text className="text-red-500">Lot No</Typography.Text>
              <Input
                value={lotNo}
                className="w-full bg-blue-50"
                onChange={(e) => setLotNo(e.target.value)}
              />
            </Space>

            <Space direction="horizontal" size={6} align="end">
              <Button
                type={'PRINT' === 'Save' ? 'primary' : 'default'}
                icon={<SaveFilled />}
                size="middle"
                className="uppercase"
                onClick={btnOpenModal}
              >
                PRINT LABEL
              </Button>

              <Button
                type={'PRINT' === 'Save' ? 'primary' : 'default'}
                icon={<SaveFilled />}
                size="middle"
                className="uppercase"
                onClick={btnSearch}
              >
                SEARCH
              </Button>
            </Space>
          </div>
        </Card>

        <Card className="mb-2 p-2 shadow-sm" size="small">
          <Row>
            <div className="flex gap-2">
              <Space direction="vertical" size={6}>
                <Typography.Text>Vendor</Typography.Text>
                <Select
                  id="typeSelect"
                  defaultValue="All"
                  style={{
                    width: 120,
                  }}
                  options={vendorList?.map((item) => ({
                    label: item?.label,
                    value: item?.value,
                  }))}
                />
              </Space>

              <Space direction="vertical" size={6}>
                <Typography.Text>Part No</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.PARTNO}
                  onChange={(e) => handleInputNewLabel(e, 'PARTNO')}
                />
              </Space>
              <Space direction="vertical" size={6}>
                <Typography.Text>Mat ID</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.ITEMCD}
                  onChange={(e) => handleInputNewLabel(e, 'ITEMCD')}
                />
              </Space>
              <Space direction="vertical" size={6}>
                <Typography.Text>Lot Total CNT</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.LOTTOTALCNT}
                  onChange={(e) => handleInputNewLabel(e, 'LOTTOTALCNT')}
                />
              </Space>

              <Space direction="vertical" size={6}>
                <Typography.Text>Lot No</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.LOTNO}
                  onChange={(e) => handleInputNewLabel(e, 'LOTNO')}
                />
              </Space>

              <Space direction="vertical" size={6}>
                <Typography.Text>QTY</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.QTY}
                  onChange={(e) => handleInputNewLabel(e, 'QTY')}
                />
              </Space>
              <Space direction="vertical" size={6}>
                <Typography.Text>Date</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.DATECODE}
                  onChange={(e) => handleInputNewLabel(e, 'DATECODE')}
                />
              </Space>

              <Space direction="vertical" size={6}>
                <Typography.Text>Reel No</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.REELNO}
                  onChange={(e) => handleInputNewLabel(e, 'REELNO')}
                />
              </Space>

              <Space direction="vertical" size={6}>
                <Typography.Text>UserID</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.USER_ID}
                  onChange={(e) => handleInputNewLabel(e, 'USER_ID')}
                />
              </Space>
              <Space direction="vertical" size={6}>
                <Typography.Text>Issuse NO</Typography.Text>
                <Input
                  className="w-20 bg-blue-50"
                  value={newLabel.ISSUENO}
                  onChange={(e) => handleInputNewLabel(e, 'ISSUENO')}
                />
              </Space>
              <Space direction="vertical" size={6}>
                <Typography.Text>Remark</Typography.Text>
                <Input
                  className="w-full bg-blue-50"
                  value={newLabel.REMARK}
                  onChange={(e) => handleInputNewLabel(e, 'REMARK')}
                />
              </Space>
            </div>
          </Row>

          <Row className="mt-4">
            <Space direction="horizontal" size={6}>
              <Typography.Text>1D Barcode Position</Typography.Text>
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.barCodePosX}
                type="number"
                onChange={(e) => handleInputChange(e, 'barCodePosX')}
              />
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.barCodePosY}
                type="number"
                onChange={(e) => handleInputChange(e, 'barCodePosY')}
              />
            </Space>

            <Space direction="horizontal" size={6}>
              <Typography.Text>1D Barcode size</Typography.Text>
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.barCodeSizeX}
                type="number"
                onChange={(e) => handleInputChange(e, 'barCodeSizeX')}
              />
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.barCodeSizeY}
                type="number"
                onChange={(e) => handleInputChange(e, 'barCodeSizeY')}
              />
            </Space>

            <Space direction="horizontal" size={6}>
              <Typography.Text>2D Barcode position</Typography.Text>
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.QrPosX}
                type="number"
                onChange={(e) => handleInputChange(e, 'QrPosX')}
              />
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.QrPosY}
                type="number"
                onChange={(e) => handleInputChange(e, 'QrPosY')}
              />
            </Space>

            <Space direction="horizontal" size={6}>
              <Typography.Text>2D Barcode size</Typography.Text>
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.QrSizeX}
                type="number"
                onChange={(e) => handleInputChange(e, 'QrSizeX')}
              />
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.QrSizeY}
                type="number"
                onChange={(e) => handleInputChange(e, 'QrSizeY')}
              />
            </Space>

            <Space direction="horizontal" size={6}>
              <Typography.Text>Paper size</Typography.Text>

              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.paperSizeX}
                type="number"
                onChange={(e) => handleInputChange(e, 'paperSizeX')}
              />
              <Input
                className="w-20 bg-blue-50"
                value={sizeLabel.paperSizeY}
                type="number"
                onChange={(e) => handleInputChange(e, 'paperSizeY')}
              />
            </Space>
            <Button
              icon={<SaveFilled />}
              size="middle"
              className="uppercase"
              onClick={btnOpenModalPreview}
            >
              Preview
            </Button>
          </Row>
        </Card>

        <Modal
          title="Print Label Confirmation"
          visible={isModalVisible}
          onOk={handleBtnConfirm}
          onCancel={handleCancel}
          className="w-3"
        >
          <Space direction="horizontal" size={6}>
            <Typography.Text>PRINTER</Typography.Text>

            <Input
              className="w-20 bg-blue-50"
              placeholder="PORT"
              required={true}
              value={port}
              onChange={(e) => setPort(e.target.value)}
            />
            <Input
              className="w-50 bg-blue-50"
              placeholder="IP"
              required={true}
              value={ip}
              onChange={(e) => setIP(e.target.value)}
            />
          </Space>

          {rowSelects?.map((item, index) => (
            <div key={index}>
              <LabelItem label={item} dataSize={sizeLabel} />
            </div>
          ))}
        </Modal>
      </Card>
    </div>
  )
}
