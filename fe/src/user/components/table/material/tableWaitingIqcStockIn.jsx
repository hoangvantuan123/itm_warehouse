import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'

function TableWaitingIqcStockIn({ data }) {
  const navigate = useNavigate()

  const columns = [
    {
      name: 'Delivery Seq',
      header: 'Delivery Seq',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Delivery No',
      header: 'Delivery No',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Delivery Type',
      header: 'Delivery Type',
      sortable: true,
      filter: 'text',
    },
    { name: 'Total Qty', header: 'Total Qty', sortable: true, filter: 'text' },
    { name: 'OK Qty', header: 'ResidID', sortable: true, filter: 'text' },
    {
      name: 'Remain Qty',
      header: 'Remain Qty',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Deliver Date',
      header: 'Deliver Date',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Customer Code',
      header: 'Customer Code',
      sortable: true,
    },
    {
      name: 'Customer Name',
      header: 'Customer Name',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Purchase Type Seq',
      header: 'Purchase Type Seq',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Purchase Type',
      header: 'Purchase Type',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'Biz Unit Name',
      header: 'Biz Unit Name',
      sortable: true,
      filter: 'text',
    },
  ]

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    console.log('Double click - Dữ liệu hàng:', clickedRowData)
  }
  TuiGrid.applyTheme('clean')
  return (
    <div className="w-full min-h-full shadow">
      <Grid
        data={data}
        columns={columns}
        rowHeight={20}
        bodyHeight="fitToParent"
        onDblclick={handleRowDoubleClick}
        rowHeaders={['rowNum', 'checkbox']}
        pagination={{
          perPage: 100,
        }}
        heightResizable={true}
        usageStatistics={true}
        hoverable={true}
      />
    </div>
  )
}

export default TableWaitingIqcStockIn
