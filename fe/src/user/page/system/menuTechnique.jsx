import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { debounce } from 'lodash'
import MenuManagementActions from '../../components/actions/system/menuManagementActions'
import TableMenuManagement from '../../components/table/system/tableMenuManagement'
import DrawerAddMenu from '../../components/drawer/system/addMenu'
import { GetAllMenus } from '../../../features/system/getMenus'
import { DeleteMenus } from '../../../features/system/deleteMenus'
import { CompactSelection } from '@glideapps/glide-data-grid'
import { filterAndSelectColumns } from '../../../utils/filterUorA'
import { PostAddMenu } from '../../../features/system/postAddMenu'
import { PostUpdateMenu } from '../../../features/system/postUpdateMenu'
import useKeydownHandler from '../../components/hooks/sheet/useKeydownHandler'
import { loadFromLocalStorageSheet } from '../../../localStorage/sheet/sheet'
import { onRowAppended } from '../../components/sheet/js/onRowAppended'
const defaultCols = [
  {
    title: '#',
    id: 'Status',
    kind: 'Text',
    readonly: true,
    width: 50,
    hasMenu: true,
  },
  {
    title: 'Menu Root ID',
    id: 'MenuRootId',
    kind: 'Text',
    readonly: false,
    width: 200,
    hasMenu: true,
  },
  {
    title: 'MenuRootName',
    id: 'MenuRootName',
    kind: 'Text',
    readonly: false,
    width: 200,
    hasMenu: true,
  },
  {
    title: 'MenuSubRootName',
    id: 'MenuSubRootName',
    kind: 'Text',
    readonly: false,
    width: 200,
    hasMenu: true,
  },
  {
    title: 'Menu Sub Root ID',
    id: 'MenuSubRootId',
    kind: 'Text',
    readonly: false,
    width: 250,
    hasMenu: true,
  },
  {
    title: 'Key',
    id: 'Key',
    kind: 'Text',
    readonly: false,
    width: 250,
    hasMenu: true,
  },
  {
    title: 'Label',
    id: 'Label',
    kind: 'Text',
    readonly: false,
    width: 250,
    hasMenu: true,
  },
  {
    title: 'Link',
    id: 'Link',
    kind: 'Text',
    readonly: false,
    width: 250,
    hasMenu: true,
  },
  {
    title: 'Type',
    id: 'Type',
    kind: 'Text',
    readonly: false,
    width: 250,
    hasMenu: true,
  },
]
export default function MenuTechnique({ permissions, isMobile }) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [menus, setMenus] = useState([])
  const [gridData, setGridData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [showSearch, setShowSearch] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [addedRows, setAddedRows] = useState([])

  const [editedRows, setEditedRows] = useState([])
  const [clickedRowData, setClickedRowData] = useState(null)
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [numRowsToAdd, setNumRowsToAdd] = useState(null)
  const [numRows, setNumRows] = useState(0)
  const [clickCount, setClickCount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  const [isCellSelected, setIsCellSelected] = useState(false)
  const [isCell, setIsCell] = useState(null)
  const [onSelectRow, setOnSelectRow] = useState([])
  const [keySelectColumn, setKeySelectColumn] = useState(false)
  const [cols, setCols] = useState(() =>
    loadFromLocalStorageSheet('S_ERP_COLS_PAGE_MENU', defaultCols),
  )

  const fetchDataMenus = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllMenus()
      setGridData(response.data.data)
      setNumRows(response.data.data.length)
    } catch (error) {
      setMenus([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataMenus = useMemo(
    () => debounce(fetchDataMenus, 100),
    [fetchDataMenus],
  )

  useEffect(() => {
    debouncedFetchDataMenus()
    return () => {
      debouncedFetchDataMenus.cancel()
    }
  }, [debouncedFetchDataMenus])

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const getSelectedRows = () => {
    const selectedRows = selection.rows.items
    let rows = []
    selectedRows.forEach((range) => {
      const start = range[0]
      const end = range[1] - 1

      for (let i = start; i <= end; i++) {
        if (gridData[i]) {
          rows.push(gridData[i])
        }
      }
    })

    return rows
  }

  const handleRowAppend = useCallback(
    (numRowsToAdd) => {
      onRowAppended(cols, setGridData, setNumRows, setAddedRows, numRowsToAdd)
    },
    [cols, setGridData, setNumRows, setAddedRows, numRowsToAdd],
  )

  /*   const handleDeleteDataSheet = useCallback(
      (e) => {
        const selectedRows = getSelectedRows()
  
        const idsWithStatusD = selectedRows
          .filter(
            (row) => !row.Status || row.Status === 'U' || row.Status === 'D',
          )
          .map((row) => {
            row.Status = 'D'
            return row.Id
          })
  
        const rowsWithStatusA = selectedRows.filter((row) => row.Status === 'A')
  
        if (idsWithStatusD.length > 0) {
          DeleteMenus(idsWithStatusD)
            .then((response) => {
              if (response.data.success) {
                const remainingRows = gridData.filter(
                  (row) => !idsWithStatusD.includes(row.Id),
                )
                setGridData(remainingRows)
                setNumRows(remainingRows.length)
              } else {
                message.error(response.data.message || 'Xóa thất bại!')
              }
            })
            .catch((error) => {
              message.error('Có lỗi xảy ra khi xóa!')
            })
        }
  
        if (rowsWithStatusA.length > 0) {
          const idsWithStatusA = rowsWithStatusA.map((row) => row.Id)
  
          const remainingRows = gridData.filter(
            (row) => !idsWithStatusA.includes(row.Id),
          )
          setGridData(remainingRows)
          setNumRows(remainingRows.length)
        }
      },
      [gridData, selection],
    ) */



  const handleDeleteDataSheet = useCallback(
    (e) => {
      const selectedRows = getSelectedRows();

      const idsWithStatusD = selectedRows
        .filter(
          (row) => !row.Status || row.Status === 'U' || row.Status === 'D',
        )
        .map((row) => {
          row.Status = 'D';
          return row.Id;
        });

      const idsWithStatusA = selectedRows
        .filter((row) => row.Status === 'A')
        .map((row) => row.Id);

      const allIdsToDelete = [...idsWithStatusD, ...idsWithStatusA];

      if (allIdsToDelete.length > 0) {
        DeleteMenus(allIdsToDelete)
          .then((response) => {
            if (response.data.success) {
              const remainingRows = gridData.filter(
                (row) => !allIdsToDelete.includes(row.Id),
              );
              setGridData(remainingRows);
              setNumRows(remainingRows.length);
            } else {
              message.error(response.data.message || 'Xóa thất bại!');
            }
          })
          .catch((error) => {
            message.error('Có lỗi xảy ra khi xóa!');
          });
      }
    },
    [gridData, selection],
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault()
        setShowSearch(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  /* HOOKS KEY */
  useKeydownHandler(isCellSelected, setOpenHelp)

  const onCellClicked = (cell, event) => {
    if (cell.length >= 2 && cell[0] === 1) {
      setIsCellSelected(true)
    } else {
      setIsCellSelected(false)
      setIsMinusClicked(false)
      setLastClickedCell(null)
      setClickedRowData(null)
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      setIsCellSelected(false)
      setIsMinusClicked(false)
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    let rowIndex

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

    if (rowIndex >= 0 && rowIndex < menus.length) {
      const rowData = menus[rowIndex]
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
  }

  const handleSaveData = async () => {
    const columnsU = [
      'Id',
      'Key',
      'Label',
      'Link',
      'MenuRootId',
      'MenuSubRootId',
      'Type',
    ]
    const columnsA = [
      'Key',
      'Label',
      'Link',
      'MenuRootId',
      'MenuSubRootId',
      'Type',
    ]

    const resulU = filterAndSelectColumns(editedRows, columnsU, 'U')
    const resulA = filterAndSelectColumns(editedRows, columnsA, 'A')

    if (isSent) return
    setIsSent(true)

    if (resulA.length > 0 || resulU.length > 0) {
      const loadingMessage = message.loading('Đang thực hiện lưu dữ liệu...')

      try {
        const promises = []

        if (resulA.length > 0) {
          promises.push(PostAddMenu(resulA))
        }

        if (resulU.length > 0) {
          promises.push(PostUpdateMenu(resulU))
        }

        await Promise.all(promises)

        loadingMessage()
        setIsLoading(false)
        setIsSent(false)
        setEditedRows([])
        setAddedRows([])
        fetchDataMenus()
        message.success('Lưu dữ liệu thành công!')
      } catch (error) {
        loadingMessage()
        setIsLoading(false)
        setIsSent(false)
        message.error(error.message || 'Có lỗi xảy ra khi lưu dữ liệu')
      }
    } else {
      setIsLoading(false)
      setIsSent(false)
      message.warning('Không có dữ liệu để lưu!')
    }
  }

  return (
    <>
      <Helmet>
        <title>ITM - {t('Menu Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Menu Management')}
              </Title>
              <MenuManagementActions
                fetchDataMenus={fetchDataMenus}
                openModal={openModal}
                handleDeleteDataSheet={handleDeleteDataSheet}
                data={menus}
                handleSaveData={handleSaveData}
                setNumRowsToAdd={setNumRowsToAdd}
                numRowsToAdd={numRowsToAdd}
                setClickCount={setClickCount}
                clickCount={clickCount}
                handleRowAppend={handleRowAppend}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableMenuManagement
              data={menus}
              onCellClicked={onCellClicked}
              setSelection={setSelection}
              selection={selection}
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              setAddedRows={setAddedRows}
              addedRows={addedRows}
              setEditedRows={setEditedRows}
              editedRows={editedRows}
              setNumRowsToAdd={setNumRowsToAdd}
              clickCount={clickCount}
              numRowsToAdd={numRowsToAdd}
              numRows={numRows}
              onSelectRow={onSelectRow}
              openHelp={openHelp}
              setOpenHelp={setOpenHelp}
              setOnSelectRow={setOnSelectRow}
              setIsCellSelected={setIsCellSelected}
              isCellSelected={isCellSelected}
              setGridData={setGridData}
              gridData={gridData}
              setNumRows={setNumRows}
              setCols={setCols}
              handleRowAppend={handleRowAppend}
              cols={cols}
              defaultCols={defaultCols}
            />
          </div>
        </div>

        <DrawerAddMenu
          isOpen={isModalOpen}
          menus={menus}
          onClose={closeModal}
          fetchDataMenus={fetchDataMenus}
        />
      </div>
    </>
  )
}
