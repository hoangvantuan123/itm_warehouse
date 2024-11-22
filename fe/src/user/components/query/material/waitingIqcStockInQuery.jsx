import { useState } from 'react';
import { Button, Form, Input, Row, Col, DatePicker } from 'antd';

export default function WaitingIqcStockInQuery() {
  // State variables for each input field
  const [date, setDate] = useState(null);
  const [deliveryNo, setDeliveryNo] = useState('');
  const [accUnit, setAccUnit] = useState('');
  const [purchaseType, setPurchaseType] = useState('');
  const [matBarcode, setMatBarcode] = useState('');
  const [whName, setWhName] = useState('');
  const handleDateChange = (date) => {
    setDate(date);
  };
  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item
              label={<span className="uppercase">Date</span>}
              required
            >
              <DatePicker
                className="w-full"
                value={date}
                onChange={handleDateChange}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label={<span className="uppercase">Delivery No</span>}>
              <Input
                placeholder="Input placeholder"
                value={deliveryNo}
                size="middle"
                onChange={(e) => setDeliveryNo(e.target.value)}
                className="bg-red-50"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase">Acc Unit</span>}
              required
            >
              <Input
                placeholder="Input placeholder"
                value={accUnit}
                size="middle"
                onChange={(e) => setAccUnit(e.target.value)}
                className="bg-red-50"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label={<span className="uppercase">Purchase Type</span>}>
              <Input
                placeholder="Input placeholder"
                value={purchaseType}
                size="middle"
                onChange={(e) => setPurchaseType(e.target.value)}
                className="bg-red-50"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item
              label={<span className="uppercase">MAT Barcode</span>}
              required
              tooltip="Barcode auto"
            >
              <Input
                placeholder="Input placeholder"
                value={matBarcode}
                size="middle"
                onChange={(e) => setMatBarcode(e.target.value)}
                className="bg-red-50"
              />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item label={<span className="uppercase">WH Name</span>}>
              <Input
                placeholder="Input placeholder"
                value={whName}
                size="middle"
                onChange={(e) => setWhName(e.target.value)}
                className="bg-red-50"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
