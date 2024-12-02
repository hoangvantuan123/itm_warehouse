import { useState } from 'react'
import { Button } from 'antd'
import { SaveOutlined, PlusOutlined } from '@ant-design/icons'

export default function MenuManagementActions({ openModal }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Save"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModal}
        style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
      >
        ADD MENU
      </Button>
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
