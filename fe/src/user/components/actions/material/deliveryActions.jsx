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
        className="mb-2 shadow-none"
        size="small"
      >
        <div className="flex gap-4">
          <Space direction="vertical" size={12} >
            <Typography.Text>Date 1</Typography.Text>
            <DatePicker
              value={date1}
              onChange={handleDate1Change}
              className="w-auto"
            />
          </Space>
          <Space direction="vertical" size={12} >
            <Typography.Text>Date 2</Typography.Text>
            <DatePicker
              value={date2}
              onChange={handleDate2Change}
            />
          </Space>

          <Space direction="vertical" size={12} >
            <Typography.Text>Delivery No</Typography.Text>
            <Input
              value={deliveryNo}
              onChange={handleDeliveryNoChange}
              placeholder="Enter Delivery No"
            />
          </Space>

          <Space direction="vertical" size={12} >
            <Typography.Text>Stock In</Typography.Text>
            <Select
              id="typeSelect"
              defaultValue="All"
              style={{
                width: 200,
              }}
              size="middle"
              value={stockIn}
              onChange={handleStockInChange}
              options={[
                {
                  value: 0,
                  label: 'All',
                },
                {
                  value: 1,
                  label: 'ITM SEMI',
                },
                {
                  value: 2,
                  label: 'ITM PACK',
                },
                {
                  value: 3,
                  label: 'ITM PSG (F3)',
                },
                {
                  value: 4,
                  label: 'ITM PSG (F4)',
                },
              ]}
            />
          </Space>
        </div>

        <div className="flex gap-4 justify-end mt-4">

          <Button
            type="default"
            icon={<SaveOutlined />}
           size="middle"
            className="uppercase"
          >
            Stock In (IQC)
          </Button>
          <Button
            type="primary"
            icon={<SearchOutlined />}
           size="middle"
            className="uppercase"
          >
            Search
          </Button>
        </div>
      </Card>
    </div>
  )
}
