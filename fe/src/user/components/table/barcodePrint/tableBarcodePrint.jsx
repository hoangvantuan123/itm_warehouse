import '../../../../static/css/customTabe.css'
import {
  CompactSelection,
  DataEditor,
  GridCellKind,
} from '@glideapps/glide-data-grid'
import '@glideapps/glide-data-grid/dist/index.css'

import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import LayoutStatusMenuSheet from '../../sheet/jsx/layoutStatusMenu'
import LayoutMenuSheet from '../../sheet/jsx/layoutMenu'
import { useLayer } from 'react-laag'
import { loadFromLocalStorageSheet } from '../../../../localStorage/sheet/sheet'
import { saveToLocalStorageSheet } from '../../../../localStorage/sheet/sheet'
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
    id: 'PLANT',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'TRAN_CODE',
    id: 'TRAN_CODE',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'TRAN_SEQ',
    id: 'TRAN_SEQ',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'TRAN_TYPE',
    id: 'TRAN_TYPE',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'VENDOR',
    id: 'VENDOR',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'ITEMCD',
    id: 'ITEMCD',
    kind: GridCellKind.Text,
    readonly: false,
    width: 150,
    hasMenu: true,

  },
  {
    title: 'LOTNO',
    id: 'LOTNO',
    kind: GridCellKind.Text,
    readonly: false,
    width: 250,
    hasMenu: true,
  },

  {
    title: 'QTY',
    id: 'QTY',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
  {
    title: 'REELNO',
    id: 'REELNO',
    kind: GridCellKind.Text,
    readonly: false,
    width: 150,
    hasMenu: true,
  },

  {
    title: 'DATECODE',
    id: 'DATECODE',
    kind: GridCellKind.Text,
    readonly: false,
    width: 150,
    hasMenu: true,
  },
  {
    title: 'DATETIME',
    id: 'DATETIME',
    kind: GridCellKind.Text,
    readonly: false,
    width: 150,
    hasMenu: true,
  },
  {
    title: 'REMARK',
    id: 'REMARK',
    kind: GridCellKind.Text,
    readonly: false,
    width: 250,
    hasMenu: true,
  },
  {
    title: 'USER_ID',
    id: 'USER_ID',
    kind: GridCellKind.Text,
    readonly: false,
    width: 100,
    hasMenu: true,
  },
]

function TableBarcodePrint({
  data,
  setGridData,
  gridData,
  setSelectRow,
  onCellClicked,

  setShowSearch,
  showSearch,
}) {
  const gridRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [cols, setCols] = useState(() =>
    loadFromLocalStorageSheet('S_ERP_COLS_PAGE_BARCODE_PRINT', defaultCols),
  )
  const [hiddenColumns, setHiddenColumns] = useState(
    loadFromLocalStorageSheet('H_ERP_COLS_PAGE_BARCODE_PRINT', []),
  )
  const [showMenu, setShowMenu] = useState(null);

  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })

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
  }, [data, setSelectRow, selection])

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
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_BARCODE_PRINT', newHidden)
        return newHidden
      })
      setCols((prevCols) => {
        const newCols = prevCols.filter((_, idx) => idx !== colIndex)
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_BARCODE_PRINT', newCols)
        return newCols
      })
      setShowMenu(null)
    }
  }

  const handleReset = () => {
    setCols(defaultCols)
    setHiddenColumns([])
    localStorage.removeItem('S_ERP_COLS_PAGE_BARCODE_PRINT')
    localStorage.removeItem('H_ERP_COLS_PAGE_BARCODE_PRINT')
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
        saveToLocalStorageSheet('S_ERP_COLS_BARCODE_PRINT', newCols)
        return newCols
      })
      setHiddenColumns((prevHidden) => {
        const newHidden = prevHidden.filter((id) => id !== columnId)
        saveToLocalStorageSheet('H_ERP_COLS_BARCODE_PRINT', newHidden)
        return newHidden
      })
    } else {
      setCols((prevCols) => {
        const newCols = prevCols.filter((col) => col.id !== columnId)
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_BARCODE_PRINT', newCols)
        return newCols
      })
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId]
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_BARCODE_PRINT', newHidden)
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
          onColumnMoved={onColumnMoved}
          showSearch={showSearch}
          onSearchClose={onSearchClose}
          onGridSelectionChange={setSelection}
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

export default TableBarcodePrint
