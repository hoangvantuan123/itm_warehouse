import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout, Button, message } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import BarcodePrintAction from '../../components/actions/barcodePrint/barcocePrintAction';
import TableBarcodePrint from '../../components/table/barcodePrint/tableBarcodePrint';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import { GetPageItem } from '../../../features/barcode/printBarcodeService';

export default function BarcodePrint({ permissions, isMobile }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [dataInfo, setDataInfo] = useState([]);
    const [rowChecked, setRowChecked] = useState(null);
    const [fromDate, setFromDate] = useState(dayjs().startOf('week'))
    const [toDate, setToDate] = useState(dayjs().startOf('week'))
    const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])

    const [vendor, setVendor] = useState('')
    const [matID, setMatID] = useState('')
    const [lotNo, setLotNo] = useState('')
    const [gridData, setGridData] = useState([])

    const [selectRow, setSelectRow] = useState(null);
    const [singleRow, setSingleRow] = useState(null);

    const onHandleData = function setDataHandle(varData) {
        setData(varData);
    };

    const fetchItemList = useCallback(async (e) => {
        setData([]);
        const {
            fromDate,
            toDate,
            vendor,
            matID,
            lotNo,
        } = e;
        setLoading(true)
        try {
            const itemList = await GetPageItem(
                formatDate(fromDate),
                formatDate(toDate),
                vendor.value,
                matID,
                lotNo,
            );
            setData(itemList?.data.data || [])
        } catch (error) {
            setData([])
        } finally {
            setLoading(false)
        }
    }, [])

    const onFinish = async (e) => {
        fetchItemList(e);
    }

    useEffect(() => {
    }, [])



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

    const onChangeVendor = (value) => {
        console.log("value.value",value.value )
        setVendor(value.value)
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

                    <BarcodePrintAction
                        fromDate={fromDate}
                        toDate={toDate}

                        onFinish={onFinish}
                        onChangeVendor= {onChangeVendor}
                        vendor={vendor}
                        matID={matID}
                        setMatID={setMatID}
                        lotNo={lotNo}
                        setLotNo={setLotNo}
                        dataSearch={onHandleData}
                        dataInfo={dataInfo}
                        btnPrinter={handleBtnPrinter}
                        rowSelects={rowChecked}
                        setRowChecked={setRowChecked}
                    />
                </Header>

                <Content className="flex-grow px-4  bg-slate-50">
                    <div className="h-full flex flex-col">
                        <div className="flex-grow">
                            <TableBarcodePrint
                                data={data}
                                setGridData={setGridData}
                                gridData={gridData}
                                loading={loading}
                                selectRow={selectRow}
                                setSelectRow={setSelectRow}
                            />
                        </div>
                    </div>
                </Content>
            </div>


        </Layout>
    );
}