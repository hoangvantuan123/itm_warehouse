import { useState } from 'react'
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Segmented,
  Select,
} from 'antd'
import moment from 'moment'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const dateFormat = 'YYYY/MM/DD'
const weekFormat = 'MM/DD'
const monthFormat = 'YYYY/MM'

export default function UserManagementQuery({
  formData,
  setFormData,
  setDeliveryNo,
  setToDate,
  toDate,
  deliveryNo,
  bizUnit,
  setBizUnit,
  dataUnit,
}) {
  const handleFormDate = (date) => {
    setFormData(date)
  }
  const handletoDate = (date) => {
    setToDate(date)
  }
  const handleChange = (value) => {
    setBizUnit(value)
  }
  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row className="gap-4 flex items-center ">
          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Date 1</span>}
              className="mb-0"
            >
              <DatePicker
                className="w-full text-sm p-2"
                value={formData}
                onChange={handleFormDate}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Date 2</span>}
              className="mb-0"
            >
              <DatePicker
                className="w-full text-sm p-2"
                value={toDate}
                onChange={handletoDate}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Họ và Tên</span>}
              className="mb-0"
            >
              <Input
                value={deliveryNo}
                size="small"
                onChange={(e) => setDeliveryNo(e.target.value)}
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-xs">Mã nhân viên</span>}
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2"
              />
            </Form.Item>
          </Col>
          
        </Row>
      </Form>
    </div>
  )
}
