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
import RoleManagementActions from '../../components/actions/system/roleManagementActions'
import DrawerAddUserGroups from '../../components/drawer/system/addUserGroups'
import { GetAllResGroups } from '../../../features/system/getGroups'
import ViewRoleManagement from '../../components/view/system/viewRoleManagement'

export default function RoleManagement({ permissions, isMobile }) {
  const { t } = useTranslation()
  const gridRef = useRef(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [dataUnit, setDataUnit] = useState([])
  const [groups, setGroups] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month'))
  const [toDate, setToDate] = useState(dayjs())
  const [deliveryNo, setDeliveryNo] = useState('')
  const [bizUnit, setBizUnit] = useState(4)
  const [checkedRowKey, setCheckedRowKey] = useState(null)
  const [keyPath, setKeyPath] = useState(null)
  const [checkedPath, setCheckedPath] = useState(false)
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), [])
  const [isModalOpenAddUserGroups, setIsModalOpenAddUserGroups] =
    useState(false)

  const fetchDataGroups = useCallback(async () => {
    setLoading(true)
    try {
      const response = await GetAllResGroups()
      setGroups(response.data.data || [])
    } catch (error) {
      setGroups([])
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedFetchDataGroups = useMemo(
    () => debounce(fetchDataGroups, 100),
    [fetchDataGroups],
  )

  useEffect(() => {
    debouncedFetchDataGroups()
    return () => {
      debouncedFetchDataGroups.cancel()
    }
  }, [debouncedFetchDataGroups])

  const openModalAddUserGroups = () => {
    setIsModalOpenAddUserGroups(true)
  }
  const closeModalAddUserGroups = () => {
    setIsModalOpenAddUserGroups(false)
  }

  return (
    <>
      <Helmet>
        <title>ITM - {t('Role Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Role Management')}
              </Title>
              <RoleManagementActions
                fetchDataGroups={fetchDataGroups}
                openModalAddUserGroups={openModalAddUserGroups}
              />
            </div>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <ViewRoleManagement
              data={data}
              loading={loading}
              gridRef={gridRef}
              setData={setData}
              groups={groups}
            />
          </div>
        </div>

        <DrawerAddUserGroups
          isOpen={isModalOpenAddUserGroups}
          onClose={closeModalAddUserGroups}
          fetchDataGroups={fetchDataGroups}
        />
      </div>
    </>
  )
}
