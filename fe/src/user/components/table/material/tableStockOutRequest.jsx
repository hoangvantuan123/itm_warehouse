import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid';
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'

function TableStockOutRequest({data}) {

    // const navigate = useNavigate();
    const tblStockOut = [
        { name: 'factoryName', header: 'Factory Name', sortable: true, filter: 'text' },
        { name: 'outRegSeq', header: 'Out Reg Seq', sortable: true, filter: 'text' },
        {
            name: 'requestDate',
            header: 'Request Date',
            sortable: true,
            filter: 'text',
        },
        { name: 'RequestNo', header: 'Request No', sortable: true, filter: 'text' },
        {
            name: 'employeeName',
            header: 'Employee Name',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'workOrderNo',
            header: 'Work Order No',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'itemName',
            header: 'Item Name',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'itemNo',
            header: 'Item No',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'qty',
            header: 'Qty',
            sortable: true,
            filter: 'text',
        },

        {
            name: 'statusName',
            header: 'Status Name',
            sortable: true,
            filter: 'text',
        }
    ]

    const handleRowDoubleClick = (e) => {
        const { rowKey } = e
        const clickedRowData = e.instance.getRow(rowKey)
    }
    TuiGrid.applyTheme('clean');
    return (

        <div className="">
                <Grid
                    data={data}
                    columns={tblStockOut}
                    rowHeight={100}
                    bodyHeight="fitToParent"
                    onDblclick={handleRowDoubleClick}
                    rowHeaders={['rowNum', 'checkbox']}
                    pagination={{
                        perPage: 100,
                    }}
                    heightResizable={true}
                    usageStatistics={true}
                    hoverable={true}
                    className='w-full'

                />
            </div>

    );
}

export default TableStockOutRequest