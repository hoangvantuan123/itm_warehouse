import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'
import { ArrowLeftIcon } from '../../icons'

const generateFakeData = (numRows) => {
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
      productionDate: moment()
        .subtract(i % 5, 'days')
        .format('YYYY-MM-DD'),
      warehouseDate: moment()
        .subtract(i % 10, 'days')
        .format('YYYY-MM-DD'),
      yyww: moment().format('YYWW'),
      yymm: moment().format('YYMM'),
      yymmdd: moment().format('YYMMDD'),
      dc: `DC-${String(i + 1).padStart(3, '0')}`,
      barcode: `BARCODE-${String(i + 1).padStart(3, '0')}`,
    })
  }
  return fakeData
}
const generateFakeDataA = (numRows) => {
  const fakeData = []
  for (let i = 0; i < numRows; i++) {
    const itemSeq = String(i + 1).padStart(3, '0')
    const itemNo = `ITEM-${itemSeq}`
    const lotCode = `LOT-${itemSeq}`
    const qty = Math.floor(Math.random() * 500) + 1
    const dateCode = `D${new Date()
      .toISOString()
      .slice(2, 10)
      .replace(/-/g, '')}`
    const reel = String(Math.floor(Math.random() * 9999)).padStart(4, '0')

    const barcode = `${itemNo}/${lotCode}/${qty}/${dateCode}/${reel}`

    fakeData.push({
      itemSeq: itemSeq,
      itemNo: itemNo,
      totalQty: qty,
      remainQty: Math.floor(qty * Math.random()),
      barcode: barcode,
    })
  }
  return fakeData
}
function TableTransferWaitingIqcStockIn() {
  const navigate = useNavigate()
  const data = generateFakeData(100)
  const tableA = generateFakeDataA(100)

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
          data={data}
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
          data={tableA}
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
