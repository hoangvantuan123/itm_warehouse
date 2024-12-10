
import '../../../../static/css/customTabe.css'
import { CompactSelection, DataEditor, GridCellKind } from '@glideapps/glide-data-grid';
import '@glideapps/glide-data-grid/dist/index.css'

import { useCallback, useEffect, useMemo, useState } from 'react';
function TableBarcodePrint({ data, setGridData, gridData, selectRow, setSelectRow, handleVisibleRegionChange}) {

    const [isMinusClicked, setIsMinusClicked] = useState(false)
    const [lastClickedCell, setLastClickedCell] = useState(null)
    const [clickedRowData, setClickedRowData] = useState(null)

    const columns = useMemo(
        () => [
            { title: 'PLANT' },
            { title: 'TRAN_CODE' },
            { title: 'TRAN_SEQ' },
            { title: 'TRAN_TYPE' },
            { title: 'VENDOR' },
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
                PLANT = '',
                TRAN_CODE = '',
                TRAN_SEQ = '',
                TRAN_TYPE = '',
                VENDOR = '',
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
                0: { kind: GridCellKind.Text, data: safeString(PLANT) },
                1: { kind: GridCellKind.Text, data: safeString(TRAN_CODE) },
                2: { kind: GridCellKind.Text, data: safeString(TRAN_SEQ) },
                3: { kind: GridCellKind.Text, data: safeString(TRAN_TYPE) },
                4: { kind: GridCellKind.Text, data: safeString(VENDOR) },
                5: { kind: GridCellKind.Text, data: safeString(ITEMCD) },
                6: { kind: GridCellKind.Text, data: safeString(LOTNO) },
                7: { kind: GridCellKind.Text, data: safeString(QTY) },
                8: { kind: GridCellKind.Text, data: safeString(DATECODE) },
                9: { kind: GridCellKind.Text, data: safeString(REELNO) },
                10: { kind: GridCellKind.Text, data: safeString(DATETIME) },
                11: { kind: GridCellKind.Text, data: safeString(LOT_ID) },
                12: { kind: GridCellKind.Text, data: safeString(USER_ID) },
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


    const [selection, setSelection] = useState({
        columns: CompactSelection.empty(),
        rows: CompactSelection.empty(),
    });
    setSelectRow(selection);

    const onCellClicked = (cell, event) => {
        let rowIndex;

        if (cell[0] !== -1) {
            return
        }

        if (cell[0] === -1) {
            rowIndex = cell[1]
            setIsMinusClicked(true)
        } else {
            rowIndex = cell[0]
            setIsMinusClicked(false)
        }

        if (
            lastClickedCell &&
            lastClickedCell[0] === cell[0] &&
            lastClickedCell[1] === cell[1]
        ) {
            setKeyPath(null)
            setLastClickedCell(null)
            setClickedRowData(null)
            return
        }

        if (rowIndex >= 0 && rowIndex < gridData.length) {
            const rowData = gridData[rowIndex]

            const filteredData = {
                TRAN_CODE: rowData.TRAN_CODE,
                TRAN_SEQ: rowData.TRAN_SEQ,
                ITEMCD: rowData.ITEMCD,
                LOTNO: rowData.LOTNO,
                QTY: rowData.QTY,
                DATECODE: rowData.DATECODE,
                REELNO: rowData.REELNO,
                LOT_ID: rowData.LOT_ID,
                USER_ID: rowData.USER_ID,

            }
        setClickedRowData(rowData)
            // setLastClickedCell(cell)
        }
    };
 

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
                    onCellClicked={onCellClicked}
                    rowSelect="multi"
                    gridSelection={selection}
                    onGridSelectionChange={setSelection}
                    onVisibleRegionChanged = {handleVisibleRegionChange}
                    
                />
            </div>
        </div>

    );
}

export default TableBarcodePrint;