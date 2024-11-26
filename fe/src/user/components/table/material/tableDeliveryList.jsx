import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'

function TableDeliveryList({ data }) {
  const navigate = useNavigate()

  const columns = [
    {
      name: 'DelvNo',
      header: 'DelvNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'DelvMngNo',
      header: 'DelvMngNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'ImpType',
      header: 'ImpType',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'TotalQty',
      header: 'TotalQty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'OkQty',
      header: 'OkQty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'RemainQty',
      header: 'RemainQty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'DelvDate',
      header: 'DelvDate',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'CustSeq',
      header: 'Customer Code',
      sortable: true,
      resizable: true,
      width: 140,
    },
    {
      name: 'CustNm',
      header: 'Customer Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'DomOrImp',
      header: 'Purchase Type Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'PurchaseType',
      header: 'Purchase Type',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'BizUnit',
      header: 'BizUnit',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 100,
    },
    {
      name: 'BizUnitName',
      header: 'BizUnitName',
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
