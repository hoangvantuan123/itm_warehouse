import 'tui-grid/dist/tui-grid.css'
import '../../../../static/css/customTabe.css'
import { CompactSelection, DataEditor, GridCellKind } from '@glideapps/glide-data-grid';
import '@glideapps/glide-data-grid/dist/index.css'

import { useCallback, useEffect, useMemo, useState } from 'react';

function TabelBarcodeChange({ data, setGridData, gridData, setSelectRow}) {

    const [isMinusClicked, setIsMinusClicked] = useState(false)
    const [lastClickedCell, setLastClickedCell] = useState(null)
    const [clickedRowData, setClickedRowData] = useState(null)

    const columns = useMemo(
        () => [
            { title: 'PLANT' },
            { title: 'TRAN_CODE' },
            { title: 'TRAN_SEQ' },
            { title: 'ITEM CODE' },
            { title: 'LOT NO' },
            { title: 'QTY' },
            { title: 'DATE CODE' },
            { title: 'REEL NO' },
            { title: 'BARCODE' },
            { title: 'NEW BARCODE' },
            { title: 'DATE TIME' },
            { title: 'STATUS' },
            { title: 'USER_ID' },
            { title: 'REMARK' },
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
                Plant = '',
                Tran_code = '',
                BarcodeSeq = '',
                ItemNo = '',
                LotNo = '',
                NewQty = '',
                DateCode = '',
                ReelNo = '',
                BarcodeID = '',
                NewBarcodeID = '',
                LastDateTime = '',
                NewStatus = '',
                UserID = '',
                Remark = '',

            } = dataGrid



            const safeString = (value) => (value != null ? String(value) : '')

            const columnMap = {
                0: { kind: GridCellKind.Text, data: safeString(Plant) },
                1: { kind: GridCellKind.Text, data: safeString(Tran_code) },
                2: { kind: GridCellKind.Text, data: safeString(BarcodeSeq) },
                3: { kind: GridCellKind.Text, data: safeString(ItemNo) },
                4: { kind: GridCellKind.Text, data: safeString(LotNo) },
                5: { kind: GridCellKind.Text, data: safeString(NewQty) },
                6: { kind: GridCellKind.Text, data: safeString(DateCode) },
                7: { kind: GridCellKind.Text, data: safeString(ReelNo) },
                8: { kind: GridCellKind.Text, data: safeString(BarcodeID) },
                9: { kind: GridCellKind.Text, data: safeString(NewBarcodeID) },
                10: { kind: GridCellKind.Text, data: safeString(LastDateTime) },
                11: { kind: GridCellKind.Text, data: safeString(NewStatus) },
                12: { kind: GridCellKind.Text, data: safeString(UserID) },
                13: { kind: GridCellKind.Text, data: safeString(Remark) },
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
        }
    };
 

    return (

        <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
            <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
                <DataEditor
                    columns={cols}
                    getCellContent={getData}
                    rows={gridData.length}
                    getCellsForSelection={true}
                    width="100%"
                    height="100%"
                    rowMarkers={('checkbox-visible', 'both')}
                    onColumnResize={onColumnResize}
                    smoothScrollY={true}
                    smoothScrollX={true}
                    onCellClicked={onCellClicked}
                    rowSelect="multi"
                    gridSelection={selection}
                    onGridSelectionChange={setSelection}
                    
                />
            </div>
        </div>

    );
}

export default TabelBarcodeChange;