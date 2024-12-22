import {  useEffect, } from 'react'
import {
  Button,
  Form
} from 'antd'


import {
  PrinterOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

export default function BarcodeChangeAction({
  fromDate,
  toDate,
  onFinish,
  btnOpenModal,
  formChange,

}) {

  useEffect(() => {
    formChange.resetFields()
  }, [formChange])

  return (

    <div className="mt-1 flex items-center gap-2">
      <Button
        icon={<PrinterOutlined />}
        onClick={btnOpenModal}
        type="primary"
        size="middle"

        color="default"
        variant="filled"
        style={{ backgroundColor: '#f0f0f0', borderColor: '#d9d9d9' }}
      >
        PRINT
      </Button>

      <Button
        icon={<SearchOutlined />}
        type="primary"
        size="middle"
        onClick={onFinish}
      >
        SEARCH
      </Button>
    </div>
    
  )
}
