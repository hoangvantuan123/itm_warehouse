import { useState } from 'react'
import { Button } from 'antd'
import { SaveOutlined, PlusOutlined } from '@ant-design/icons'

export default function RoleManagementActions({ openModalAddUserGroups }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="Save"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModalAddUserGroups}
        className="w-full  uppercase rounded-lg h-full border-gray-200 bg-indigo-600 text-white shadow-sm text-sm"
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
    </div>
  )
}
