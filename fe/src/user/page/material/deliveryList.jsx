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
    <Layout className="h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Delivery List')}</title>
      </Helmet>

      <div className="flex flex-col h-full">
        <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">
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
  <div className="flex p-2 gap-4">
    {/* Add any content here */}
  </div>
</details>

        </Header>

        <Content className="flex-grow px-4 h-screen overflow-auto overflow-y-auto bg-slate-50 mt-2">
          <div className="h-full flex flex-col">
            <div className="flex-grow overflow-auto">
              <TableDeliveryList/>
            </div>
          </div>
        </Content>
      </div>
    </Layout>
  )
}
