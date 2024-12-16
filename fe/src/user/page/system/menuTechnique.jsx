import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import dayjs from 'dayjs'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import MenuManagementActions from '../../components/actions/system/menuManagementActions'
import TableMenuManagement from '../../components/table/system/tableMenuManagement'
import DrawerAddMenu from '../../components/drawer/system/addMenu'
import { GetAllMenus } from '../../../features/system/getMenus'
import { DeleteMenus } from '../../../features/system/deleteMenus'
import { CompactSelection } from '@glideapps/glide-data-grid'
import { filterAndSelectColumnsU } from '../../../utils/filterU'
import { filterAndSelectColumnsA } from '../../../utils/filterA'
import { PostAddMenu } from '../../../features/system/postAddMenu'
import { PostUpdateMenu } from '../../../features/system/postUpdateMenu'
import ModalHelpMenu from '../../components/modal/system/modalHelpMenu'
export default function MenuTechnique({ permissions, isMobile }) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [menus, setMenus] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [showSearch, setShowSearch] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [addedRows, setAddedRows] = useState([]);
  const [editedRows, setEditedRows] = useState([]);
  const [clickedRowData, setClickedRowData] = useState(null)
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [numRowsToAdd, setNumRowsToAdd] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const [inputHelp, setInputHelp] = useState(null)
  const [isCellSelected, setIsCellSelected] = useState(false);
  const fetchDataMenus = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllMenus()
      setMenus(response.data.data || [])
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
  const getSelectedRowIds = () => {
    const selectedRows = selection.rows.items
    let ids = []

    selectedRows.forEach((range) => {
      const start = range[0]
      const end = range[1] - 1

      for (let i = start; i <= end; i++) {
        ids.push(menus[i]?.Id)
      }
    })

    return ids.filter((id) => id !== undefined)
  }
  const handleDeleteDataSheet = useCallback(
    async (e) => {
      const selectedRowIds = getSelectedRowIds()
      if (selectedRowIds.length === 0) {
        message.warning('Vui lòng chọn ít nhất một hàng để xóa.')
        return
      }

      const remainingRows = menus.filter(
        (row) => !selectedRowIds.includes(row.id),
      )

      const response = await DeleteMenus(selectedRowIds)
      if (response.data.success) {
        debouncedFetchDataMenus()
        message.success(response.data.message)
      } else {
        message.error(response.data.message)
      }
    },
    [menus, selection],
  )

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


  const onCellClicked = (cell, event) => {
    if (cell[0] === 1) {
      setIsCellSelected(true);
    } else {
      setIsCellSelected(false);
    }

    let rowIndex;

    if (cell[0] !== -1) {
      return;
    }

    if (cell[0] === -1) {
      rowIndex = cell[1];
      setIsMinusClicked(true);
    } else {
      rowIndex = cell[0];
      setIsMinusClicked(false);
    }

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      setLastClickedCell(null);
      setClickedRowData(null);
      return;
    }

    if (rowIndex >= 0 && rowIndex < menus.length) {
      const rowData = menus[rowIndex];
      setClickedRowData(rowData);
      setLastClickedCell(cell);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isCellSelected) {
        if (
          (event.metaKey && event.shiftKey && event.key === ' ') || 
          (event.ctrlKey && event.shiftKey && event.key === ' ')
        ) {
          setOpenHelp(true)
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCellSelected]);
  


  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === ' ') {
      console.log('Ctrl + Space was pressed during cell editing');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  const handleSaveData = async () => {
    const columnsU = ['Id', 'Key', 'Label', 'Link', 'MenuRootId', 'MenuSubRootId', 'Type'];
    const columnsA = ['Key', 'Label', 'Link', 'MenuRootId', 'MenuSubRootId', 'Type'];

    const resulU = filterAndSelectColumnsU(editedRows, columnsU, 'U');
    const resulA = filterAndSelectColumnsA(addedRows, columnsA, 'A');

    if (isSent) return;
    setIsSent(true);

    if (resulA.length > 0 || resulU.length > 0) {
      const loadingMessage = message.loading("Đang thực hiện lưu dữ liệu...");

      try {
        const promises = [];

        if (resulA.length > 0) {
          promises.push(PostAddMenu(resulA));
        }

        if (resulU.length > 0) {
          promises.push(PostUpdateMenu(resulU));
        }

        await Promise.all(promises);

        loadingMessage();
        setIsLoading(false);
        setIsSent(false);
        setEditedRows([])
        setAddedRows([])
        fetchDataMenus()
        message.success("Lưu dữ liệu thành công!");
      } catch (error) {
        loadingMessage();
        setIsLoading(false);
        setIsSent(false);
        message.error(error.message || "Có lỗi xảy ra khi lưu dữ liệu");
      }
    } else {
      setIsLoading(false);
      setIsSent(false);
      message.warning("Không có dữ liệu để lưu!");
    }
  };
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
              setInputHelp={setInputHelp}
            />
          </div>
        </div>

        <DrawerAddMenu
          isOpen={isModalOpen}
          menus={menus}
          onClose={closeModal}
          fetchDataMenus={fetchDataMenus}
        />
        <ModalHelpMenu openHelp={openHelp} setOpenHelp={setOpenHelp}  inputHelp={inputHelp} setInputHelp={setInputHelp}/>
      </div>
    </>
  )
}
