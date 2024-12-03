import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { useNavigate } from 'react-router-dom'
import { CompactSelection } from '@glideapps/glide-data-grid'

const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableCodeHelpStockOut2() {
    const data =[] 
  const [gridData, setGridData] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const columns = useMemo(
    () => [
        { title: 'EmpName' },        
        { title: 'EmpID' },   
        { title: 'DeptName' },    
        { title: 'WkDeptName' },
        { title: 'PosName' },
        { title: 'UMJpName' },
        { title: 'UMPgName' },
        { title: 'UMJdName' },
        { title: 'UMJoName' },
        { title: 'OrdDate' },
        { title: 'SMSexName' },
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
      const person = gridData[row] || {}
      const {
        EmpName = '',
        EmpID = '',
        DeptName = '',
        WkDeptName = '',
        PosName = '',
        UMJpName = '',
        UMPgName = '',
        UMJdName = '',
        UMJoName = '',
        OrdDate = '',
        SMSexName = '',
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(EmpName) },
        1: { kind: GridCellKind.Text, data: safeString(EmpID) },
        2: { kind: GridCellKind.Text, data: safeString(DeptName) },
        3: { kind: GridCellKind.Text, data: safeString(WkDeptName) },
        3: { kind: GridCellKind.Text, data: safeString(PosName) },
        3: { kind: GridCellKind.Text, data: safeString(UMJpName) },
        3: { kind: GridCellKind.Text, data: safeString(UMPgName) },
        3: { kind: GridCellKind.Text, data: safeString(UMJdName) },
        3: { kind: GridCellKind.Text, data: safeString(UMJoName) },
        3: { kind: GridCellKind.Text, data: safeString(OrdDate) },
        3: { kind: GridCellKind.Text, data: safeString(SMSexName) }
      }

      if (columnMap.hasOwnProperty(col)) {
        const { kind, data } = columnMap[col]
        return { kind, data, displayData: data }
      }

      return { kind: GridCellKind.Text, data: '', displayData: '' }
    },
    [gridData],
  )

  const [lastActivated, setLastActivated] = useState(undefined)

  const onCellActivated = useCallback((cell) => {
    console.log('cell', cell)
    setLastActivated(cell)
  }, [])

  useEffect(() => {
    setGridData(data)
  }, [data])

  const onCellClicked = (cell, event) => {
    let rowIndex

    if (cell[0] !== -1) {
      console.log('Ignoring click on cell, cell[0] is neither -1 nor 1')
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
      console.log('Click again on the same cell, deactivating.')
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < gridData.length) {
      const rowData = gridData[rowIndex]
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    } else {
      console.log('Invalid row index:', rowIndex)
    }

    console.log('Cell clicked:', cell)
    console.log('Row data:', gridData[rowIndex])
    console.log('Event:', event)
  }

  const onGridSelectionChange = (newSelection) => {
    console.log('Selection aborted', newSelection)
  }

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <DataEditor
          columns={cols}
          getCellContent={getData}
          rows={gridData.length}
          showSearch={showSearch}
          getCellsForSelection={true}
          onSearchClose={onSearchClose}
          width="100%"
          height="100%"
          rowMarkers={('checkbox-visible', 'both')}
          useRef={useRef}
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
  )
}

export default TableCodeHelpStockOut2
