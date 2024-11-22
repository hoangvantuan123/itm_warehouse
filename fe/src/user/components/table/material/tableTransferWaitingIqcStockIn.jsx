import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid';
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import moment from 'moment'

function TableTransferWaitingIqcStockIn({ data }) {
    const navigate = useNavigate()

    const columnsB = [
        { name: 'Item Seq', header: 'Delivery Seq', sortable: true, filter: 'text' },
        { name: 'Item No.', header: 'Delivery No', sortable: true, filter: 'text' },
        {
            name: 'OK Qty',
            header: 'Delivery Type',
            sortable: true,
            filter: 'text',
        },
        { name: 'Remain Qty', header: 'Total Qty', sortable: true, filter: 'text' },
        { name: 'OK Qty', header: 'ResidID', sortable: true, filter: 'text' }
    ]
    const columnsA = [
        { name: 'Warehouse Name', header: 'Warehouse Name', sortable: true, filter: 'text' },
        { name: 'Item No.', header: 'Item No.', sortable: true, filter: 'text' },
        {
            name: 'Lot Number',
            header: 'Lot Number',
            sortable: true,
            filter: 'text',
        },
        { name: 'Item Qty', header: 'Item Qty', sortable: true, filter: 'text' },
        {
            name: 'Production Date',
            header: 'Production Date',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'Warehouse Date',
            header: 'Warehouse Date',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'YYWW',
            header: 'YYWW',
            sortable: true,
        },
        {
            name: 'YYMM',
            header: 'YYMM',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'YYMMDD',
            header: 'YYMMDD',
            sortable: true,
            filter: 'text',
        },
        { name: 'DC', header: 'DC', sortable: true, filter: 'text' },
        { name: 'Barcode', header: 'Barcode', sortable: true, filter: 'text' },
    ]

    const handleRowDoubleClick = (e) => {
        const { rowKey } = e
        const clickedRowData = e.instance.getRow(rowKey)
        console.log('Double click - Dữ liệu hàng:', clickedRowData)
    }
    TuiGrid.applyTheme('clean');
    return (
        <div className="w-full min-h-full  overflow-auto  justify-between flex  gap-10 shadow">

            <div className="w-1/2 overflow-y-auto ">
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
                    className='w-full'

                />
            </div>
            <div className="w-1/2 overflow-y-auto">
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
                    className="w-1/2"
                />
            </div>
        </div>
    )
}

export default TableTransferWaitingIqcStockIn
