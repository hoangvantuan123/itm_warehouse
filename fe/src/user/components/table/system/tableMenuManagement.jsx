import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid';
import { TableOutlined } from '@ant-design/icons';
import { useLayer } from 'react-laag';
import { onRowAppended } from '../../sheet/onRowAppended';
import LayoutMenuSheet from '../../sheet/layoutMenu';
import LayoutStatusMenuSheet from '../../sheet/layoutStatusMenu';
import { Drawer, Checkbox } from 'antd';
import { saveToLocalStorageSheet } from '../../../../localStorage/sheet/sheet';
import { loadFromLocalStorageSheet } from '../../../../localStorage/sheet/sheet';


const defaultCols = [
  { title: '#', id: 'Status', kind: 'Text', readonly: true, width: 50, hasMenu: true },
  { title: 'Menu Root ID', id: 'MenuRootId', kind: 'Text', readonly: false, width: 200, hasMenu: true },
  { title: 'Menu Sub Root ID', id: 'MenuSubRootId', kind: 'Text', readonly: false, width: 250, hasMenu: true },
  { title: 'Key', id: 'Key', kind: 'Text', readonly: false, width: 250, hasMenu: true },
  { title: 'Label', id: 'Label', kind: 'Text', readonly: false, width: 250, hasMenu: true },
  { title: 'Link', id: 'Link', kind: 'Text', readonly: false, width: 250, hasMenu: true },
  { title: 'Type', id: 'Type', kind: 'Text', readonly: false, width: 250, hasMenu: true },
];

function TableMenuManagement({
  data,
  onCellClicked,
  setSelection,
  selection,
  setShowSearch,
  showSearch,
  setAddedRows,
  addedRows,
  setEditedRows,
  editedRows,
  setNumRowsToAdd, numRowsToAdd, clickCount
}) {
  const [gridData, setGridData] = useState([]);
  const gridRef = useRef(null);
  const [numRows, setNumRows] = useState(0);
  const [open, setOpen] = useState(false);
  const [cols, setCols] = useState(() =>
    loadFromLocalStorageSheet("S_ERP_COLS_PAGE_MENU", defaultCols)
  );
  const onSearchClose = useCallback(() => setShowSearch(false), []);
  const [showMenu, setShowMenu] = useState(null);
  const [hiddenColumns, setHiddenColumns] = useState(loadFromLocalStorageSheet("H_ERP_COLS_PAGE_MENU", []));

  const onHeaderMenuClick = useCallback((col, bounds) => {
    if (cols[col]?.id === 'Status') {
      setShowMenu({
        col,
        bounds,
        menuType: 'statusMenu',
      });
    } else {
      setShowMenu({
        col,
        bounds,
        menuType: 'defaultMenu',
      });
    }
  }, []);

  const [highlightRegions, setHighlightRegions] = useState([]);


  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      setGridData(data);
      setNumRows(data.length);
    }
  }, [data]);

  const getData = useCallback(
    ([col, row]) => {
      const person = gridData[row] || {};
      const columnKey = cols[col]?.id || '';
      const value = person[columnKey] || '';
      const column = cols[col];
      return {
        kind: GridCellKind.Text,
        data: value,
        displayData: String(value),
        readonly: column?.readonly || false,
        allowOverlay: true,
        hasMenu: column?.hasMenu || false,
      };
    },
    [gridData, cols]
  );

  const onFill = useCallback(
    (start, end, data) => {
      setGridData((prevData) => {
        const newGridData = [...prevData];
        for (let row = start[1]; row <= end[1]; row++) {
          for (let col = start[0]; col <= end[0]; col++) {
            const columnKey = cols[col]?.id || '';
            if (!newGridData[row]) newGridData[row] = {};
            newGridData[row][columnKey] = data;
          }
        }
        return newGridData;
      });
    },
    [cols]
  );

  const handleRowAppend = useCallback((numRowsToAdd) => {
    onRowAppended(cols, setGridData, setNumRows, setAddedRows, numRowsToAdd);
  }, [cols, setGridData, setNumRows, setAddedRows, numRowsToAdd]);

  useEffect(() => {
    handleRowAppend(numRowsToAdd);
  }, [numRowsToAdd]);

  const onCellEdited = useCallback(
    (cell, newValue) => {
      console.log('cell' ,cell)
      if (newValue.kind !== GridCellKind.Text) {
        return;
      }

      const indexes = ['Status', 'MenuRootId', 'MenuSubRootId', 'Key', 'Label', 'Link', 'Type'];
      const [col, row] = cell;
      const key = indexes[col];

      setGridData((prevData) => {
        const updatedData = [...prevData];
        if (!updatedData[row]) updatedData[row] = {};

        const currentStatus = updatedData[row]['Status'] || '';

        if (currentStatus === 'A') {
          updatedData[row][key] = newValue.data;
        } else {
          updatedData[row][key] = newValue.data;
          updatedData[row]['Status'] = 'U';
        }

        setEditedRows((prevEditedRows) => {
          const existingIndex = prevEditedRows.findIndex((editedRow) => editedRow.rowIndex === row);
          if (existingIndex === -1) {
            return [
              ...prevEditedRows,
              {
                rowIndex: row,
                updatedRow: updatedData[row],
                status: currentStatus === 'A' ? 'A' : 'U',
              },
            ];
          } else {
            const updatedEditedRows = [...prevEditedRows];
            updatedEditedRows[existingIndex].updatedRow = updatedData[row];
            updatedEditedRows[existingIndex].status = currentStatus === 'A' ? 'A' : 'U';
            return updatedEditedRows;
          }
        });

        return updatedData;
      });
    },
    []
  );


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
    placement: "bottom-start",
    auto: true,
    possiblePlacements: ["bottom-start", "bottom-end"],
  });

  /* TOOLLS */
  const handleSort = (columnId, direction) => {
    setGridData((prevData) => {
      const sortedData = [...prevData].sort((a, b) => {
        if (a[columnId] < b[columnId]) return direction === "asc" ? -1 : 1;
        if (a[columnId] > b[columnId]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      return sortedData;
    });
    setShowMenu(null);
  };

  // Hàm ẩn cột
  const handleHideColumn = (colIndex) => {
    const columnId = cols[colIndex]?.id;
    if (cols.length > 1) {
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId];
        saveToLocalStorageSheet("H_ERP_COLS_PAGE_MENU", newHidden);
        return newHidden;

      });
      setCols((prevCols) => {
        const newCols = prevCols.filter((_, idx) => idx !== colIndex);
        saveToLocalStorageSheet("S_ERP_COLS_PAGE_MENU", newCols);
        return newCols;
      });
      setShowMenu(null);
    }
  };




  const handleReset = () => {
    setCols(defaultCols);
    setHiddenColumns([]);
    localStorage.removeItem("S_ERP_COLS_PAGE_MENU");
    localStorage.removeItem("H_ERP_COLS_PAGE_MENU");
  };


  const onColumnMoved = useCallback((startIndex, endIndex) => {

    setCols((prevCols) => {
      const updatedCols = [...prevCols];
      const [movedColumn] = updatedCols.splice(startIndex, 1);
      updatedCols.splice(endIndex, 0, movedColumn);
      return updatedCols;
    });
  }, []);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const handleCheckboxChange = (columnId, isChecked) => {

    if (isChecked) {
      const restoredColumn = defaultCols.find((col) => col.id === columnId);
      setCols((prevCols) => {
        const newCols = [...prevCols, restoredColumn];
        saveToLocalStorageSheet("S_ERP_COLS_PAGE_MENU", newCols);
        return newCols;
      });
      setHiddenColumns((prevHidden) => {
        const newHidden = prevHidden.filter((id) => id !== columnId);
        saveToLocalStorageSheet("H_ERP_COLS_PAGE_MENU", newHidden);
        return newHidden;
      });
    } else {
      setCols((prevCols) => {
        const newCols = prevCols.filter((col) => col.id !== columnId);
        saveToLocalStorageSheet("S_ERP_COLS_PAGE_MENU", newCols);
        return newCols;
      });
      setHiddenColumns((prevHidden) => {
        const newHidden = [...prevHidden, columnId];
        saveToLocalStorageSheet("H_ERP_COLS_PAGE_MENU", newHidden);
        return newHidden;
      });
    }
  };
  return (
    <div className="w-full gap-1 h-full flex items-center justify-center pb-8">
      <div className="w-full h-full flex flex-col border bg-white rounded-lg overflow-hidden ">
        <h2 className="text-xs border-b font-medium flex items-center gap-2 p-2 text-blue-600 uppercase">
          <TableOutlined />
          DATA SHEET
        </h2>
        <DataEditor
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
            hint: " ",
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
          keybindings={{
            downFill: true,
            rightFill: true,
          }}
          isDraggable={false}
          onRowAppended={() => handleRowAppend(1)}
          smoothScrollY={true}
          smoothScrollX={true}
          onCellEdited={onCellEdited}
          onCellClicked={onCellClicked}
       /*    highlightRegions={[
            {
              color: "#E5E8FF",
              range: {
                x: 1,
                y: 0,
                width: 1,
                height: numRows,
              },
              style: "solid"
            },
            {
              color: "#DEE0F0",
              range: {
                x: 2,
                y: 0,
                width: 1,
                height: numRows,
              },
              style: "solid"
            },
          ]} */
          onColumnResize={onColumnResize}
          onHeaderMenuClick={onHeaderMenuClick}
          onColumnMoved={onColumnMoved}
        />
        {showMenu !== null && renderLayer(

          <div
            {...layerProps}

            className='border  w-72 rounded-lg bg-white shadow-lg cursor-pointer'

          >
            {showMenu.menuType === 'statusMenu' ? (
              <LayoutStatusMenuSheet showMenu={showMenu}
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
          </div>
        )}
        <Drawer title="CÀI ĐẶT SHEET" onClose={onClose} open={open}>
          {defaultCols.map((col) => (
            col.id !== "Status" && (
              <div key={col.id} style={{ marginBottom: "10px" }}>
                <Checkbox
                  checked={!hiddenColumns.includes(col.id)}
                  onChange={(e) => handleCheckboxChange(col.id, e.target.checked)}
                >
                  {col.title}
                </Checkbox>
              </div>
            )
          ))}
        </Drawer>
      </div>
    </div>
  );
}

export default TableMenuManagement;
