import { useState, useMemo } from 'react'
import { Modal, Button, Select, Input } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../icons'
import TableCodeHelpStockOut1 from '../../table/codeHelp/codeHelpStockOut1'
const { Search } = Input


export default function CodeHelpStockOut1({
  setConditionSeq,
  data,
  modalVisible,
  setModalVisible,
  setKeyword,
  keyword,
  loadingCodeHelp,
  handleSearch,
}) {
  
  return (
    <div>
      <Modal
        open={modalVisible}
        width="80%"
        maskClosable={false}
        footer={null}
        closable={false}
        style={{
          top: 50,
        }}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '75vh' }}
          className='gap-4'
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
              <div className="flex flex-col">
              <Select
                id="typeSelect"
                defaultValue="Bộ phận"
                style={{ width: 120 }}
                size="middle"
                options={[
                  { value: 1, label: 'Bộ phận' },
                  { value: 2, label: 'Mã bộ phận' },
                ]}
              />
            </div>
            <div className="flex flex-col">
              <Select
                id="typeSelect"
                defaultValue="All"
                style={{ width: 300 }}
                size="middle"
                options={[
                  { value: '', label: 'All' },
                  {
                    value: 'TypeSeq = 3031001',
                    label: 'Người đương chức, đương nhiệm',
                  },
                  {
                    value: 'TypeSeq = 3031002',
                    label: 'Người thôi việc, nghỉ làm',
                  },
                  { value: 'IsInOut = 2', label: 'Nhân viên bên ngoài' },
                ]}
              />
            </div>
            <div className="flex flex-col w-full">
              <Search
                allowClear
                size="middle"
                placeholder="Tìm kiếm"
                value={keyword}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
                onChange={(e) => setKeyword(e.target.value)}
                className=" w-full"
              />
            </div>
            <div className="flex flex-col">
              <Button
                type="primary"
                icon={<SearchOutlined />}
                size="middle"
              >
                Truy vấn
              </Button>
            </div>
              </div>
            </details>
      

            <TableCodeHelpStockOut1/>
        </div>
        <div className="flex justify-end ">
          <Button type="primary" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  )
}
