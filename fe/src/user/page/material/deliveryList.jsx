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

export default function DeliveryList({permissions, isMobile}) {
    const { t } = useTranslation()

    return (
        <Layout className="h-screen  bg-slate-50">
            <Helmet>
                <title>ITM - {t('Delivery List')}</title>
            </Helmet>

            <div className="h-[calc(100vh-100px)] overflow-auto">
            <Header className=" bg-slate-50  px-4 h-auto">
                <Title level={5} className="mt-2 uppercase">
                    {t('Delivery List')}
                </Title>
                <DeliveryActions/>
            </Header>

            <Content className="flex flex-col  h-auto justify-center items-center bg-slate-50 px-4">
               
               
            </Content>

            <Footer className="text-center h-auto bg-slate-50">
                <Text className="text-base">
                    ITM SEMICONDUCTOR CO.,LTD  ©2024
                </Text>
            </Footer>
            </div>
          
        </Layout>
    )
}