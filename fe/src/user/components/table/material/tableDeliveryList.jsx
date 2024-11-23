import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'

const generateFakeData = (numRows = 20) => {
  const fakeData = []
  for (let i = 0; i < numRows; i++) {
    fakeData.push({
      deliveryseq: String(i + 1).padStart(3, '0'),
      deliveryno: `DLV-${moment().format('YYYYMMDD')}-${String(i + 1).padStart(2, '0')}`,
      deliverytype: i % 2 === 0 ? 'Express' : 'Standard',
      totalqty: Math.floor(Math.random() * 500) + 100,
      okqty: Math.floor(Math.random() * 500) + 50,
      remainqty: Math.floor(Math.random() * 100) + 10,
      deliverdate: moment()
        .subtract(i % 5, 'days')
        .format('YYYY-MM-DD'),
      customercode: `CUST${String(i + 1).padStart(3, '0')}`,
      customername: `Customer ${String(i + 1).padStart(3, '0')}`,
      purchasetypeseq: `PT${String(i + 1).padStart(3, '0')}`,
      purchasetype: i % 2 === 0 ? 'Online' : 'Retail',
      bizunitname: `Biz Unit ${String(i + 1).padStart(3, '0')}`,
    })
  }
  return fakeData
}

function TableDeliveryList() {
  const navigate = useNavigate()

  const columns = [
    {
      name: 'deliveryseq',
      header: 'Delivery Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'deliveryno',
      header: 'Delivery No',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'deliverytype',
      header: 'Delivery Type',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'totalqty',
      header: 'Total Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'okqty',
      header: 'OK Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'remainqty',
      header: 'Remain Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'deliverdate',
      header: 'Deliver Date',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'customercode',
      header: 'Customer Code',
      sortable: true,
      resizable: true,
      width: 200,
    },
    {
      name: 'customername',
      header: 'Customer Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'purchasetypeseq',
      header: 'Purchase Type Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'purchasetype',
      header: 'Purchase Type',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'bizunitname',
      header: 'Biz Unit Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
  ]

  const data = generateFakeData(10000)

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    console.log('Double click - Dữ liệu hàng:', clickedRowData)
    navigate(`/details/${clickedRowData.deliveryno}`)
  }
  TuiGrid.applyTheme('striped')

  return (
    <Grid
      data={data}
      columns={columns}
      rowHeight={40}
      bodyHeight="fitToParent"
      onDblclick={handleRowDoubleClick}
      rowHeaders={['rowNum', 'checkbox']}
      pagination={{ perPage: 100 }}
      scrollX={true}
      heightResizable={true}
      usageStatistics={true}
      hoverable={true}
    />
  )
}

export default TableDeliveryList
