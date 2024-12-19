import '../../../../static/css/customTabe.css'
import {
  CompactSelection,
  DataEditor,
  GridCellKind,
} from '@glideapps/glide-data-grid'


import { useCallback, useEffect, useRef, useState } from 'react'
import LayoutStatusMenuSheet from '../../sheet/jsx/layoutStatusMenu'
import LayoutMenuSheet from '../../sheet/jsx/layoutMenu'
import { loadFromLocalStorageSheet, saveToLocalStorageSheet } from '../../../../localStorage/sheet/sheet'
import { useLayer } from 'react-laag'
import { Checkbox, Drawer } from 'antd'

const defaultCols = [
  {
    title: '#',
    id: 'Status',
    kind: GridCellKind.Text,
    readonly: true,
    width: 50,
    hasMenu: true,
  },
  {
    title: 'PLANT',
    id: 'Plant',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },

  {
    title: 'TRAN CODE',
    id: 'Tran_code',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'TRAN SEQ',
    id: 'BarcodeSeq',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'ITEM CODE',
    id: 'ItemNo',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },

  {
    title: 'LOT NO',
    id: 'LotNo',
    kind: GridCellKind.Text,
    readonly: false,
    width: 150,
    hasMenu: true,
  },
  {
    title: 'QTY',
    id: 'NewQty',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'DATE CODE',
    id: 'DateCode',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'REEL NO',
    id: 'ReelNo',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'BARCODE',
    id: 'BarcodeID',
    kind: GridCellKind.Text,
    readonly: false,
    width: 300,
    hasMenu: true,
  },
  {
    title: 'NEW BARCODE',
    id: 'NewBarcodeID',
    kind: GridCellKind.Text,
    readonly: false,
    width: 300,
    hasMenu: true,
  },
  {
    title: 'DATE TIME',
    id: 'LastDateTime',
    kind: GridCellKind.Text,
    readonly: false,
    width: 150,
    hasMenu: true,
  },
  {
    title: 'STATUS',
    id: 'NewStatus',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'USER ID',
    id: 'UserID',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'REMARK',
    id: 'Remark',
    kind: GridCellKind.Text,
    readonly: false,
    width: 250,
    hasMenu: true,
  },
]

function TabelBarcodeChange({
  data,
  setGridData,
  gridData,
  setSelectRow,
  setClickedRowData,

  setShowSearch,
  showSearch,
}) {
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)

  const gridRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [cols, setCols] = useState(() =>
    loadFromLocalStorageSheet('S_ERP_COLS_PAGE_BARCODE_CHANGE', defaultCols),
  )
  const [hiddenColumns, setHiddenColumns] = useState(
    loadFromLocalStorageSheet('H_ERP_COLS_PAGE_BARCODE_CHANGE', []),
  )
  const [showMenu, setShowMenu] = useState(null);

  const onHeaderMenuClick = useCallback((col, bounds) => {
    if (cols[col]?.id === 'Status') {
      setShowMenu({
        col,
        bounds,
        menuType: 'statusMenu',
      })
    } else {
      setShowMenu({
        col,
        bounds,
        menuType: 'defaultMenu',
      })
    }
  }, [])
  
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })


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
      const columnKey = cols[col]?.id || ''
      const value = person[columnKey] || ''
      const column = cols[col]
      return {
        kind: GridCellKind.Text,
        data: value,
        displayData: String(value),
        readonly: true,
        allowOverlay: true,
        hasMenu: column?.hasMenu || false,
      }
    },
    [gridData, cols],
  )

  useEffect(() => {
    setGridData(data)
    setSelectRow(selection)
  }, [data, selection])


  

  const { renderLayer, layerProps } = useLayer({
    isOpen: showMenu !== null,
    triggerOffset: 4,
    onOutsideClick: () => setShowMenu(null),
    trigger: {
      getBounds: () => ({
        bottom: (showMenu?.bounds.y ?? 0) + (showMenu?.bounds.height ?? 0),
        height: showMenu?.bounds.height ?? 0,
        left: showMenu?.bounds.x ?? 0,
        right: (showMenu?.bounds.x ?? 0) + (showMenu?.bounds.width ?? 0),
        top: showMenu?.bounds.y ?? 0,
        width: showMenu?.bounds.width ?? 0,
      }),
    },
    placement: 'bottom-start',
    auto: true,
    possiblePlacements: ['bottom-start', 'bottom-end'],
  })

  const onSearchClose = useCallback(() => setShowSearch(false), [])


  const handleSort = (columnId, direction) => {
    setGridData((prevData) => {
      const sortedData = [...prevData].sort((a, b) => {
        if (a[columnId] < b[columnId]) return direction === 'asc' ? -1 : 1
        if (a[columnId] > b[columnId]) return direction === 'asc' ? 1 : -1
        return 0
      })
      return sortedData
    })
    setShowMenu(null)
  }
  const handleHideColumn = (colIndex) => {
    const columnId = cols[colIndex]?.id
    if (cols.length > 1) {
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId]
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_BARCODE_CHANGE', newHidden)
        return newHidden
      })
      setCols((prevCols) => {
        const newCols = prevCols.filter((_, idx) => idx !== colIndex)
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_BARCODE_CHANGE', newCols)
        return newCols
      })
      setShowMenu(null)
    }
  }

  const handleReset = () => {
    setCols(defaultCols)
    setHiddenColumns([])
    localStorage.removeItem('S_ERP_COLS_PAGE_BARCODE_CHANGE')
    localStorage.removeItem('H_ERP_COLS_PAGE_BARCODE_CHANGE')
  }

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const onFill = useCallback(
    (start, end, data) => {
      setGridData((prevData) => {
        const newGridData = [...prevData]
        for (let row = start[1]; row <= end[1]; row++) {
          for (let col = start[0]; col <= end[0]; col++) {
            const columnKey = cols[col]?.id || ''
            if (!newGridData[row]) newGridData[row] = {}
            newGridData[row][columnKey] = data
          }
        }
        return newGridData
      })
    },
    [cols],
  )

  const handleCheckboxChange = (columnId, isChecked) => {
    if (isChecked) {
      const restoredColumn = defaultCols.find((col) => col.id === columnId)
      setCols((prevCols) => {
        const newCols = [...prevCols, restoredColumn]
        saveToLocalStorageSheet('S_ERP_COLS_BARCODE_CHANGE', newCols)
        return newCols
      })
      setHiddenColumns((prevHidden) => {
        const newHidden = prevHidden.filter((id) => id !== columnId)
        saveToLocalStorageSheet('H_ERP_COLS_BARCODE_CHANGE', newHidden)
        return newHidden
      })
    } else {
      setCols((prevCols) => {
        const newCols = prevCols.filter((col) => col.id !== columnId)
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_BARCODE_CHANGE', newCols)
        return newCols
      })
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId]
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_BARCODE_CHANGE', newHidden)
        return newHidden
      })
    }
  }
  const onColumnMoved = useCallback((startIndex, endIndex) => {
    setCols((prevCols) => {
      const updatedCols = [...prevCols]
      const [movedColumn] = updatedCols.splice(startIndex, 1)
      updatedCols.splice(endIndex, 0, movedColumn)
      return updatedCols
    })
  }, [])

  const onCellClicked = (cell) => {
    const [colIndex, rowIndex] = cell

    if (colIndex !== -1 && rowIndex === undefined) {
      return
    }

    if (colIndex === -1) {
      setIsMinusClicked(true)
    } else {
      setIsMinusClicked(false)
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === colIndex &&
      lastClickedCell[1] === rowIndex
    ) {
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    setLastClickedCell(cell)

    if (rowIndex >= 0 && rowIndex < gridData.length) {
      const rowData = gridData[rowIndex]
      setClickedRowData(rowData)
    }
  }

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <DataEditor
          ref={gridRef}
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

          onColumnMoved={onColumnMoved}
          showSearch={showSearch}
          onSearchClose={onSearchClose}
          onHeaderMenuClick={onHeaderMenuClick}
          freezeColumns="0"
        />

        {showMenu !== null &&
          renderLayer(
            <div
              {...layerProps}
              className="border  w-72 rounded-lg bg-white shadow-lg cursor-pointer"
            >
              {showMenu.menuType === 'statusMenu' ? (
                <LayoutStatusMenuSheet
                  showMenu={showMenu}
                  handleSort={handleSort}
                  cols={cols}
                  renderLayer={renderLayer}
                  setShowSearch={setShowSearch}
                  setShowMenu={setShowMenu}
                  layerProps={layerProps}
                  handleReset={handleReset}
                  showDrawer={showDrawer}
                />
              ) : (
                <LayoutMenuSheet
                  showMenu={showMenu}
                  handleSort={handleSort}
                  handleHideColumn={handleHideColumn}
                  cols={cols}
                  renderLayer={renderLayer}
                  setShowSearch={setShowSearch}
                  setShowMenu={setShowMenu}
                  layerProps={layerProps}
                />
              )}
            </div>,
          )}

        <Drawer title="CÀI ĐẶT SHEET" onClose={onClose} open={open}>
          {defaultCols.map(
            (col) =>
              col.id !== 'Status' && (
                <div key={col.id} style={{ marginBottom: '10px' }}>
                  <Checkbox
                    checked={!hiddenColumns.includes(col.id)}
                    onChange={(e) =>
                      handleCheckboxChange(col.id, e.target.checked)
                    }
                  >
                    {col.title}
                  </Checkbox>
                </div>
              ),
          )}
        </Drawer>
      </div>
    </div>
  )
}

export default TabelBarcodeChange
