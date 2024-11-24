import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'
import { ArrowLeftIcon } from '../../icons'

const sampleTableA = [
  {
    itemSeq: '001',
    itemNo: 'ITEM-001',
    totalQty: 120,
    remainQty: 50,
    barcode: 'ITEM-001/LOT-001/120/D241124/1234',
  },
  {
    itemSeq: '002',
    itemNo: 'ITEM-002',
    totalQty: 300,
    remainQty: 200,
    barcode: 'ITEM-002/LOT-002/300/D241124/5678',
  },
  {
    itemSeq: '003',
    itemNo: 'ITEM-003',
    totalQty: 450,
    remainQty: 350,
    barcode: 'ITEM-003/LOT-003/450/D241124/9101',
  },
  {
    itemSeq: '004',
    itemNo: 'ITEM-004',
    totalQty: 600,
    remainQty: 550,
    barcode: 'ITEM-004/LOT-004/600/D241124/1123',
  },
];
const sampleTableB = [
  {
    warehouseName: 'Warehouse 001',
    itemNo: 'ITEM-001',
    lotNumber: 'LOT-001',
    itemQty: 100,
    productionDate: '2024-11-20',
    warehouseDate: '2024-11-22',
    yyww: '2447',
    yymm: '2411',
    yymmdd: '241124',
    dc: 'DC-001',
    barcode: 'BARCODE-001',
  },
  {
    warehouseName: 'Warehouse 002',
    itemNo: 'ITEM-002',
    lotNumber: 'LOT-002',
    itemQty: 200,
    productionDate: '2024-11-19',
    warehouseDate: '2024-11-21',
    yyww: '2447',
    yymm: '2411',
    yymmdd: '241124',
    dc: 'DC-002',
    barcode: 'BARCODE-002',
  },
  {
    warehouseName: 'Warehouse 003',
    itemNo: 'ITEM-003',
    lotNumber: 'LOT-003',
    itemQty: 300,
    productionDate: '2024-11-18',
    warehouseDate: '2024-11-20',
    yyww: '2447',
    yymm: '2411',
    yymmdd: '241124',
    dc: 'DC-003',
    barcode: 'BARCODE-003',
  },
  {
    warehouseName: 'Warehouse 004',
    itemNo: 'ITEM-004',
    lotNumber: 'LOT-004',
    itemQty: 400,
    productionDate: '2024-11-17',
    warehouseDate: '2024-11-19',
    yyww: '2447',
    yymm: '2411',
    yymmdd: '241124',
    dc: 'DC-004',
    barcode: 'BARCODE-004',
  },
];

function TableTransferWaitingIqcStockIn() {
  const navigate = useNavigate()
 
  const columnsA = [
    {
      name: 'itemSeq',
      header: 'Item Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
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
      name: 'totalQty',
      header: 'Total Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'okQty',
      header: 'Ok Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'remainQty',
      header: 'Remain Qty',
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
      width: 250,
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
      <div className="w-1/2 h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-10" >
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
