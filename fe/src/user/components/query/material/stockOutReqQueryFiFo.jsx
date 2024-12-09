import { useState } from 'react'
import {
  Form,
  Input,
  Row,
  Col,
} from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
dayjs.locale('vi')

export default function StockOutRequestQueryFiFo() {
  const [date] = useState(dayjs())

  const formatDateWithWeekday = (date) => {
    const dayOfWeek = date.format('dddd')
    const capitalizedDay =
      dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
    return `${capitalizedDay}, ${date.format('DD/MM/YYYY')}`
  }
  return (
    <div className="flex items-center gap-2">
      <Form
        layout="vertical"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
          }
        }}


      > <Row className="gap-4 flex items-center">
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">Date</span>}
              className="mb-0"
            >
              <Input
                value={formatDateWithWeekday(date)}
                size="small"
                className="text-sm p-2"
                readOnly
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={<span className="uppercase text-[10px]">MAT Barcode</span>}
              tooltip="MAT Barcode"
              className="mb-0"
            >
              <Input
                placeholder="Input Barcode"
                size="small"
                className="text-sm p-2  w-72"
              />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              label={
                <span className="uppercase text-[10px]">Trạng thái Y/N</span>
              }
              className="mb-0"
            >
              <Input
                size="small"
                className=" text-sm p-2 "
              />
            </Form.Item>
          </Col>

        </Row>
      </Form>
    </div >
  )
}
