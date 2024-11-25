import { useState } from 'react'
import { Button, Form, Input, Row, Col, DatePicker } from 'antd'

export default function WaitingIqcStockInQuery() {
  // State variables for each input field
  const [date, setDate] = useState(null)
  const [deliveryNo, setDeliveryNo] = useState('')
  const [accUnit, setAccUnit] = useState('')
  const [purchaseType, setPurchaseType] = useState('')
  const [matBarcode, setMatBarcode] = useState('')
  const [whName, setWhName] = useState('')
  const handleDateChange = (date) => {
    setDate(date)
  }

  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label={<span className="uppercase text-xs">Date</span>}
              required
              className="mb-0"
            >
              <DatePicker
                className="w-full text-sm p-2"
                value={date}
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase text-xs">Delivery No</span>}
              className="mb-0"
            >
              <Input
                placeholder="Input placeholder"
                value={deliveryNo}
                size="small"
                onChange={(e) => setDeliveryNo(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase text-xs">Acc Unit</span>}
              className="mb-0"
            >
              <Input
                placeholder="Input placeholder"
                value={accUnit}
                size="small"
                onChange={(e) => setAccUnit(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase text-xs">Purchase Type</span>}
              className="mb-0"
            >
              <Input
                placeholder="Input placeholder"
                value={purchaseType}
                size="small"
                onChange={(e) => setPurchaseType(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase text-xs">MAT Barcode</span>}
              tooltip="Barcode auto"
              className="mb-0"
            >
              <Input
                placeholder="Input placeholder"
                value={matBarcode}
                size="small"
                onChange={(e) => setMatBarcode(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase text-xs">WH Name</span>}
              className="mb-0"
            >
              <Input
                placeholder="Input placeholder"
                value={whName}
                size="small"
                onChange={(e) => setWhName(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
