import { useState } from 'react'
import { Button } from 'antd'
import { SaveOutlined, PlusOutlined } from '@ant-design/icons'

export default function RootMenuManagementActions({ openModal }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Save"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModal}
        className="w-full  uppercase rounded-lg h-full border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
      >
        ADD ROOT MENU
      </Button>
    </div>
  )
}
