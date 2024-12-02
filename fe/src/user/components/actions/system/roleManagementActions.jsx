import { useState } from 'react'
import { Button } from 'antd'
import { SaveOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'

export default function RoleManagementActions({ openModalAddUserGroups }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Save"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModalAddUserGroups}
        style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
      >
        ADD GROUP
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
      <Button
        key="Row Delete"
        type="primary"
        icon={<DeleteOutlined />}
        size="middle"
        className="uppercase text-white"
        style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
      >
        Row Delete
      </Button>
    </div>
  )
}
