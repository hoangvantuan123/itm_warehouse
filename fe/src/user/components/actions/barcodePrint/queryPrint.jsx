import { useEffect } from 'react'
import { Card, Button, Input, DatePicker, Select, Form } from 'antd'
import { SearchOutlined, PrinterOutlined } from '@ant-design/icons'

import { VENDOR_LIST } from '../../../../utils/sysConstants'

export default function BarcodePrintFilter({
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  setMatIdSearch,
  setLotNoSearch,
  setVendorSearch,
}) {
  const [formSearch] = Form.useForm()

  useEffect(() => {
    formSearch.setFieldsValue({ fromDate: fromDate })
    formSearch.setFieldsValue({ toDate: toDate })
  }, [fromDate, toDate])

  const onchangeVendorSearch = (e) => {
    if (e != null){
      setVendorSearch(e.value);
    }
  }

  const onClearVendorValue = () => {
    setVendorSearch('');
  }

  return (

      <Card className="mb-1 p-1 shadow-sm" size="small">
        <Form
          layout={'inline'}
          form={formSearch}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
            }
          }}
        >
          <Form.Item label="From Date" name={'fromDate'}>
            <DatePicker 
            size="small"
            onChange={(e) => setFromDate(e)}
            />
          </Form.Item>

          <Form.Item label="To Date" name={'toDate'}>
            <DatePicker 
            size="small"
            onChange={(e) => setToDate(e)} 
            />
          </Form.Item>

          <Form.Item label="Vendor" name={'vendor'} size="small">
            <Select
              labelInValue
              allowClear
              defaultValue="All"
              size="small"
              onChange={onchangeVendorSearch}
              style={{
                width: 150,
              }}
              options={VENDOR_LIST?.map((item) => ({
                label: item?.label,
                value: item?.value,
              }))}

              onClear={onClearVendorValue}
            />
          </Form.Item>

          <Form.Item label="Mat ID" name={'matID'} size="small">
            <Input
              placeholder=""
              size="small" 
              onChange={(e) => setMatIdSearch(e.target.value)}
              />
          </Form.Item>

          <Form.Item
            label="Lot No"
            name={'lotNo'}
            size="small">
            <Input 
            placeholder="" 
            size="small" 
            onChange={(e) => setLotNoSearch(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Card>
  )
}
