import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Modal,
  Typography,
  Button,
  Table,
  Tag,
  Select,
  message,
  Drawer,
} from 'antd'
import { getUsersNotInRole } from '../../../../features/system/getUsersNotInRole'
import { PostRolesUser } from '../../../../features/system/postRolesUser'
const { Title } = Typography
const { Option } = Select

export default function ModalUsers({ isOpen, onClose, groupId, fetchData3 }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)
  const [total, setTotal] = useState(0)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [data, setData] = useState([])
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await getUsersNotInRole(groupId)
      if (response.success) {
        setData(response.data)
      }
    } catch (error) {
      setError(error.message || 'Đã xảy ra lỗi')
      setData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) fetchData()
  }, [isOpen])

  const handleTableChange = (pagination) => {
    setPage(pagination.current)
    setLimit(pagination.pageSize)
  }

  const handleFinish = async () => {
    try {
      const result = await PostRolesUser(selectedRowKeys, groupId, 'user')
      if (result.success) {
        message.success('Cập nhật  thành công')
        setSelectedRowKeys([])
        onClose()
        fetchData3()
      }
    } catch {
      message.error('Lỗi khi thêm người dùng!')
    }
  }

  const columns = [
    {
      title: 'UserSeq',
      dataIndex: 'UserSeq',
      key: 'UserSeq',
      sorter: (a, b) => a.UserSeq.localeCompare(b.UserSeq),
    },
    {
      title: 'UserId',
      dataIndex: 'UserId',
      key: 'UserId',
      sorter: (a, b) => a.UserId.localeCompare(b.UserId),
    },
    {
      title: 'UserName',
      dataIndex: 'UserName',
      key: 'UserName',
      sorter: (a, b) => a.UserName.localeCompare(b.UserName),
    },
  ]

  return (
    <Drawer
      styles={{
        wrapper: {
          borderRadius: '16px 16px 0 0',
          overflow: 'hidden',
        },
      }}
      placement="bottom"
      open={isOpen}
      closable={false}
      onCancel={onClose}
      height="97%"
      footer={[
        <Button
          key="cancel"
          onClick={onClose}
          style={{ backgroundColor: '#f5f5f5', borderColor: '#d9d9d9' }}
        >
          Thoát
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleFinish}
          style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
        >
          Lưu
        </Button>,
      ]}
    >
      <div className="font-medium text-xs mb-4">DATA USERS </div>

      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
          ],
        }}
        size="small"
        bordered
        columns={columns}
        dataSource={data}
        rowKey="UserId"
        className="cursor-pointer pb-0 "
        loading={loading}
        pagination={{
          current: page,
          pageSize: limit,
          total: total,
          showSizeChanger: true,
          onChange: (page, pageSize) =>
            handleTableChange({ current: page, pageSize }),
        }}
        onChange={(pagination) => handleTableChange(pagination)}
      />
    </Drawer>
  )
}
