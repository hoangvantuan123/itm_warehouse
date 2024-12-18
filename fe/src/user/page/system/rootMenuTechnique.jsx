import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'

import dayjs from 'dayjs'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import UserManagementQuery from '../../components/query/system/userManagementQuery'
import ViewRoleManagement from '../../components/view/system/viewRoleManagement'
import { GetAllRootMenus } from '../../../features/system/getRootMenu'
import RootMenuManagementActions from '../../components/actions/system/rootMenuManagementActions'
import TableRootMenuManagement from '../../components/table/system/tableRootMenuManagement'
import { DeleteRootMenus } from '../../../features/system/deleteRootMenus'
import { CompactSelection } from '@glideapps/glide-data-grid'
import { PostUpdateRootMenu } from '../../../features/system/postUpdateRootMenu'
import { PostAddRootMenu } from '../../../features/system/postAddRootMenu'
import { filterAndSelectColumns } from '../../../utils/filterUorA'
export default function RootMenuTechnique({ permissions, isMobile }) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [menus, setMenus] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clickedRowData, setClickedRowData] = useState(null)
  const [isMinusClicked, setIsMinusClicked] = useState(false)
  const [lastClickedCell, setLastClickedCell] = useState(null)
  const [addedRows, setAddedRows] = useState([])
  const [editedRows, setEditedRows] = useState([])
  const [selection, setSelection] = useState({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty(),
  })
  const [numRowsToAdd, setNumRowsToAdd] = useState(null)
  const [clickCount, setClickCount] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const fetchDataRootMenus = async () => {
    setLoading(true)
    try {
      const response = await GetAllRootMenus()
      setMenus(response.data.data)
    } catch (error) {
      setMenus([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDataRootMenus()
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onCellClicked = (cell, event) => {
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

    if (
      lastClickedCell &&
      lastClickedCell[0] === cell[0] &&
      lastClickedCell[1] === cell[1]
    ) {
      setLastClickedCell(null)
      setClickedRowData(null)
      return
    }

    if (rowIndex >= 0 && rowIndex < menus.length) {
      const rowData = menus[rowIndex]
      setClickedRowData(rowData)
      setLastClickedCell(cell)
    }
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

      const response = await DeleteRootMenus(selectedRowIds)

      if (response.data.success) {
        fetchDataRootMenus()
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

  const handleSaveData = async () => {
    const columnsU = ['Id', 'Key', 'Label', 'Link', 'Icon']
    const columnsA = ['Key', 'Label', 'Link', 'Icon']

    const resulU = filterAndSelectColumns(editedRows, columnsU, 'U')
    const resulA = filterAndSelectColumns(editedRows, columnsA, 'A')

    if (isSent) return
    setIsSent(true)

    if (resulA.length > 0 || resulU.length > 0) {
      const loadingMessage = message.loading('Đang thực hiện lưu dữ liệu...')

      try {
        const promises = []

        if (resulA.length > 0) {
          promises.push(PostAddRootMenu(resulA))
        }

        if (resulU.length > 0) {
          promises.push(PostUpdateRootMenu(resulU))
        }

        await Promise.all(promises)

        loadingMessage()
        setIsLoading(false)
        setIsSent(false)
        setEditedRows([])
        setAddedRows([])
        fetchDataRootMenus()
        message.success('Lưu dữ liệu thành công!')
      } catch (error) {
        loadingMessage()
        setIsLoading(false)
        setIsSent(false)
        setErrorMessage(error.message || 'Có lỗi xảy ra')
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
        <title>ITM - {t('Root Menu Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Root Menu Management')}
              </Title>
              <RootMenuManagementActions
                openModal={openModal}
                handleDeleteDataSheet={handleDeleteDataSheet}
                data={menus}
                handleSaveData={handleSaveData}
                setNumRowsToAdd={setNumRowsToAdd}
                setClickCount={setClickCount}
                numRowsToAdd={numRowsToAdd}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableRootMenuManagement
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
            />
          </div>
        </div>
      </div>
    </>
  )
}
