import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { DataEditor, GridCellKind } from '@glideapps/glide-data-grid';
import { Button } from 'antd';
import '@glideapps/glide-data-grid/dist/index.css';
import { useNavigate } from 'react-router-dom';
import { CompactSelection } from '@glideapps/glide-data-grid';
import { TableOutlined } from '@ant-design/icons';
import { useLayer } from 'react-laag';

function TableRootMenuManagement({
  data,
  onCellClicked,
  setSelection,
  selection,
  setShowSearch,
  showSearch,
}) {
  const [gridData, setGridData] = useState([]);
  const gridRef = useRef(null);
  const [numRows, setNumRows] = useState(0);
  const [highlightRegions, setHighlightRegions] = useState([]);
  const [showMenu, setShowMenu] = useState(null);
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [cols, setCols] = useState([
    { title: 'Key', id: 'Key', kind: GridCellKind.Text, readonly: false, width: 150, hasMenu: true },
    { title: 'Label', id: 'Label', kind: GridCellKind.Text, readonly: false, width: 150, hasMenu: true },
    { title: 'Link', id: 'UserId', kind: GridCellKind.Text, readonly: false, width: 150, hasMenu: true },
    { title: 'Icon', id: 'Icon', kind: GridCellKind.Text, readonly: false, width: 150, hasMenu: true },
  ]);

  const onSearchClose = useCallback(() => setShowSearch(false), []);
  
  useEffect(() => {
    // Cập nhật gridData khi nhận được data mới
    if (data && Array.isArray(data) && data.length > 0) {
      setGridData(data);
      setNumRows(data.length); // Cập nhật số dòng cho grid
    }
  }, [data]);

  const getData = useCallback(
    ([col, row]) => {
      const person = gridData[row] || {}; 
      const columnKey = cols[col]?.id || ''; 
      const value = person[columnKey] || ''; 

      return {
        kind: GridCellKind.Text,
        data: value,
        displayData: String(value),
        readonly: false,
        allowOverlay: true,
        hasMenu: true,
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

  const onRowAppended = useCallback(() => {
    const newRow = {};
    cols.forEach((col) => {
      newRow[col.id] = '';
    });
    setGridData((prevData) => [...prevData, newRow]);
    setNumRows((prev) => prev + 1);
  }, [cols]);

  const onCellEdited = useCallback(
    (cell, newValue) => {
      if (newValue.kind !== GridCellKind.Text) return;

      const indexes = ['Key', 'Label', 'Link', 'Icon'];
      const [col, row] = cell;
      const key = indexes[col];

      setGridData((prevData) => {
        const updatedData = [...prevData];
        if (!updatedData[row]) updatedData[row] = {};
        updatedData[row][key] = newValue.data;
        return updatedData;
      });
    },
    []
  );

  const onColumnResize = useCallback(
    (column, newSize) => {
      const index = cols.indexOf(column);
      if (index !== -1) {
        const newCol = {
          ...column,
          width: newSize,
        };
        const newCols = [...cols];
        newCols.splice(index, 1, newCol);
        setCols(newCols);
      }
    },
    [cols]
  );

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

  const handleHideColumn = (colIndex) => {
    const columnId = cols[colIndex]?.id;
    setHiddenColumns((prev) => [...prev, columnId]);
    setCols((prevCols) => prevCols.filter((col, idx) => idx !== colIndex));
    setShowMenu(null);
  };

  const onColumnMoved = useCallback((startIndex, endIndex) => {
    setCols((prevCols) => {
      const updatedCols = [...prevCols];
      const [movedColumn] = updatedCols.splice(startIndex, 1);
      updatedCols.splice(endIndex, 0, movedColumn);
      return updatedCols;
    });
  }, []);

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
          width="100%"
          height="100%"
          rowMarkers={('checkbox-visible', 'both')}
          smoothScrollY={true}
          smoothScrollX={true}
          onCellClicked={onCellClicked}
          rowSelect="multi"
          gridSelection={selection}
          onGridSelectionChange={setSelection}
          trailingRowOptions={{
            hint: 'New row...',
            sticky: true,
            tint: true,
          }}
          freezeColumns="0"
          getRowThemeOverride={(i) => (i % 2 === 0 ? undefined : { bgCell: '#FBFBFB' })}
          onPaste={true}
          fillHandle={true}
          keybindings={{
            downFill: true,
            rightFill: true,
          }}
          isDraggable={false}
          onRowAppended={onRowAppended}
          onCellEdited={onCellEdited}
          onColumnResize={onColumnResize}
          onHeaderMenuClick={onColumnMoved}
          onColumnMoved={onColumnMoved}
        />
        {showMenu !== null &&
          renderLayer(
            <div
              {...layerProps}
              className="border w-64 py-2 rounded-lg bg-white shadow-lg cursor-pointer"
            >
              <ul className="space-y-1">
                <li>
                  <a
                    onClick={() => {
                      setShowSearch(true);
                      setShowMenu(null);
                    }}
                    className="flex items-center gap-2  px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className=" text-[13px] font-medium">Tìm kiếm</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleSort(cols[showMenu.col]?.id, "asc")}
                    className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-[13px] font-medium">Sắp xếp tăng dần</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleSort(cols[showMenu.col]?.id, "desc")}
                    className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-[13px] font-medium">Sắp xếp giảm dần</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => handleHideColumn(showMenu.col)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="text-[13px] font-medium">Ẩn cột</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
      </div>
    </div>
  );
}

export default TableRootMenuManagement;
