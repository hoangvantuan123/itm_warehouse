import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined,
  DeleteOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons'

export default function UserManagementActions({ fetchData }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Save"
        type="primary"
        icon={<SearchOutlined />}
        size="middle"
        className="uppercase"
        onClick={fetchData}
      >
        SEARCH
      </Button>
    </div>
  )
}
