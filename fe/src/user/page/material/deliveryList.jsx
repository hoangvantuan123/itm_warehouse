import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
import dayjs from 'dayjs';
import 'moment/locale/vi'
import moment from "moment";
import DeliveryActions from '../../components/actions/material/deliveryActions'
import TableDeliveryList from '../../components/table/material/tableDeliveryList'
import { GetCodeHelp } from '../../../features/codeHelp/getCodeHelp'
import { GetDeliveryList } from '../../../features/material/getDeliveryList'
import DeliveryListQuery from '../../components/query/material/deliveryListQuery'
import { debounce } from 'lodash';

export default function DeliveryList({ permissions, isMobile }) {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [dataUnit, setDataUnit] = useState([])
  const [formData, setFormData] = useState(dayjs().startOf('month'));
  const [toDate, setToDate] = useState(dayjs());
  const [deliveryNo, setDeliveryNo] = useState('')
  const [bizUnit, setBizUnit] = useState(4)


  const formatDate = (date) => {
    return date.format('YYYYMMDD');
  };
  const fetchData = async () => {
    try {
      const [deliveryResponse, codeHelpResponse] = await Promise.all([
        GetDeliveryList(formatDate(formData),
          formatDate(toDate), deliveryNo, bizUnit),
        GetCodeHelp('', 6, 10003, 1, '%', '', '', '', '')
      ]);

      setData(deliveryResponse.data);
      setDataUnit(codeHelpResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };


  const debouncedFetchData = debounce(() => {
    fetchData();
  }, 100);
  
  useEffect(() => {
    setLoading(true);

    debouncedFetchData();
    return () => {
      debouncedFetchData.cancel();
    };
  }, [formData, toDate, deliveryNo, bizUnit]);

  return (
    <>
      <Helmet>
        <title>ITM - {t('Delivery List')}</title>
      </Helmet>

      <div className="bg-slate-50 p-3  h-screen overflow-auto md:h-full md:overflow-hidden">
        <div className="flex  flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-5 md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 row-end-2  w-full min-h-auto rounded-lg">
            <div className="flex item-center mb-2 justify-between">
              <Title level={4} className="mt-2 uppercase opacity-85 ">
                {t('Delivery List')}
              </Title>
              <DeliveryActions fetchData={fetchData} />
            </div>
            <details
              className="group p-2  [&_summary::-webkit-details-marker]:hidden  bg-white border rounded-lg"
              open
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
                  <FilterOutlined />
                  {t('Điều kiện truy vấn')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon  />
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
          <div className="col-start-1 col-end-5 row-start-2 row-end-6 w-full min-h-auto rounded-lg">
            <TableDeliveryList data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
