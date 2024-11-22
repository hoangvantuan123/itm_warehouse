import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs, Layout } from 'antd'
const { Search } = Input
const { Title, Text } = Typography
const { TabPane } = Tabs
const { Header, Content, Footer } = Layout
import 'moment/locale/vi'
import BG from '../../../assets/ItmLogo.png'
import DeliveryActions from '../../components/actions/material/deliveryActions'
import TableWaitingIqcStockIn from '../../components/table/material/tableWaitingIqcStockIn'

export default function DeliveryList({ permissions, isMobile }) {
    const { t } = useTranslation();

    return (
        <Layout className="h-screen bg-slate-50">
            <Helmet>
                <title>ITM - {t('Delivery List')}</title>
            </Helmet>

            <div className="flex flex-col h-[calc(100vh-20px)]">
                <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">
                    <Title level={5} className="mt-2 uppercase">
                        {t('Delivery List')}
                    </Title>
                    <DeliveryActions />
                </Header>

                <Content className="flex-grow px-4  bg-slate-50">
                    <div className="h-full flex flex-col">
                        <div className="flex-grow">
                            <TableWaitingIqcStockIn />
                        </div>
                    </div>
                </Content>
            </div>
        </Layout>
    );
}
