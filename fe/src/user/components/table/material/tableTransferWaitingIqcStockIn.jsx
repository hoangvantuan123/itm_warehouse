import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import { ArrowLeftIcon } from '../../icons'




function TableTransferWaitingIqcStockIn({ sampleTableA, sampleTableB }) {
  const navigate = useNavigate()

  const columnsA = [
    {
      name: 'itemSeq',
      header: 'Item Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'itemNo',
      header: 'Item No.',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'totalQty',
      header: 'Total Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'okQty',
      header: 'Ok Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'remainQty',
      header: 'Remain Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
  ]

  const columnsB = [
    {
      name: 'warehouseName',
      header: 'Warehouse Name',
      sortable: true,
      filter: 'text',
      width: 200,
      resizable: true,
    },
    {
      name: 'itemNo',
      header: 'Item No.',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'lotNumber',
      header: 'Lot Number',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'itemQty',
      header: 'Item Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'productionDate',
      header: 'Production Date',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'warehouseDate',
      header: 'Warehouse Date',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'yyww',
      header: 'YYWW',
      sortable: true,
      resizable: true,
      width: 200,
    },
    {
      name: 'yymm',
      header: 'YYMM',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'yymmdd',
      header: 'YYMMDD',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'dc',
      header: 'DC',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'barcode',
      header: 'Barcode',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
  ]

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    console.log('Double click - Dữ liệu hàng:', clickedRowData)
  }

  TuiGrid.applyTheme('striped')

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-1/2 h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-10">
        <div className=" font-medium text-xs">THÔNG TIN BAROCODE</div>
        <Grid
          data={sampleTableB}
          columns={columnsB}
          rowHeight={5}
          bodyHeight="fitToParent"
          rowHeaders={['rowNum', 'checkbox']}
          pagination={{
            perPage: 100,
          }}
          heightResizable={true}
          usageStatistics={true}
          hoverable={true}
          scrollX={true}
          className="w-full h-full overflow-hidden"
        />
      </div>

      <div className="px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center">
        <ArrowLeftIcon />
      </div>

      <div className="w-1/2 h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-10">
        <div className=" font-medium text-xs">THÔNG ĐƠN HÀNG</div>
        <Grid
          data={sampleTableA}
          columns={columnsA}
          rowHeight={5}
          bodyHeight="fitToParent"
          onDblclick={handleRowDoubleClick}
          rowHeaders={['rowNum', 'checkbox']}
          pagination={{
            perPage: 100,
          }}
          heightResizable={true}
          usageStatistics={true}
          hoverable={true}
          scrollX={true}
          className="w-full h-full overflow-hidden "
        />
      </div>
    </div>
  )
}

export default TableTransferWaitingIqcStockIn
