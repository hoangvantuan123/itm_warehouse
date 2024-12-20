import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid'
import { TableOutlined } from '@ant-design/icons'
import { useLayer } from 'react-laag'
import { onRowAppended } from '../../sheet/js/onRowAppended'
import LayoutMenuSheet from '../../sheet/jsx/layoutMenu'
import LayoutStatusMenuSheet from '../../sheet/jsx/layoutStatusMenu'
import { Drawer, Checkbox } from 'antd'
import { saveToLocalStorageSheet } from '../../../../localStorage/sheet/sheet'
import { loadFromLocalStorageSheet } from '../../../../localStorage/sheet/sheet'
import ModalHelpMenu from '../../modal/system/modalHelpMenu'
import { reorderColumns } from '../../sheet/js/reorderColumns'
import { SearchRootMenu } from '../../../../features/system/searchRootMenus'
import { SearchMenus } from '../../../../features/system/searchMenus'
import { updateEditedRows } from '../../sheet/js/updateEditedRows'
import { useExtraCells } from '@glideapps/glide-data-grid-cells'
import { AsyncDropdownCellRenderer } from '../../sheet/cells/AsyncDropdownCellRenderer'
import axios from 'axios'

function getProducts() {
  return axios.get('https://dummyjson.com/products')
}
function TableMenuManagement({
  data,
  setSelection,
  selection,
  setShowSearch,
  showSearch,
  setAddedRows,
  setEditedRows,
  numRowsToAdd,
  onSelectRow,
  setOnSelectRow,
  setIsCellSelected,
  setOpenHelp,
  openHelp,
  clickCount,
  setGridData,
  gridData,
  setNumRows,
  numRows,
  handleRowAppend,
  setCols,
  cols,
  defaultCols,
}) {
  const gridRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [inputHelp, setInputHelp] = useState(null)
  const cellProps = useExtraCells()

  const onSearchClose = useCallback(() => setShowSearch(false), [])
  const [showMenu, setShowMenu] = useState(null)
  const [isCell, setIsCell] = useState(null)
  const [hiddenColumns, setHiddenColumns] = useState(
    loadFromLocalStorageSheet('H_ERP_COLS_PAGE_MENU', []),
  )
  const [error1, setError1] = useState(null)
  const [loading1, setLoading1] = useState(false)
  const [previousSearchText, setPreviousSearchText] = useState('')
  const [searchText, setSearchText] = useState('')
  const searchResultsRef = useRef([])
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
  const [brands, setBrands] = useState([])
  const highlightRegions = [
    {
      color: '#e8f0ff',
      range: {
        x: reorderColumns(cols).indexOf('MenuRootId'),
        y: 0,
        width: 1,
        height: numRows,
      },
    },
    {
      color: '#e8f0ff',
      range: {
        x: reorderColumns(cols).indexOf('MenuSubRootId'),
        y: 0,
        width: 1,
        height: numRows,
      },
    },
    {
      color: '#e8f0ff',
      range: {
        x: reorderColumns(cols).indexOf('MenuRootName'),
        y: 0,
        width: 1,
        height: numRows,
      },
    },
    {
      color: '#e8f0ff',
      range: {
        x: reorderColumns(cols).indexOf('MenuSubRootName'),
        y: 0,
        width: 1,
        height: numRows,
      },
    },
  ]
  const [keybindings, setKeybindings] = useState({
    downFill: true,
    rightFill: true,
    selectColumn: false,
  })
  useEffect(() => {
    getProducts().then((res) => {
      if (res.status === 200) {
        const s = new Set(res.data.products.map((prod) => prod.brand))
        setBrands(Array.from(s))
      }
    })
  }, [])

  const getData = useCallback(
    ([col, row]) => {
      const person = gridData[row] || {}
      const column = cols[col]
      const columnKey = column?.id || ''
      const value = person[columnKey] || ''

      if (columnKey === 'Type') {
        return {
          kind: GridCellKind.Custom,
          allowOverlay: true,
          data: {
            kind: 'async-dropdown-cell',
            allowedValues: ['submenu', 'menu'],
            value: value,
          },
          readOnly: false,
        }
      }

      return {
        kind: GridCellKind.Text,
        data: value,
        displayData: String(value),
        readonly: column?.readonly || false,
        allowOverlay: true,
        hasMenu: column?.hasMenu || false,
      }
    },
    [gridData, cols],
  )

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

  useEffect(() => {
    if (!onSelectRow || Object.keys(onSelectRow).length === 0) return

    const [col, row] = isCell

    setGridData((prevData) => {
      const updatedData = [...prevData]
      if (!updatedData[row]) updatedData[row] = {}

      const currentStatus = updatedData[row]['Status'] || ''

      updatedData[row] = {
        ...updatedData[row],
        Key: onSelectRow.Key,
        Label: onSelectRow.Label,
        Link: onSelectRow.Link,
        Type: onSelectRow.Type,
        Status: currentStatus === 'A' ? 'A' : 'U',
      }

      setEditedRows((prevEditedRows) => {
        const existingIndex = prevEditedRows.findIndex(
          (editedRow) => editedRow.rowIndex === row,
        )

        const updatedRowData = {
          rowIndex: row,
          updatedRow: updatedData[row],
          status: currentStatus === 'A' ? 'A' : 'U',
        }

        if (existingIndex === -1) {
          return [...prevEditedRows, updatedRowData]
        } else {
          const updatedEditedRows = [...prevEditedRows]
          updatedEditedRows[existingIndex] = updatedRowData
          return updatedEditedRows
        }
      })

      return updatedData
    })

    setOnSelectRow(null)
  }, [onSelectRow, isCell])

  const onCellClicked = useCallback(
    (cell, event) => {
      const indexes = reorderColumns(cols)
      const [col, row] = event.location
      const menuRootIndex = indexes.indexOf('MenuRootId') + 1
      if (col === menuRootIndex) {
        setIsCellSelected(true)
        setIsCell(cell)
        if (row >= 0 && row < gridData.length) {
          const rowData = gridData[row]
          setInputHelp(rowData?.MenuRootId)
        }
      } else {
        setIsCell(null)
        setIsCellSelected(false)
        setOnSelectRow([])
        setInputHelp(null)
      }
    },
    [cols, gridData],
  )

  const onKeyUp = useCallback(
    (event) => {
      const indexes = reorderColumns(cols)
      const [col, row] = event.location
      const menuRootIndex = indexes.indexOf('MenuRootId') + 1
      if (col === menuRootIndex) {
        setIsCellSelected(true)
        if (row >= 0 && row < gridData.length) {
          const rowData = gridData[row]
          setInputHelp(rowData?.MenuRootId)
        }
      } else {
        setInputHelp(null)
        setIsCellSelected(false)
      }
    },
    [cols, gridData],
  )
  const onCellEdited = useCallback(
    async (cell, newValue) => {
      if (
        newValue.kind !== GridCellKind.Text &&
        newValue.kind !== GridCellKind.Custom
      ) {
        return
      }
      const indexes = reorderColumns(cols)
      const [col, row] = cell
      const key = indexes[col]

      if (key === 'Type') {
        if (newValue.kind === GridCellKind.Custom) {
          setGridData((prev) => {
            const product = prev[row]
            product[cols[col].id] = newValue.data.value
            const currentStatus = product['Status'] || ''
            product['Status'] = currentStatus === 'A' ? 'A' : 'U'

            setEditedRows((prevEditedRows) =>
              updateEditedRows(prevEditedRows, row, prev, currentStatus),
            )
            return [...prev]
          })
          return
        }
      }

      if (key === 'MenuRootId') {
        const searchText = newValue.data.trim().toLowerCase()

        if (searchText !== '') {
          setPreviousSearchText(searchText)
          if (searchText !== previousSearchText) {
            setLoading1(true)
            const searchFields = ['Id']
            try {
              const response = await SearchRootMenu(searchText, searchFields)
              if (response.success) {
                searchResultsRef.current = response.data.data
              }
            } catch (error) {
              setError1(error.message || 'Đã xảy ra lỗi')
              searchResultsRef.current = []
            } finally {
              setLoading1(false)
            }
          }

          const searchResults = searchResultsRef.current

          if (searchResults.length > 0) {
            const result = searchResults[0]

            setGridData((prevData) => {
              const updatedData = [...prevData]
              if (!updatedData[row]) updatedData[row] = {}
              const currentStatus = updatedData[row]['Status'] || ''
              const status = currentStatus === 'A' ? 'A' : 'U'
              updatedData[row] = {
                ...updatedData[row],
                MenuRootId: result.Id,
                MenuRootName: result.Label,
                Status: status,
              }

              setEditedRows((prevEditedRows) =>
                updateEditedRows(prevEditedRows, row, updatedData, status),
              )

              return updatedData
            })
          }
        } else {
          // Xử lý khi giá trị MenuRootId bị xóa
          setGridData((prevData) => {
            const updatedData = [...prevData]
            if (!updatedData[row]) updatedData[row] = {}
            updatedData[row]['MenuRootId'] = ''
            updatedData[row]['MenuRootName'] = ''
            setEditedRows((prevEditedRows) =>
              updateEditedRows(prevEditedRows, row, updatedData, 'U'),
            )

            return updatedData
          })
        }

        return
      }

      if (key === 'MenuRootName') {
        const searchText = newValue.data.trim().toLowerCase()

        setPreviousSearchText(searchText)
        if (searchText !== '') {
          if (searchText !== previousSearchText) {
            setLoading1(true)
            const searchFields = ['Label']
            try {
              const response = await SearchRootMenu(searchText, searchFields)
              if (response.success) {
                searchResultsRef.current = response.data.data
              }
            } catch (error) {
              setError1(error.message || 'Đã xảy ra lỗi')
              searchResultsRef.current = []
            } finally {
              setLoading1(false)
            }
          }

          const searchResults = searchResultsRef.current

          if (searchResults.length > 0) {
            const result = searchResults[0]

            setGridData((prevData) => {
              const updatedData = [...prevData]
              if (!updatedData[row]) updatedData[row] = {}
              const currentStatus = updatedData[row]['Status'] || ''
              const status = currentStatus === 'A' ? 'A' : 'U'
              updatedData[row] = {
                ...updatedData[row],
                MenuRootId: result.Id,
                MenuRootName: result.Label,
                Status: status,
              }

              setEditedRows((prevEditedRows) =>
                updateEditedRows(prevEditedRows, row, updatedData, status),
              )

              return updatedData
            })
          }
        } else {
          setGridData((prevData) => {
            const updatedData = [...prevData]
            if (!updatedData[row]) updatedData[row] = {}
            updatedData[row]['MenuRootId'] = ''
            updatedData[row]['MenuRootName'] = ''

            setEditedRows((prevEditedRows) =>
              updateEditedRows(prevEditedRows, row, updatedData, 'U'),
            )

            return updatedData
          })
        }

        return
      }

      if (key === 'MenuSubRootId') {
        const searchText = newValue.data.trim().toLowerCase()

        if (searchText !== '') {
          setPreviousSearchText(searchText)
          if (searchText !== previousSearchText) {
            setLoading1(true)
            const searchFields = ['Id']
            try {
              const response = await SearchMenus(searchText, searchFields)
              if (response.success) {
                searchResultsRef.current = response.data.data
              }
            } catch (error) {
              setError1(error.message || 'Đã xảy ra lỗi')
              searchResultsRef.current = []
            } finally {
              setLoading1(false)
            }
          }

          const searchResults = searchResultsRef.current

          if (searchResults.length > 0) {
            const result = searchResults[0]

            setGridData((prevData) => {
              const updatedData = [...prevData]
              if (!updatedData[row]) updatedData[row] = {}
              const currentStatus = updatedData[row]['Status'] || ''
              const status = currentStatus === 'A' ? 'A' : 'U'
              updatedData[row] = {
                ...updatedData[row],
                MenuSubRootId: result.Id,
                MenuSubRootName: result.Label,
                Status: status,
              }

              setEditedRows((prevEditedRows) =>
                updateEditedRows(prevEditedRows, row, updatedData, status),
              )

              return updatedData
            })
          }
        } else {
          setGridData((prevData) => {
            const updatedData = [...prevData]
            if (!updatedData[row]) updatedData[row] = {}
            updatedData[row]['MenuSubRootId'] = ''
            updatedData[row]['MenuSubRootName'] = ''

            setEditedRows((prevEditedRows) =>
              updateEditedRows(prevEditedRows, row, updatedData, 'U'),
            )

            return updatedData
          })
        }

        return
      }
      if (key === 'MenuSubRootName') {
        const searchText = newValue.data.trim().toLowerCase()

        setPreviousSearchText(searchText)
        if (searchText !== '') {
          if (searchText !== previousSearchText) {
            setLoading1(true)
            const searchFields = ['Label']
            try {
              const response = await SearchMenus(searchText, searchFields)
              if (response.success) {
                searchResultsRef.current = response.data.data
              }
            } catch (error) {
              setError1(error.message || 'Đã xảy ra lỗi')
              searchResultsRef.current = []
            } finally {
              setLoading1(false)
            }
          }

          const searchResults = searchResultsRef.current

          if (searchResults.length > 0) {
            const result = searchResults[0]

            setGridData((prevData) => {
              const updatedData = [...prevData]
              if (!updatedData[row]) updatedData[row] = {}
              const currentStatus = updatedData[row]['Status'] || ''
              const status = currentStatus === 'A' ? 'A' : 'U'
              updatedData[row] = {
                ...updatedData[row],
                MenuSubRootId: result.Id,
                MenuSubRootName: result.Label,
                Status: status,
              }

              setEditedRows((prevEditedRows) => {
                const existingIndex = prevEditedRows.findIndex(
                  (editedRow) => editedRow.rowIndex === row,
                )

                const updatedRowData = {
                  rowIndex: row,
                  updatedRow: updatedData[row],
                  status: status,
                }

                if (existingIndex === -1) {
                  return [...prevEditedRows, updatedRowData]
                } else {
                  const updatedEditedRows = [...prevEditedRows]
                  updatedEditedRows[existingIndex] = updatedRowData
                  return updatedEditedRows
                }
              })

              return updatedData
            })
          }
        } else {
          setGridData((prevData) => {
            const updatedData = [...prevData]
            if (!updatedData[row]) updatedData[row] = {}
            updatedData[row]['MenuSubRootId'] = ''
            updatedData[row]['MenuSubRootName'] = ''
            setEditedRows((prevEditedRows) => {
              const existingIndex = prevEditedRows.findIndex(
                (editedRow) => editedRow.rowIndex === row,
              )

              const updatedRowData = {
                rowIndex: row,
                updatedRow: updatedData[row],
                status: 'U',
              }

              if (existingIndex === -1) {
                return [...prevEditedRows, updatedRowData]
              } else {
                const updatedEditedRows = [...prevEditedRows]
                updatedEditedRows[existingIndex] = updatedRowData
                return updatedEditedRows
              }
            })

            return updatedData
          })
        }

        return
      }

      setGridData((prevData) => {
        const updatedData = [...prevData]
        if (!updatedData[row]) updatedData[row] = {}

        const currentStatus = updatedData[row]['Status'] || ''
        updatedData[row][key] = newValue.data
        updatedData[row]['Status'] = currentStatus === 'A' ? 'A' : 'U'

        setEditedRows((prevEditedRows) => {
          const existingIndex = prevEditedRows.findIndex(
            (editedRow) => editedRow.rowIndex === row,
          )

          const updatedRowData = {
            rowIndex: row,
            updatedRow: updatedData[row],
            status: currentStatus === 'A' ? 'A' : 'U',
          }

          if (existingIndex === -1) {
            return [...prevEditedRows, updatedRowData]
          } else {
            const updatedEditedRows = [...prevEditedRows]
            updatedEditedRows[existingIndex] = updatedRowData
            return updatedEditedRows
          }
        })

        return updatedData
      })
    },
    [cols, previousSearchText, gridData],
  )

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

  /* TOOLLS */
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

  // Hàm ẩn cột
  const handleHideColumn = (colIndex) => {
    const columnId = cols[colIndex]?.id
    if (cols.length > 1) {
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId]
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_MENU', newHidden)
        return newHidden
      })
      setCols((prevCols) => {
        const newCols = prevCols.filter((_, idx) => idx !== colIndex)
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_MENU', newCols)
        return newCols
      })
      setShowMenu(null)
    }
  }

  const handleReset = () => {
    setCols(defaultCols)
    setHiddenColumns([])
    localStorage.removeItem('S_ERP_COLS_PAGE_MENU')
    localStorage.removeItem('H_ERP_COLS_PAGE_MENU')
  }

  const onColumnMoved = useCallback((startIndex, endIndex) => {
    setCols((prevCols) => {
      const updatedCols = [...prevCols]
      const [movedColumn] = updatedCols.splice(startIndex, 1)
      updatedCols.splice(endIndex, 0, movedColumn)
      saveToLocalStorageSheet('S_ERP_COLS_PAGE_MENU', updatedCols)
      return updatedCols
    })
  }, [])

  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }

  const handleCheckboxChange = (columnId, isChecked) => {
    if (isChecked) {
      const restoredColumn = defaultCols.find((col) => col.id === columnId)
      setCols((prevCols) => {
        const newCols = [...prevCols, restoredColumn]
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_MENU', newCols)
        return newCols
      })
      setHiddenColumns((prevHidden) => {
        const newHidden = prevHidden.filter((id) => id !== columnId)
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_MENU', newHidden)
        return newHidden
      })
    } else {
      setCols((prevCols) => {
        const newCols = prevCols.filter((col) => col.id !== columnId)
        saveToLocalStorageSheet('S_ERP_COLS_PAGE_MENU', newCols)
        return newCols
      })
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId]
        saveToLocalStorageSheet('H_ERP_COLS_PAGE_MENU', newHidden)
        return newHidden
      })
    }
  }

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <h2 className="text-xs border-b font-medium flex items-center gap-2 p-2 text-blue-600 uppercase">
          <TableOutlined />
          DATA SHEET
        </h2>
        <DataEditor
          {...cellProps}
          ref={gridRef}
          columns={cols}
          getCellContent={getData}
          onFill={onFill}
          rows={numRows}
          showSearch={showSearch}
          onSearchClose={onSearchClose}
          rowMarkers="both"
          width="100%"
          height="100%"
          rowSelect="multi"
          gridSelection={selection}
          onGridSelectionChange={setSelection}
          getCellsForSelection={true}
          trailingRowOptions={{
            hint: ' ',
            sticky: true,
            tint: true,
          }}
          freezeColumns="0"
          getRowThemeOverride={(i) =>
            i % 2 === 0
              ? undefined
              : {
                  bgCell: '#FBFBFB',
                }
          }
          onPaste={true}
          fillHandle={true}
          keybindings={keybindings}
          isDraggable={false}
          onRowAppended={() => handleRowAppend(1)}
          smoothScrollY={true}
          smoothScrollX={true}
          onCellEdited={onCellEdited}
          onCellClicked={onCellClicked}
          highlightRegions={highlightRegions}
          onColumnResize={onColumnResize}
          onHeaderMenuClick={onHeaderMenuClick}
          onColumnMoved={onColumnMoved}
          onKeyUp={onKeyUp}
          customRenderers={[AsyncDropdownCellRenderer]}
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
        <ModalHelpMenu
          openHelp={openHelp}
          setOpenHelp={setOpenHelp}
          setInputHelp={setInputHelp}
          inputHelp={inputHelp}
          setOnSelectRow={setOnSelectRow}
        />
      </div>
    </div>
  )
}

export default TableMenuManagement
