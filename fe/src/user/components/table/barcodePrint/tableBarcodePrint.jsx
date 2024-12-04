import 'tui-grid/dist/tui-grid.css'
import '../../../../static/css/customTabe.css'
import { CompactSelection, DataEditor, GridCellKind } from '@glideapps/glide-data-grid';
import '@glideapps/glide-data-grid/dist/index.css'

import { useCallback, useEffect, useMemo, useState } from 'react';

function TableBarcodePrint({ data, setGridData, gridData, selectRow, setSelectRow }) {


    const columns = useMemo(
        () => [
            { title: 'TRAN_CODE' },
            { title: 'TRAN_SEQ' },
            { title: 'ITEMCD' },
            { title: 'LOTNO' },
            { title: 'QTY' },
            { title: 'DATECODE' },
            { title: 'REELNO' },
            { title: 'DATETIME' },
            { title: 'LOT_ID' },
            { title: 'USER_ID' },
        ],
        [],
    )
    const [cols, setCols] = useState(columns)
    const onColumnResize = useCallback(
        (column, newSize) => {
            const index = cols.indexOf(column)
            if (index !== -1) {
                const newCol = {
                    ...column,
                    width: newSize,
                }
                const newCols = [...cols]
                newCols.splice(index, 1, newCol)
                setCols(newCols)
            }
        },
        [cols],
    )

    const getData = useCallback(
        ([col, row]) => {
            const dataGrid = gridData[row] || {}
            const {
                TRAN_CODE = '',
                TRAN_SEQ = '',
                ITEMCD = '',
                LOTNO = '',
                QTY = '',
                DATECODE = '',
                REELNO = '',
                DATETIME = '',
                LOT_ID = '',
                USER_ID = '',

            } = dataGrid



            const safeString = (value) => (value != null ? String(value) : '')

            const columnMap = {
                0: { kind: GridCellKind.Text, data: safeString(TRAN_CODE) },
                1: { kind: GridCellKind.Text, data: safeString(TRAN_SEQ) },
                2: { kind: GridCellKind.Text, data: safeString(ITEMCD) },
                3: { kind: GridCellKind.Text, data: safeString(LOTNO) },
                4: { kind: GridCellKind.Text, data: safeString(QTY) },
                5: { kind: GridCellKind.Text, data: safeString(DATECODE) },
                6: { kind: GridCellKind.Text, data: safeString(REELNO) },
                7: { kind: GridCellKind.Text, data: safeString(DATETIME) },
                8: { kind: GridCellKind.Text, data: safeString(LOT_ID) },
                9: { kind: GridCellKind.Text, data: safeString(USER_ID) },
            }

            if (columnMap.hasOwnProperty(col)) {
                const { kind, data } = columnMap[col]
                return { kind, data, displayData: data }
            }

            return { kind: GridCellKind.Text, data: '', displayData: '' }
        },
        [gridData],
    )

    useEffect(() => {
        setGridData(data)
    }, [data])

    const getSelectedRowsData = () => {
        if (!selection?.rows) return [];
        const selectedIndices = [...selection.rows];
        console.log("selectedIndices", selectedIndices);
        return selectedIndices.map((rowIndex) => gridData[rowIndex]);
    };

    const [selection, setSelection] = useState({
        columns: CompactSelection.empty(),
        rows: CompactSelection.empty(),
    })
    console.log("selection", selection);
    return (

        <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
            <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
                <DataEditor
                    columns={cols}
                    getCellContent={getData}
                    rows={gridData.length}
                    // showSearch={showSearch}
                    getCellsForSelection={true}
                    // onSearchClose={onSearchClose}
                    width="100%"
                    height="100%"
                    rowMarkers={('checkbox-visible', 'both')}
                    // useRef={useRef}
                    onColumnResize={onColumnResize}
                    smoothScrollY={true}
                    smoothScrollX={true}
                    // onCellClicked={}
                    rowSelect="multi"
                    gridSelection={selection}
                    onGridSelectionChange={setSelection}
                />
            </div>
        </div>

    );
}

export default TableBarcodePrint;