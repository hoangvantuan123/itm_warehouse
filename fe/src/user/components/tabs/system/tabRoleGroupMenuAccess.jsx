import { Input, Typography , Table} from 'antd'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

export default function TabRoleGroupMenuAccess({ permissionColumns1, selectedRowKeys , data1, page1, limit1, total1, handleTableChange1, handleAddRow1, handleTableSelectionChange}) {
  const { t } = useTranslation()

  return (
    <>
     <div className="font-medium text-xs mb-2 uppercase">
                Quyền Truy CẬP Nhóm Menu
              </div>
     <Table
                dataSource={data1}
                columns={permissionColumns1}
                rowKey="Id"
                size="small"
                rowSelection={{
                  selectedRowKeys: selectedRowKeys.table1,
                  onChange: (selectedKeys) =>
                    handleTableSelectionChange(selectedKeys, 'table1'),
                  selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                  ],
                }}
                pagination={{
                  current: page1,
                  pageSize: limit1,
                  total: total1,
                  showSizeChanger: true,
                  showTotal: (total) => `Total ${total} Item`,
                  onChange: (page, pageSize) =>
                    handleTableChange1({ current: page, pageSize }),
                }}
                onChange={(pagination) => handleTableChange1(pagination)}
                bordered
                footer={() => (
                  <span
                    type="primary"
                    onClick={handleAddRow1}
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                  >
                    Add Row
                  </span>
                )}
              />
    </>
  )
}
