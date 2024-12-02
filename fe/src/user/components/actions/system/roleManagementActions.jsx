import { useState } from 'react'
import { Button } from 'antd'
import { SaveOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'

export default function RoleManagementActions({ openModalAddUserGroups , handleSubmitSheet , handleDeleteDataSheet}) {
  return (
    <div className="flex items-center gap-2">
      <Button
        key="addUserGroup"
        type="primary"
        icon={<PlusOutlined />}
        size="middle"
        onClick={openModalAddUserGroups}
        style={{ backgroundColor: '#4F46E5', borderColor: '#4F46E5' }}
      >
        Add Group
      </Button>
      <Button
        key="save"
        type="primary"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        onClick={handleSubmitSheet}
        style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
      >
        Save
      </Button>
      <Button
        key="deleteRow"
        type="primary"
        icon={<DeleteOutlined />}
        size="middle"
        className="uppercase text-white"
        onClick={handleDeleteDataSheet}
        style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
      >
        Delete Row
      </Button>
      <Button
        key="deleteGroup"
        type="primary"
        icon={<DeleteOutlined />}
        size="middle"
        className="uppercase text-white"
        style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}
      >
        Delete Group
      </Button>
    </div>
  )
}
