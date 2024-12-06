import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout, Button, message } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { debounce, values } from 'lodash';
import BarcodeChangeAction from '../../components/actions/barcodePrint/barcodeChangAction';
import TabelBarcodeChange from '../../components/table/barcodePrint/tableBarcodeChange';
import { searchPage } from '../../../features/barcode/barcodeChangeService';
import { searchPage2 } from '../../../features/barcode/barcodeChangeService';

export default function BarcodeChange({ permissions, isMobile }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [dataInfo, setDataInfo] = useState([]);
    const [rowChecked, setRowChecked] = useState(null);
    const [fromDate, setFromDate] = useState(dayjs().startOf('month'))
    const [toDate, setToDate] = useState(dayjs().startOf('month'))

    const [gridData, setGridData] = useState([])
    const [selectRow, setSelectRow] = useState(null);
    const [dataAc, setDataAc] = useState({});

    const getMultiSelectedRows = () => {
        const selectedRows = selectRow.rows.items;

        let rows = [];

        selectedRows.forEach((range) => {
            const start = range[0];
            const end = range[1] - 1;

            for (let i = start; i <= end; i++) {
                rows.push(data[i]);
                setDataInfo(data[i]);
            }
        });

        return rows;
    };



    const handleBtnPrinter = useCallback(

        async (e) => {
            setRowChecked(null);

            const selectedRows = getMultiSelectedRows();
            if (selectedRows.length === 0) {
                message.warning('Vui lòng chọn ít nhất một hàng.');
                return;
            }

            setRowChecked(selectedRows);
        },
        [data, selectRow]

    );

    const fetchItemList = async () => {
        setLoading(true)
        try {
            const itemList = await searchPage2(

                dataAc?.lotNo,
                dataAc?.matID,
                dataAc?.barcode,
            );
            setData(itemList?.data.data || [])
        } catch (error) {
            setData([])
        } finally {
            setLoading(false)
        }
    }


    const onFinish = async (e) => {
        setData([]);
        const {
            fromDate,
            toDate,
            lotNo,
            matID,
            barcode, } = e;

        try{
            const result = await searchPage(
                fromDate,
                toDate,
                lotNo,
                matID,
                barcode
            );

            setData(result.data.data || []);
        }catch(err){
            setData([])
        }
       
    };


    return (
        <Layout className="h-screen bg-slate-50">
            <Helmet>
                <title>ITM - {t('BARCODE CHANGE')}</title>
            </Helmet>

            <div className="flex flex-col h-full ">
                <Header className="bg-slate-50 px-4 h-auto flex-shrink-0">
                    <Title level={5} className="mt-2 uppercase">
                        {t('BARCODE CHANGE')}
                    </Title>

                    <BarcodeChangeAction
                        setNewDataAction={setDataAc}
                        onFinish={onFinish}
                    />
                </Header>

                <Content className="flex-grow px-4  bg-slate-50">
                    <div className="h-full flex flex-col">
                        <div className="flex-grow">
                            <TabelBarcodeChange
                                data={data}
                                setGridData={setGridData}
                                gridData={gridData}
                                setSelectRow={setSelectRow}
                            />
                        </div>
                    </div>
                </Content>
            </div>


        </Layout>
    );
}