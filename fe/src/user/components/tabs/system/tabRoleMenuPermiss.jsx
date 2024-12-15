import { Input, Typography , Table} from 'antd'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

export default function TabRoleMenuAccessPermiss({ permissionColumns2, selectedRowKeys , data2, page2, limit2, total2, handleTableChange2, handleAddRow2, handleTableSelectionChange}) {
  const { t } = useTranslation()

  return (
    <>
     <div className="font-medium text-xs mb-2 uppercase">
     QUYỀN TRUY CẬP MENU
              </div>
    <Table
                dataSource={data2}
                columns={permissionColumns2}
                rowKey="Id"
                size="small"
                bordered
                rowSelection={{
                  selectedRowKeys: selectedRowKeys.table2,
                  onChange: (selectedKeys) =>
                    handleTableSelectionChange(selectedKeys, 'table2'),
                  selections: [
                    Table.SELECTION_ALL,
                    Table.SELECTION_INVERT,
                    Table.SELECTION_NONE,
                  ],
                }}
                pagination={{
                  current: page2,
                  pageSize: limit2,
                  total: total2,
                  showSizeChanger: true,
                  showTotal: (total) => `Total ${total} Item`,
                  onChange: (page, pageSize) =>
                    handleTableChange2({ current: page, pageSize }),
                }}
                onChange={(pagination) => handleTableChange2(pagination)}
                footer={() => (
                  <span
                    type="primary"
                    className="mt-2 max-w-md cursor-pointer text-pretty text-base text-indigo-500"
                    size="small"
                    onClick={handleAddRow2}
                  >
                    Add Row
                  </span>
                )}
              />
    </>
  )
}
