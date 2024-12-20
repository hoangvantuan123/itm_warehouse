import { useState, useCallback } from 'react'
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
  setUserName,
  userName,
  setUserId,
  userId,
}) {
  return (
    <div className="flex items-center gap-2">
      <Form layout="vertical">
        <Row className="gap-4 flex items-center ">
          <Col>
            <Form.Item
              label={<span className="uppercase text-[9px]">Họ và Tên</span>}
              className="mb-0"
            >
              <Input
                value={userName}
                size="middle"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              label={
                <span className="uppercase  text-[9px]">Mã nhân viên</span>
              }
              className="mb-0"
            >
              <Input
                value={userId}
                size="middle"
                onChange={(e) => setUserId(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
