import { useState } from 'react'
import { Button, Form, Input, Row, Col, DatePicker, Typography } from 'antd'
const { Title } = Typography;
export default function WaitingIqcStockInQuery({ }) {
  const [date, setDate] = useState(null)
  const [deliveryNo, setDeliveryNo] = useState('')
  const [accUnit, setAccUnit] = useState('')
  const [purchaseType, setPurchaseType] = useState('')
  const [matBarcode, setMatBarcode] = useState('')

  const handleDateChange = (date) => {
    setDate(date)
  }

  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row className="gap-4 flex items-center ">
          <Col>
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

          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Delivery No</span>}
              className="mb-0"
            >
              <Input
                placeholder="Delivery No"
                value={deliveryNo}
                size="small"
                onChange={(e) => setDeliveryNo(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Acc Unit</span>}
              className="mb-0"
            >
              <Input
                placeholder="Acc Unit"
                value={accUnit}
                size="small"
                onChange={(e) => setAccUnit(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Purchase Type</span>}
              className="mb-0"
            >
              <Input
                placeholder="Purchase Type"
                value={purchaseType}
                size="small"
                onChange={(e) => setPurchaseType(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">MAT Barcode</span>}
              tooltip="MAT Barcode"
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
          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">YYWW</span>}
              className="mb-0"
            >
              <Title level={3} className="text-gray-800">YYWW</Title>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">YYYYMM</span>}
              className="mb-0"
            >
              <Title level={3} className="text-gray-800">YYYYMM</Title>
            </Form.Item>
          </Col>


        </Row>
      </Form>
    </div>
  )
}
