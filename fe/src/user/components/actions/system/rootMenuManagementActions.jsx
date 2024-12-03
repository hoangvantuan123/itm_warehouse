import { useState } from 'react'
import { Button } from 'antd'
import { SaveOutlined, PlusOutlined, FileDoneOutlined } from '@ant-design/icons'

export default function RootMenuManagementActions({ openModal }) {
  return (
    <div className="flex items-center gap-2">

<Button
        key="Reset"
        icon={<FileDoneOutlined />}
        size="middle"
        className="uppercase"
        type="default"
      >
        Open
      </Button>
      <Button
        key="Save"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModal}
        style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
      >
        ADD ROOT MENU
      </Button>
    </div>
  )
}
