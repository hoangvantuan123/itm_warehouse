import { Input, Typography , Table} from 'antd'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

export default function TabRoleListUser({ permissionColumns3, selectedRowKeys , data3, page3, limit3, total3, handleTableChange3, handleAddRow3, handleTableSelectionChange}) {
  const { t } = useTranslation()

  return (
    <>
     <div className="font-medium text-xs mb-2 uppercase">
     DANH SÁCH NGƯỜI DÙNG
              </div>
     <Table
                dataSource={data3}
                columns={permissionColumns3}
                rowKey="Id"
                size="small"
                bordered
                rowSelection={{
                  selectedRowKeys: selectedRowKeys.table3,
                  onChange: (selectedKeys) =>
                    handleTableSelectionChange(selectedKeys, 'table3'),
                  selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                  ],
                }}
                pagination={{
                  current: page3,
                  pageSize: limit3,
                  total: total3,
                  showSizeChanger: true,
                  showTotal: (total) => `Total ${total} Item`,
                  onChange: (page, pageSize) =>
                    handleTableChange3({ current: page, pageSize }),
                }}
                onChange={(pagination) => handleTableChange3(pagination)}
                footer={() => (
                  <span
                    type="primary"
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="large"
                    onClick={handleAddRow3}
                  >
                    Add Row
                  </span>
                )}
              />
    </>
  )
}
