import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid';
import '../../../../static/css/customTabe.css'

function TableBarcodePrint({data, handleSelect, handleUnSelect, handleClickRow, handleScroll}) {

    const tblStockOut = [
        { name: 'TRAN_CODE', header: 'TRAN CODE', sortable: true, filter: 'text' },
        { name: 'TRAN_SEQ', header: 'TRAN SEQ', sortable: true, filter: 'text' },
        {
            name: 'ITEMCD',
            header: 'ITEM CODE',
            sortable: true,
            filter: 'text',
        },
        { name: 'LOTNO', header: 'LOT NO', sortable: true, filter: 'text' },
        {
            name: 'QTY',
            header: 'QTY',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'DATECODE',
            header: 'DATECODE',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'REELNO',
            header: 'REELNO',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'DATETIME',
            header: 'DATETIME',
            sortable: true,
            filter: 'text',
        },
        {
            name: 'LOT_ID',
            header: 'LOT ID',
            sortable: true,
            filter: 'text',
        },

        {
            name: 'USER_ID',
            header: 'USER_ID',
            sortable: true,
            filter: 'text',
        }
    ]

    TuiGrid.applyTheme('clean');
    return (

        <div className="">
            <Grid
                data={data}
                columns={tblStockOut}
                rowHeight={100}
                bodyHeight={450}
                rowHeaders={['rowNum', 'checkbox']}

                heightResizable={true}
                usageStatistics={true}
                hoverable={true}
                className='w-full'
                scrollX={true}
                onCheck={handleSelect}
                onUncheck={handleUnSelect}
                onClick={handleClickRow}
                onScrollEnd={handleScroll}

            />

        </div>

    );
}

export default TableBarcodePrint;