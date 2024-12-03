import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined,
  DeleteOutlined,
  FileDoneOutlined,
  SearchOutlined,
} from '@ant-design/icons'

export default function StockOutRequestActionsDetails() {
  return (
    <div className="flex items-center gap-2">
    <Button
        key="Save"
        type="primary"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
      >
        Save
      </Button>

    </div>
  )
}
