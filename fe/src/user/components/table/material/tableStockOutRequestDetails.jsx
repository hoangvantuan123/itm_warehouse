import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { Button } from 'antd'
import '@glideapps/glide-data-grid/dist/index.css'
import { useNavigate } from 'react-router-dom'
import { CompactSelection } from '@glideapps/glide-data-grid'

const SearchButton = ({ onClick }) => (
  <Button onClick={onClick}>Show Search</Button>
)

function TableStockOutRequestDetails({
  data,
  onCellClicked,
  gridData,
  setGridData
}) {

  const [showSearch, setShowSearch] = useState(false)
  const ref = (useRef < data) | (null > null)
  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [vals, setVals] = useState([false, false, false]);

  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const columns = useMemo(
    () => [
      { title: 'prodOrderNo' },
      { title: 'prodPlanNo' },
      { title: 'invoiceNo' },
      { title: 'materialName' },
      { title: 'materialCode' },
      { title: 'materialSpec' },
      { title: 'unit' },
      { title: 'workCenter' },
      { title: 'requestedQty' },
      { title: 'totalStock' },
      { title: 'notes' },
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
        prodOrderNo = '',      
        prodPlanNo = '',       // Số kế hoạch sản xuất
        invoiceNo = '',        // Số hoá đơn
        materialName = '',     // Tên vật liệu
        materialCode = '',     // Mã vật liệu
        materialSpec = '',     // Quy cách vật liệu
        unit = '',             // Đơn vị
        workCenter = '',       // Work center
        requestedQty = '',     // Số lượng đề nghị
        totalStock = '',       // Tổng kho phân xưởng
        notes = ''             // Ghi chú
      } = person;

      const safeString = (value) => (value != null ? String(value) : '')
      const safeBoolean = (value) => (value ? '✔' : '✘')

      const columnMap = {
        2: { kind: GridCellKind.Text, data: safeString(prodOrderNo) },
        2: { kind: GridCellKind.Text, data: safeString(prodPlanNo) },
        2: { kind: GridCellKind.Text, data: safeString(invoiceNo) },
        2: { kind: GridCellKind.Text, data: safeString(materialName) },
        2: { kind: GridCellKind.Text, data: safeString(materialCode) },
        2: { kind: GridCellKind.Text, data: safeString(materialSpec) },
        2: { kind: GridCellKind.Text, data: safeString(unit) },
        2: { kind: GridCellKind.Text, data: safeString(workCenter) },
        2: { kind: GridCellKind.Text, data: safeString(requestedQty) },
        2: { kind: GridCellKind.Text, data: safeString(totalStock) },
        2: { kind: GridCellKind.Text, data: safeString(notes) },
      
      };

      if (columnMap.hasOwnProperty(col)) {
        const { kind, data } = columnMap[col]
        return { kind, data, displayData: data }
      }

      return { kind: '', data: '', displayData: '' }
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


  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8  overflow-hidden">
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
  rowSelect="single"
          onCellClicked={onCellClicked}
          gridSelection={selection}
          onGridSelectionChange={setSelection}
        />
      </div>
    </div>
  )
}

export default TableStockOutRequestDetails
