import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Input, Space, Table, Typography, message, Button, Layout } from 'antd';
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
import 'moment/locale/vi';
import StockOutRequestAction from "../../components/actions/material/stockOutRequestAction";
import TableStockOutRequest from '../../components/table/material/tableStockOutRequest';

export default function StockOutRequest({ permissions, isMobile }) {


    const { t } = useTranslation();

    return (
        <Layout className="h-screen bg-slate-50">
            <Helmet>
                <title>ITM - {t('STOCK OUT REQUEST')}</title>
            </Helmet>

            <div className="flex flex-col h-full ">
                <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">
                    <Title level={5} className="mt-2 uppercase">
                        {t('STOCK OUT REQUEST')}
                    </Title>
                    <StockOutRequestAction />
                </Header>

                <Content className="flex-grow px-4  bg-slate-50">
                <div className="h-full flex flex-col">
                    <div className="flex-grow">
                        <TableStockOutRequest />
                    </div>
                </div>
            </Content>
            </div>

            
        </Layout>
    );
}