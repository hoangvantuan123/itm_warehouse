import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'

function TableTransferWaitingIqcStockIn({ data }) {
  const navigate = useNavigate()

  const columnsB = [
    {
      name: 'Item Seq',
      header: 'Delivery Seq',
      sortable: true,
      filter: 'text',
      resizable: true, 
    },
    { name: 'Item No.', header: 'Delivery No', sortable: true, filter: 'text', resizable: true },
    {
      name: 'OK Qty',
      header: 'Delivery Type',
      sortable: true,
      filter: 'text',
      resizable: true,
    },
    { name: 'Remain Qty', header: 'Total Qty', sortable: true, filter: 'text', resizable: true },
    { name: 'OK Qty', header: 'ResidID', sortable: true, filter: 'text', resizable: true },
  ]
  const columnsA = [
    {
      name: 'Warehouse Name',
      header: 'Warehouse Name',
      sortable: true,
      filter: 'text',
      width: 200,
      resizable: true,
    },
    { name: 'Item No.',    width: 200, header: 'Item No.', sortable: true, filter: 'text', resizable: true },
    {
      name: 'Lot Number',
      header: 'Lot Number',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    { name: 'Item Qty', header: 'Item Qty', sortable: true, filter: 'text', resizable: true,    width: 200, },
    {
      name: 'Production Date',
      header: 'Production Date',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'Warehouse Date',
      header: 'Warehouse Date',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'YYWW',
      header: 'YYWW',
      sortable: true,
      resizable: true,
      width: 200,
    },
    {
      name: 'YYMM',
      header: 'YYMM',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'YYMMDD',
      header: 'YYMMDD',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    { name: 'DC', header: 'DC', sortable: true, filter: 'text', resizable: true,    width: 200, },
    { name: 'Barcode', header: 'Barcode', sortable: true, filter: 'text', resizable: true,   width: 200, },
  ]

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    console.log('Double click - Dữ liệu hàng:', clickedRowData)
  }

  TuiGrid.applyTheme('striped')

  return (
    <div className="w-full h-full justify-between flex gap-10 ">
      <div className="w-1/2 overflow-x-auto ">
        <Grid
          data={data}
          columns={columnsA}
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
      
      <div className="w-1/2 overflow-x-auto ">
        <Grid
          data={data}
          columns={columnsB}
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
    </div>
  )
}

export default TableTransferWaitingIqcStockIn
