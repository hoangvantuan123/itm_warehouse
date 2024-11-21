import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Card, Input, Button, DatePicker, Select, Space, Typography } from 'antd'
import { SearchOutlined, SaveOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker

export default function DeliveryActions({
  handleSearch,
  setDateRange,
  dateRange,
  setDeliveryNo,
  setStockIn,
}) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [deliveryNo, setLocalDeliveryNo] = useState('')
  const [stockIn, setLocalStockIn] = useState('')
  const [date1, setDate1] = useState(null)
  const [date2, setDate2] = useState(null)

  const handleDate1Change = (date, dateString) => {
    setDate1(date)
    setDateRange([dateString, date2])
  }

  const handleDate2Change = (date, dateString) => {
    setDate2(date)
    setDateRange([date1, dateString])
  }

  const handleDeliveryNoChange = (e) => {
    setLocalDeliveryNo(e.target.value)
    setDeliveryNo(e.target.value)
  }

  const handleStockInChange = (value) => {
    setLocalStockIn(value)
    setStockIn(value)
  }

  const handleSearchClick = () => {
    handleSearch() 
  }

  return (
    <div className="mt-1">
      <Card
        title="Query Condition"
        bordered={false}
        className="mb-2"
        style={{ width: '100%' }}
        size="small"
      >
        <div className="flex gap-4 justify-between">
          <Space direction="vertical" size={12} style={{ width: '100%' }}>
            <Typography.Text>Date 1</Typography.Text>
            <DatePicker
              value={date1}
              onChange={handleDate1Change}
              style={{ width: '100%' }}
            />
          </Space>

          <Space direction="vertical" size={12} style={{ width: '100%' }}>
            <Typography.Text>Date 2</Typography.Text>
            <DatePicker
              value={date2}
              onChange={handleDate2Change}
              style={{ width: '100%' }}
            />
          </Space>

          <Space direction="vertical" size={12} style={{ width: '100%' }}>
            <Typography.Text>Delivery No</Typography.Text>
            <Input
              value={deliveryNo}
              onChange={handleDeliveryNoChange}
              placeholder="Enter Delivery No"
            />
          </Space>

          <Space direction="vertical" size={12} style={{ width: '100%' }}>
            <Typography.Text>Stock In</Typography.Text>
            <Select
              value={stockIn}
              onChange={handleStockInChange}
              placeholder="Select Stock"
              style={{ width: '100%' }}
            >
              <Select.Option value="stock1">Stock 1</Select.Option>
              <Select.Option value="stock2">Stock 2</Select.Option>
              <Select.Option value="stock3">Stock 3</Select.Option>
            </Select>
          </Space>
        </div>

        <div className="flex gap-4 justify-end mt-4">
          <Button
            type="primary"
            icon={<SaveOutlined />}
            size="middle"
          >
            Search
          </Button>
          <Button
            type="default"
            icon={<SaveOutlined />}
            size="middle"
          >
            Stock In
          </Button>
        </div>
      </Card>
    </div>
  )
}
