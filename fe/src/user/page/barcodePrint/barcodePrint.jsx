import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import BarcodePrintAction from '../../components/actions/barcodePrint/barcocePrintAction';
import TableBarcodePrint from '../../components/table/barcodePrint/tableBarcodePrint';
import { useEffect, useMemo, useState } from 'react';
import { getPageMat } from '../../../services/printBarcodeService';

export default function BarcodePrint({ permissions, isMobile }) {

    const [data, setData] = useState([]);
    const { t } = useTranslation();

    const [dataInfo, setDataInfo] = useState([]);

    const [rowChecked, setRowChecked] = useState([]);


    const onHandleData = function setDataHandle(varData) {
        setData(varData);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPageMat();
            setData(response?.data);
        };

        fetchData();
    }, []);

    const btnSearch = async () => {
        const resData = await getPageMat();
        setData(resData?.data)

    }

    const handleSeclecData = function setSelectData(ev) {

        setRowChecked(null);
        const gridInstance = ev.instance;

        const scrollTop = gridInstance.el.scrollTop;
        const scrollLeft = gridInstance.el.scrollLeft;

        const checkedRows = gridInstance.getCheckedRows();
        setRowChecked(checkedRows);

        setTimeout(() => {
            gridInstance.el.scrollTop = scrollTop;
            gridInstance.el.scrollLeft = scrollLeft;
        }, 0);

        console.log(rowChecked);
    };

    const handleClickRow = function clickRow(ev) {

        setDataInfo(null);
        const { rowKey, instance } = ev;
        const row = instance.getRow(rowKey);
        setDataInfo(row);
    };

    const handleScroll = async (e) => {
        try {
            const resData = await getPageMat();
         console.log(resData)
            setData((prevData) => [...prevData, ...resData?.data]);
        } catch (error) {
            console.error("Error loading data:", error);
        }

    };

    const handleUnSelect = function unSelect(ev) {

        setRowChecked(null);

        const checkedRows = gridInstance.getCheckedRows();
        setRowChecked(checkedRows);

        setTimeout(() => {
            gridInstance.el.scrollTop = scrollTop;
            gridInstance.el.scrollLeft = scrollLeft;
        }, 0);
    };



    return (
        <Layout className="h-screen bg-slate-50">
            <Helmet>
                <title>ITM - {t('PRINT BARCODE')}</title>
            </Helmet>

            <div className="flex flex-col h-full ">
                <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">
                    <Title level={5} className="mt-2 uppercase">
                        {t('PRINT BARCODE')}
                    </Title>
                    <BarcodePrintAction dataSearch={onHandleData} btnSearch={btnSearch} dataSelect={rowChecked} dataInfo={dataInfo} />
                </Header>

                <Content className="flex-grow px-4  bg-slate-50">
                    <div className="h-full flex flex-col">
                        <div className="flex-grow">
                            <TableBarcodePrint data={data} handleSelect={handleSeclecData} handleUnSelect={handleUnSelect} handleClickRow={handleClickRow} handleScroll={handleScroll} />
                        </div>
                    </div>
                </Content>
            </div>


        </Layout>
    );
}