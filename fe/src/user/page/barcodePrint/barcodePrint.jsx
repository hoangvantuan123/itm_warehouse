import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout, Button, message } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import BarcodePrintAction from '../../components/actions/barcodePrint/barcocePrintAction';
import TableBarcodePrint from '../../components/table/barcodePrint/tableBarcodePrint';
import { useCallback, useEffect, useMemo, useRef, useState, version } from 'react';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import { GetPageItem } from '../../../features/barcode/printBarcodeService';
import { getPrinterDevice } from '../../../features/barcode/barcodeChangeService';
import ModalWaiting from '../../components/modal/material/modalWaiting';

export default function BarcodePrint({ permissions, isMobile }) {
    const [modal2Open, setModal2Open] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [dataInfo, setDataInfo] = useState([]);
    const [rowChecked, setRowChecked] = useState(null);
    const [fromDate, setFromDate] = useState(dayjs().startOf('week'))
    const [toDate, setToDate] = useState(dayjs().endOf('week'))
    const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])

    const [gridData, setGridData] = useState([])

    const [selectRow, setSelectRow] = useState(null);
    const [singleRow, setSingleRow] = useState(null);

    const [optionDevices, setOptionDevices] = useState([]);
    const [device, setDevice] = useState('');

    const [acVendor, setAcVendor] = useState();
    const [acPartNoVendor, setAcPartNo] = useState();
    const [acMatId, setAcMatId] = useState();
    const [acLotTotalCnt, setAcLotTotalCnt] = useState();
    const [acLotNo, setAcLotNo] = useState();
    const [acQty, setAcQty] = useState();
    const [acDateCode, setAcDateCode] = useState();
    const [acReelNo, setAcReelNo] = useState();
    const [acUserId, setAcUserId] = useState();
    const [acIssueNo, setAcIssueNo] = useState();
    const [acRemark, setAcRemark] = useState();

    const partNoRef = useRef(null);
    const matIdRef = useRef(null);
    const lotNoRef = useRef(null);
    const qtyRef = useRef(null);
    const dateCodeRef = useRef(null);
    const reelNoRef = useRef(null);
    const userIdRef = useRef(null);


    const fetchItemList = useCallback(async (e) => {
        setData([]);
        const {
            fromDate,
            toDate,
            vendor,
            matID,
            lotNo,
        } = e;
        setLoading(true);
        try {
            const itemList = await GetPageItem(
                formatDate(fromDate),
                formatDate(toDate),
                vendor?.value || 'ALL',
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

    const onDropDownChange = (e) => {

        const getDeviceOptions = async (body) => {
            try {
                const result = await getPrinterDevice(body);
                if (result?.result) {
                    const data = result.result;
                    const formattedOptions = data.map((item) => ({
                        label: item.ip,
                        value: `${item.ip}:${item.port}`,
                        key: item.userid,
                    }));
                    setOptionDevices([...formattedOptions]);
                }
                else {
                    message.error(BARCODE_ERR_MESSAGE.NO_DATA_PRINTER);
                    return;
                }
            } catch (err) {
                console.error('Error creating barcode change:', err);
                message.error(BARCODE_ERR_MESSAGE.NO_DATA_PRINTER);
            }
        };

        if (e) {
            getDeviceOptions();
        }
    }

    const handleOnchangeDevice = (e) => {
        setDevice(e.value);
    }

    const onChangeVendor = (e) => {
        setAcVendor(e.value);
    }

    const onKeyDownPartNo = (e) => {
        const partNo = e.value;
        let arrPartNo = [];
        let itemCd;
        let qty;
        if (e.key == 'Enter') {
            if (!acVendor) {
                setModal2Open(true);
                setError('Error');
                return;
            }
            if(acVendor == 'PANASONIC'){
                
                arrPartNo =  partNo.split(' ');
                if(arrPartNo.length != 2){
                    setModal2Open(true);
                    setError("PANASONIC Part Code doesn't fit the format.");
                    return;
                }
                itemCd = arrPartNo[0].slice(3);
                qty = arrPartNo[1];
            }
            if(acVendor == 'ALPHA OMEGA'){
                if(partNo.length != 9 || partNo.length != 10){
                    setModal2Open(true);
                    setError("ALPHA OMEGA Part Code doesn't fit the format.");
                    return;
                }
                const payload = {
                    plant: 'ITMVPSG',
                    partNo: partNo
                }
                const result = getMatIdByVendor(payload);
                if(result?.status){
                    itemCd = result?.data;
                }
            }

            setAcMatId(itemCd);
            setAcQty(qty);
        }

    }

    const getMatIdByVendor = useCallback(async (payload) => {
        try {
            return await getMatIdByVendor(
                payload
            );
        } catch (error) {

        }
    }, [])

    const onKeyDownMatId = (e) => {

    }

    const onKeyDownLotTotalCnt = (e) => {

    }

    const onKeyDownLotNo = (e) => {

        const lotNo = e.value;
        let arrLotNo = [];
        let reelNo;
        let lotTotalQty;
        
        if (!acVendor) {
            setModal2Open(true);
            setError('Error');
            return;
        }
        if(acVendor == 'PANASONIC'){

        }
    }

    const onKeyDownQty = (e) => {

    }

    const onKeyDownDateCode = (e) => {

    }

    const onKeyDownReelNo = (e) => {

    }

    const onKeyDownUserId = (e) => {

    }

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
                        btnPrinter={handleBtnPrinter}

                        rowSelects={rowChecked}
                        setRowChecked={setRowChecked}

                        onDropDownChange={onDropDownChange}
                        optionDevices={optionDevices}
                        handleOnchangeDevice={handleOnchangeDevice}

                        onChangeVendor={onChangeVendor}
                        onKeyDownPartNo={onKeyDownPartNo}
                        onKeyDownMatId={onKeyDownMatId}
                        onKeyDownLotTotalCnt={onKeyDownLotTotalCnt}
                        onKeyDownLotNo={onKeyDownLotNo}
                        onKeyDownQty={onKeyDownQty}
                        onKeyDownDateCode={onKeyDownDateCode}
                        onKeyDownReelNo={onKeyDownReelNo}
                        onKeyDownUserId={onKeyDownUserId}

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

                            <ModalWaiting
                                modal2Open={modal2Open}
                                setModal2Open={setModal2Open}
                                error={error}
                            />
                        </div>
                    </div>
                </Content>
            </div>


        </Layout>
    );
}