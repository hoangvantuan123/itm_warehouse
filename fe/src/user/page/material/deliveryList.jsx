import { useState, useCallback, useEffect, useRef , useMemo} from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs'
import DeliveryActions from '../../components/actions/material/deliveryActions'
import TableDeliveryList from '../../components/table/material/tableDeliveryList'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import DeliveryListQuery from '../../components/query/material/deliveryListQuery'
import { debounce } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { encodeBase64Url } from '../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'

export default function DeliveryList({ permissions, isMobile }) {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [dataUnit, setDataUnit] = useState([]);
  const [formData, setFormData] = useState(dayjs().startOf('month'));
  const [toDate, setToDate] = useState(dayjs());
  const [deliveryNo, setDeliveryNo] = useState('');
  const [bizUnit, setBizUnit] = useState(4);
  const [checkedRowKey, setCheckedRowKey] = useState(null);
  const [keyPath, setKeyPath] = useState(null);
  const [checkedPath, setCheckedPath] = useState(false);
  const formatDate = useCallback((date) => date.format('YYYYMMDD'), []);
  const fetchDeliveryData = useCallback(async () => {
    setLoading(true);
    try {
      const deliveryResponse = await GetDeliveryList(
        formatDate(formData),
        formatDate(toDate),
        deliveryNo,
        bizUnit
      );
      setData(deliveryResponse?.data || []);
    } catch (error) {
      console.error('Error fetching delivery data:', error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [formData, toDate, deliveryNo, bizUnit, formatDate]);

  const fetchCodeHelpData = useCallback(async () => {
    setLoading(true);
    try {
      const codeHelpResponse = await GetCodeHelp('', 6, 10003, 1, '%', '', '', '', '');
      setDataUnit(codeHelpResponse?.data || []);
    } catch (error) {
      console.error('Error fetching code help data:', error);
      setDataUnit([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchDeliveryData = useMemo(() => debounce(fetchDeliveryData, 100), [fetchDeliveryData]);
  const debouncedFetchCodeHelpData = useMemo(() => debounce(fetchCodeHelpData, 100), [fetchCodeHelpData]);

  const handleCheck = useCallback((ev) => {
    const { rowKey } = ev;
    const gridInstance = gridRef.current?.getInstance();
    const previousCheckedRowKey = checkedRowKey;

    if (previousCheckedRowKey !== null && gridInstance) {
      gridInstance.uncheck(previousCheckedRowKey);
    }

    const rowData = data[rowKey];
    if (!rowData) {
      console.warn('Invalid row data');
      return;
    }

    const filteredData = {
      DelvNo: rowData.DelvNo,
      DelvMngNo: rowData.DelvMngNo,
      ImpType: rowData.ImpType,
      TotalQty: rowData.TotalQty,
      OkQty: rowData.OkQty,
      RemainQty: rowData.RemainQty,
      DelvDate: rowData.DelvDate,
      CustSeq: rowData.CustSeq,
      CustNm: rowData.CustNm,
      DomOrImp: rowData.DomOrImp,
      PurchaseType: rowData.PurchaseType,
      BizUnitName: rowData.BizUnitName,
      BizUnit: rowData.BizUnit,
      EmpSeq: rowData.EmpSeq,
      EmpName: rowData.EmpName,
      DeptSeq: rowData.DeptSeq,
      DeptName: rowData.DeptName,
      CurrSeq: rowData.CurrSeq,
      CurrName: rowData.CurrName,
      ExRate: rowData.ExRate,
    };

    const secretKey = 'TEST_ACCESS_KEY';
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(filteredData), secretKey).toString();
    const encryptedToken = encodeBase64Url(encryptedData);

    setCheckedRowKey(rowKey);
    setKeyPath(encryptedToken);
  }, [checkedRowKey, data]);

  const nextPageStockIn = useCallback(() => {
    if (keyPath && !checkedPath) {
      setCheckedPath(true);
      navigate(`/u/warehouse/material/waiting-iqc-stock-in/${keyPath}`);
    }
  }, [keyPath, checkedPath, navigate]);

  useEffect(() => {
    debouncedFetchDeliveryData();
    return () => {
      debouncedFetchDeliveryData.cancel();
    };
  }, [debouncedFetchDeliveryData]);

  useEffect(() => {
    debouncedFetchCodeHelpData();
    return () => {
      debouncedFetchCodeHelpData.cancel();
    };
  }, [debouncedFetchCodeHelpData]);
  return (
    <>
      <Helmet>
        <title>ITM - {t('Delivery List')}</title>
      </Helmet>
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Delivery List')}
              </Title>
              <DeliveryActions
                fetchData={fetchDeliveryData}
                nextPageStockIn={nextPageStockIn}
              />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
              open
            >
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
                <DeliveryListQuery
                  formData={formData}
                  setFormData={setFormData}
                  setDeliveryNo={setDeliveryNo}
                  setToDate={setToDate}
                  toDate={toDate}
                  deliveryNo={deliveryNo}
                  bizUnit={bizUnit}
                  setBizUnit={setBizUnit}
                  dataUnit={dataUnit}
                />
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableDeliveryList
              data={data}
              setCheckedPath={setCheckedPath}
              checkedPath={checkedPath}
              setKeyPath={setKeyPath}
              loading={loading}
              handleCheck={handleCheck}
              gridRef={gridRef}
            />
          </div>
        </div>
      </div>
    </>
  )
}
