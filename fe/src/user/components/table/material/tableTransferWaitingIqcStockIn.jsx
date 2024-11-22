import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'

// Generate fake data for the tables
const generateFakeData = (numRows = 20) => {
  const fakeData = []
  for (let i = 0; i < numRows; i++) {
    fakeData.push({
      deliverySeq: String(i + 1).padStart(3, '0'),
      deliveryNo: `DLV-${moment().format('YYYYMMDD')}-${String(i + 1).padStart(2, '0')}`,
      deliveryType: i % 2 === 0 ? 'Express' : 'Standard',
      totalQty: Math.floor(Math.random() * 500) + 100,
      residID: `RESID-${String(i + 1).padStart(3, '0')}`,
      warehouseName: `Warehouse ${String(i + 1).padStart(3, '0')}`,
      itemNo: `ITEM-${String(i + 1).padStart(3, '0')}`,
      lotNumber: `LOT-${String(i + 1).padStart(3, '0')}`,
      itemQty: Math.floor(Math.random() * 100) + 10,
      productionDate: moment().subtract(i % 5, 'days').format('YYYY-MM-DD'),
      warehouseDate: moment().subtract(i % 10, 'days').format('YYYY-MM-DD'),
      yyww: moment().format('YYWW'),
      yymm: moment().format('YYMM'),
      yymmdd: moment().format('YYMMDD'),
      dc: `DC-${String(i + 1).padStart(3, '0')}`,
      barcode: `BARCODE-${String(i + 1).padStart(3, '0')}`,
    })
  }
  return fakeData
}

function TableTransferWaitingIqcStockIn() {
  const navigate = useNavigate()
  const data = generateFakeData(20)  // Generate 20 rows of fake data

  const columnsB = [
    {
      name: 'deliverySeq',
      header: 'Delivery Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
    },
    { 
      name: 'deliveryNo', 
      header: 'Delivery No', 
      sortable: true, 
      filter: 'text', 
      resizable: true 
    },
    {
      name: 'deliveryType',
      header: 'Delivery Type',
      sortable: true,
      filter: 'text',
      resizable: true,
    },
    { 
      name: 'totalQty', 
      header: 'Total Qty', 
      sortable: true, 
      filter: 'text', 
      resizable: true 
    },
    { 
      name: 'residID', 
      header: 'ResidID', 
      sortable: true, 
      filter: 'text', 
      resizable: true 
    },
  ]

  const columnsA = [
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
      width: 200 
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
      width: 200 
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
      width: 200 
    },
    { 
      name: 'barcode', 
      header: 'Barcode', 
      sortable: true, 
      filter: 'text', 
      resizable: true, 
      width: 200 
    },
  ]

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    console.log('Double click - Dữ liệu hàng:', clickedRowData)
  }

  TuiGrid.applyTheme('striped')

  return (
    <div className="w-full h-full flex gap-10">
      {/* Bảng A */}
      <div className="w-1/2 flex flex-col h-full">
        <div className="p-2 font-bold text-xl">Bảng A</div>
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
          scrollX={true}  // Bật cuộn ngang cho bảng A
        />
      </div>

      {/* Bảng B */}
      <div className="w-1/2 flex flex-col h-full">
        <div className="p-2 font-bold text-xl">Bảng B</div>
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
          scrollX={true}  // Bật cuộn ngang cho bảng B
        />
      </div>
    </div>
  )
}

export default TableTransferWaitingIqcStockIn
