import { useState, useCallback, useEffect } from 'react'
import { Modal, Button, Select, Input, Table } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { SearchRootMenu } from '../../../../features/system/searchRootMenus'
import { ArrowIcon } from '../../icons'
const { Search } = Input

export default function ModalHelpMenu({
  openHelp,
  setOpenHelp,
  setOnSelectRow,
  inputHelp,
}) {
  const [searchResults1, SetSearchResults1] = useState([])
  const [error1, setError1] = useState(null)
  const [loading1, setLoading1] = useState(false)

  return (
    <Modal
      width="80%"
      open={openHelp}
      closable={false}
      footer={null}
      centered={true}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '75vh' }}
        className="gap-4"
      >
        <details
          className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
              <FilterOutlined />
              Điều kiện truy vấn
            </h2>
            <span className="relative size-5 shrink-0">
              <ArrowIcon />
            </span>
          </summary>
          <div className="flex p-2 gap-4">
            <div className="flex flex-col w-full">
              <Search
                allowClear
                size="middle"
                placeholder="Tìm kiếm"
                className=" w-full"
                value={inputHelp}
              />
            </div>
            <div className="flex flex-col">
              <Button type="primary" icon={<SearchOutlined />} size="middle">
                Truy vấn
              </Button>
            </div>
          </div>
        </details>
      </div>

      <div className="flex justify-end gap-4">
        <Button onClick={() => setOpenHelp(false)}>Cancel</Button>
        <Button type="primary">Save</Button>
      </div>
    </Modal>
  )
}
