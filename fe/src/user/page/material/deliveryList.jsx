import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Title, Text } = Typography
import { FilterOutlined } from '@ant-design/icons'
import { ArrowIcon } from '../../components/icons'
const { Header, Content, Footer } = Layout
import 'moment/locale/vi'
import BG from '../../../assets/ItmLogo.png'
import DeliveryActions from '../../components/actions/material/deliveryActions'
import TableDeliveryList from '../../components/table/material/tableDeliveryList'

export default function DeliveryList({ permissions, isMobile }) {
  const { t } = useTranslation()

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
              <DeliveryActions />
            </div>
            <details className="group p-2  [&_summary::-webkit-details-marker]:hidden  bg-white border rounded-lg">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
                  <FilterOutlined />
                  {t('Điều kiện truy vấn')}
                </h2>
                <span className="relative size-5 shrink-0">
                  <ArrowIcon />
                </span>
              </summary>
              <div className="flex p-2 gap-4"></div>
            </details>
          </div>
          <div className="col-start-1 col-end-5 row-start-2 row-end-6 w-full min-h-auto rounded-lg">
            <TableDeliveryList />
          </div>
        </div>
      </div>
    </>
  )
}
