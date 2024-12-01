import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
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
import DrawerAddRootMenu from '../../components/drawer/system/addRootMenu'
import TableRootMenuManagement from '../../components/table/system/tableRootMenuManagement'

export default function RootMenuTechnique({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [menus, setMenus] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month'))
  const [toDate, setToDate] = useState(dayjs())
  const [checkedRowKey, setCheckedRowKey] = useState(null)
  const [keyPath, setKeyPath] = useState(null)
  const [checkedPath, setCheckedPath] = useState(false)
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), [])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchDataRootMenus = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllRootMenus()
      setMenus(response.data.data || [])
    } catch (error) {
      setMenus([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataMenus = useMemo(
    () => debounce(fetchDataRootMenus, 100),
    [fetchDataRootMenus],
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
              <RootMenuManagementActions openModal={openModal} />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableRootMenuManagement data={menus} />
          </div>
        </div>
        <DrawerAddRootMenu
          isOpen={isModalOpen}
          menus={menus}
          onClose={closeModal}
          fetchDataRootMenus={fetchDataRootMenus}
        />
      </div>
    </>
  )
}
