import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { TableOutlined } from '@ant-design/icons'
const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableUserManagement({
  data,
  setSelection,
  selection,
  showSearch,
  setShowSearch,
}) {
  const [gridData, setGridData] = useState([])
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [clickedRowData, setClickedRowData] = useState(null)
  const [clickedRowDataList, setClickedRowDataList] = useState([])
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)

  const columns = useMemo(
    () => [
      { title: 'UserSeq' },
      { title: 'UserName' },
      { title: 'UserId' },
      { title: 'DeptSeq' },
      { title: 'Remark' },
      { title: 'LoginDate' },
      { title: 'LoginStatus' },
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
        UserSeq = '',
        UserName = '',
        UserId = '',
        DeptSeq = '',
        Remark = '',
        LoginDate = '',
        LoginStatus,
      } = person

      const safeString = (value) => (value != null ? String(value) : '')

      const columnMap = {
        0: { kind: GridCellKind.Text, data: safeString(UserSeq) },
        1: { kind: GridCellKind.Text, data: safeString(UserName) },
        2: { kind: GridCellKind.Text, data: safeString(UserId) },
        3: { kind: GridCellKind.Text, data: safeString(DeptSeq) },
        4: { kind: GridCellKind.Text, data: safeString(Remark) },
        5: { kind: GridCellKind.Text, data: safeString(LoginDate) },
        5: { kind: GridCellKind.Text, data: safeString(LoginStatus) },
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

  const onGridSelectionChange = (newSelection) => {
    console.log('Selection aborted', newSelection)
  }

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <h2 className="text-xs font-medium flex items-center gap-2 p-2 text-blue-600 uppercase">
          <TableOutlined />
          DATA SHEET
        </h2>
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
          rowSelect="multi"
          gridSelection={selection}
          onGridSelectionChange={setSelection}
          getRowThemeOverride={(i) =>
            i % 2 === 0
              ? undefined
              : {
                  bgCell: '#FBFBFB',
                }
          }
        />
      </div>
    </div>
  )
}

export default TableUserManagement
