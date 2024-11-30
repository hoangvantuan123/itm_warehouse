import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetSysttemUsersList } from '../../../features/system/getRolesUsers'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'
import UserManagementActions from '../../components/actions/system/userManagementActions'
import TableUserManagement from '../../components/table/system/tableUserManagement'
import UserManagementQuery from '../../components/query/system/userManagementQuery'


export default function UserManagement({ permissions, isMobile }) {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const navigate = useNavigate();
  const [test, setTest] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(dayjs().startOf('month'));
  const [toDate, setToDate] = useState(dayjs());
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userIdSearch, setUserIdSearch] = useState('');
  const [userNameSearch, setUserNameSearch] = useState('');
  const [checkedRowKey, setCheckedRowKey] = useState(null);
  const [keyPath, setKeyPath] = useState(null);
  const [checkedPath, setCheckedPath] = useState(false);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const formatDate = useCallback((date) => date.format('YYYYMMDD'), []);

  const fetchSystemUsersData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await GetSysttemUsersList(userId, userName);
      setData(response?.data || []);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchDeliveryData = useMemo(() => debounce(fetchSystemUsersData, 100), [fetchSystemUsersData]);
  const handleSearch = () => {
    setSearchTriggered(true);
    fetchSystemUsersData()
  };


  const handleCheck = useCallback((ev) => {
    /*   const { rowKey } = ev;
      const gridInstance = gridRef.current?.getInstance();
      const previousCheckedRowKey = checkedRowKey;
  
      if (previousCheckedRowKey !== null && gridInstance) {
        gridInstance.uncheck(previousCheckedRowKey);
      }
  
      const rowData = data[rowKey];
      setCheckedRowKey(rowKey);
  
      navigate(`/u/system_settings/users/user-management/profile/${rowData?.UserId}/${rowData?.UserName}`); */
  }, [checkedRowKey, data]);

  

  return (
    <>
      <Helmet>
        <title>ITM - {t('User Management')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('USER MANAGEMENT')}
              </Title>
              <UserManagementActions handleSearch={handleSearch} />
            </div>
            <details className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white" open>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
                  <FilterOutlined />
                  {t('Điều kiện truy vấn')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>


              <div className="flex p-2 gap-4">
                <UserManagementQuery setUserId={setUserId} userId={userId} setUserName={setUserName} userName={userName} />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg overflow-auto">
            <TableUserManagement
              data={data}
              setCheckedPath={setCheckedPath}
              checkedPath={checkedPath}
              setKeyPath={setKeyPath}
              loading={loading}
              handleCheck={handleCheck}
              gridRef={gridRef}
              setData={setData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
