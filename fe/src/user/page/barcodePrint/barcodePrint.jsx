import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout, message, Form } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import BarcodePrintAction from '../../components/actions/barcodePrint/barcocePrintAction';
import TableBarcodePrint from '../../components/table/barcodePrint/tableBarcodePrint';
import { useCallback, useEffect, useMemo, useRef, useState, version } from 'react';
import dayjs from 'dayjs';
import { CreatePrintLabel, getLotCount, getMatIdByVendor, GetPageItem, getReelNo } from '../../../features/barcode/printBarcodeService';
import { getPrinterDevice } from '../../../features/barcode/barcodeChangeService';
import ModalWaiting from '../../components/modal/material/modalWaiting';
import { BARCODE_ERR_MESSAGE, BARCODE_SUCCESS_MESSAGE } from '../../../utils/constants';

export default function BarcodePrint({ permissions, isMobile }) {
    const [formQuery] = Form.useForm();
    const [modal2Open, setModal2Open] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [fromDate, setFromDate] = useState(dayjs().startOf('week'))
    const [toDate, setToDate] = useState(dayjs().endOf('week'))
    const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])

    const [gridData, setGridData] = useState([])

    const [selectRow, setSelectRow] = useState([]);
    const [clickedRowData, setClickedRowData] = useState(null);

    const [optionDevices, setOptionDevices] = useState([]);
    const [device, setDevice] = useState('');

    const [acVendor, setAcVendor] = useState();
    const [acPartNoVendor, setAcPartNo] = useState();
    const [acMatId, setAcMatId] = useState();
    const [acLotTotalCnt, setAcLotTotalCnt] = useState();
    const [acLotNo, setAcLotNo] = useState();
    const [acQty, setAcQty] = useState(0);
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

    const onFinish = async (e) => {
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
    }

    const getMultiSelectedRows = () => {
        const selectedRows = selectRow.rows.items;

        let rows = [];

        selectedRows.forEach((range) => {
            const start = range[0];
            const end = range[1] - 1;

            for (let i = start; i <= end; i++) {
                rows.push(data[i]);
            }
        });

        return rows;
    };



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

    const onClearVendorValue = () => {
        setAcVendor(null);
    }

    const onKeyDownPartNo = (e) => {
        console.log(e.target.value);
        const partNo = e.target.value;
        let arrPartNo = [];
        let itemCd;
        let qty;
        if (e.key == 'Enter') {
            if (!acVendor) {
                setModal2Open(true);
                setError(BARCODE_ERR_MESSAGE.VENDOR_NOT_SELECT);
                return;
            }
            if (acVendor == 'PANASONIC') {

                arrPartNo = partNo.split(' ');
                if (arrPartNo.length == 2) {
                    itemCd = arrPartNo[0].slice(3);
                    qty = arrPartNo[1];

                } else {
                    setModal2Open(true);
                    setError("PANASONIC Part Code doesn't fit the format.");
                    return;
                }

            }
            if (acVendor == 'ALPHA OMEGA') {
                if (partNo.length == 9 || partNo.length == 10) {
                    itemCd = getValueMatId(partNo);
                } else {
                    setModal2Open(true);
                    setError("ALPHA OMEGA Part Code doesn't fit the format.");
                    return;
                }

            }
            setAcMatId(itemCd);
            setAcQty(qty);
        }

    }

    const getValueMatId = async (partNo) => {
        const payLoad = {
            plant: 'ITMVPSG',
            partNo: partNo,
        };

        try {
            return await getMatIdByVendor(payLoad);
        } catch (e) {
            message.error(e);
        }
    }

    const onKeyDownMatId = (e) => {

    }

    const onKeyDownLotTotalCnt = (e) => {

    }


    const onKeyDownLotNo = async (e) => {
        if (e.key == 'Enter') {
            const lotNo = e.target.value;
            let arrLotNo = [];
            let lotNoSplit = '';
            let reelNo = '';
            let lotTotalQty = 0;
            let matId = '';
            let qty = 0;
            let dateCode = '';
            let partNo = '';

            if (!acVendor) {
                setModal2Open(true);
                setError(BARCODE_ERR_MESSAGE.VENDOR_NOT_SELECT);
                return;
            }
            if (acVendor == 'PANASONIC') {
                arrLotNo = lotNo.split(' ');
                if (arrLotNo.length == 3) {
                    lotNoSplit = arrLotNo[1];
                    reelNo = getValueReelNoByLotNo(lotNoSplit);
                    lotTotalQty = getLotCount(lotNoSplit);

                } else {
                    setModal2Open(true);
                    setError("PANASONIC LOT Code doesn't fit the format.");
                    return;
                }

            }
            if (acVendor == 'ALPHA OMEGA') {
                const lengthLotNo = Number(lotNo.split('.').length - 1);
                if (lengthLotNo == 1) {
                    reelNo = getValueReelNoByLotNo(lotNo);
                    lotTotalQty = getLotCountByLotNo(lotNo);

                } else {
                    setModal2Open(true);
                    setError("ALPHA OMEGA LOT Code doesn't fit the format.");
                    return;
                }

            }
            if (acVendor == 'TEXAS INSTRUMENT') {
                const lengthLotNo = Number(lotNo.split('/').length - 1);
                if (lengthLotNo == 4) {
                    const arrLotNo = lotNo.split('/');
                    matId = arrLotNo[0];
                    lotNoSplit = arrLotNo[4];
                    qty = arrLotNo[2];
                    dateCode = arrLotNo[3];
                    reelNo = getValueReelNoByLotNo(lotNo);
                    lotTotalQty = getLotCountByLotNo(lotNo);
                } else {
                    setModal2Open(true);
                    setError("TEXAS INSTRUMENT LOT Code doesn't fit the format.");
                    return;
                }
            }
            if (acVendor == 'INFINEON') {
                lotNoSplit = lotNo.slice(2);
                lotTotalQty = getLotCountByLotNo(lotNoSplit);
            }
            if (acVendor == 'NEXPERIA') {
                lotNoSplit = lotNo.replace('1T', '')
                lotTotalQty = getLotCountByLotNo(lotNoSplit);
            }
            if (acVendor == 'ABLIC') {
                const lengthLotNo = Number(lotNo.split('$').length - 1);
                if (lengthLotNo == 6) {
                    const arrLotNo = lotNo.split('$');
                    partNo = arrLotNo[1];
                    matId = await getValueMatId(partNo);
                    lotNoSplit = arrLotNo[3];
                    dateCode = arrLotNo[2];
                    reelNo = arrLotNo[6].trimEnd().slice(-4);
                    lotTotalQty = await getLotCountByLotNo(lotNoSplit);

                    setAcPartNo(partNo);
                    setAcMatId(matId.result.data);
                    setAcLotNo(lotNoSplit);
                    setAcDateCode(dateCode);
                    setAcReelNo(reelNo);
                    setAcLotTotalCnt(lotTotalQty.result.LotCount);

                    console.log({ acLotNo, acReelNo, acLotTotalCnt, acMatId, acQty, acDateCode, acPartNoVendor })


                    console.log("matId.result.data", acMatId);


                } else {
                    setModal2Open(true);
                    setError("ABLIC LOT Code doesn't fit the format.");
                    return;
                }
            }
            if (acVendor == 'SMK') {
                const lengthLotNo = Number(lotNo.split(',').length - 1);
                if (lengthLotNo == 5) {
                    const arrLotNo = lotNo.split(',');
                    partNo = arrLotNo[2].slice(1);
                    matId = getValueMatId(partNo);
                    lotNoSplit = arrLotNo[4].slice(1);
                    qty = arrLotNo[1].slice(1);
                    dateCode = arrLotNo[3].slice(1);
                    reelNo = arrLotNo[5].slice(2);
                    lotTotalQty = getLotCountByLotNo(lotNoSplit);
                } else {
                    setModal2Open(true);
                    setError("SMK LOT Code doesn't fit the format.");
                    return;
                }
            }
            if (acVendor == 'NISSHINBO') {
                const lengthLotNo = Number(lotNo.split(',').length - 1);
                if (lengthLotNo == 4) {
                    const arrLotNo = lotNo.split(',');
                    partNo = arrLotNo[0];
                    matId = getValueMatId(partNo);
                    lotNoSplit = arrLotNo[4];
                    qty = arrLotNo[1];
                    dateCode = arrLotNo[3].substring(0, 4);
                    reelNo = getValueReelNoByLotNo(lotNoSplit)
                    lotTotalQty = getLotCountByLotNo(lotNoSplit);
                } else {
                    setModal2Open(true);
                    setError("NISSHINBO LOT Code doesn't fit the format.");
                    return;
                }
            }

            formQuery.setFieldsValue({ partNo: partNo });
            formQuery.setFieldsValue({ matID: matId });
            formQuery.setFieldsValue({ lotTotalCNT: lotTotalQty });
            formQuery.setFieldsValue({ lotNo: lotNoSplit });
            formQuery.setFieldsValue({ qty: qty });
            formQuery.setFieldsValue({ dateCode: dateCode });
            formQuery.setFieldsValue({ reelNo: reelNo });

        }
    }

    const getValueReelNoByLotNo = async (lotNoSplit) => {
        const payLoad = {
            plant: 'ITMVPSG',
            lotNo: lotNoSplit,
        };

        try {
            return await getReelNo(payLoad);
        } catch (e) {
            message.error(e);
        }
    }

    const getLotCountByLotNo = async (lotNo) => {
        const payLoad = {
            plant: 'ITMVPSG',
            lotNo: lotNo,
        };

        try {
            return await getLotCount(payLoad);
        } catch (e) {
            message.error(e);
        }
    }

    const onKeyDownQty = (e) => {

        if (e.key == 'Enter') {
            let qty = 0;
            const iQtyValue = e.target.value;
            if (!acVendor) {
                setModal2Open(true);
                setError(" LOT Code doesn't fit the format.");
                return;
            }

            if (acVendor == 'PANASONIC' || acVendor == 'ALPHA OMEGA') {
                if (!iQtyValue) {
                    setModal2Open(true);
                    setError(" Not a number. Please enter a number.");
                    return;
                }
            }
            if (acVendor == "INFINEON") {
                if (iQtyValue) {
                    qty = iQtyValue.replace('Q', '');
                    setAcQty(qty);
                }
            }
            if (acVendor == "NEXPERIA") {
                if (iQtyValue) {
                    qty = iQtyValue.slice(1);
                    setAcQty(qty);
                }
            }
            formQuery.setFieldsValue({ qty: qty });

            console.log("acQty", acQty)
        }
    }

    const onKeyDownDateCode = (e) => {
        if (e.key == 'Enter') {
            let dateCode = '';
            const iDateCodeValue = e.target.value;

            if (!acVendor) {
                setModal2Open(true);
                setError(" LOT Code doesn't fit the format.");
                return;
            }

            if (acVendor == "INFINEON") {
                if (iDateCodeValue) {
                    dateCode = iDateCodeValue.slice(2);
                }
            }
            if (acVendor == "NEXPERIA") {
                if (iQtyValue) {
                    dateCode = iDateCodeValue.replace('9D', '');
                }
            }
            setAcDateCode(dateCode);
        }

    }

    const onKeyDownReelNo = (e) => {

        if (e.key == 'Enter') {
            let reelNo = '';
            const iReelNoValue = e.target.value;

            if (!acVendor) {
                setModal2Open(true);
                setError(" LOT Code doesn't fit the format.");
                return;
            }

            if (acVendor == "INFINEON") {
                if (iReelNoValue) {
                    reelNo = iReelNoValue.replace("\u001e", '').trimEnd().slice(-5);
                }
            }
            if (acVendor == "MITSUMI") {
                if (iReelNoValue) {
                    reelNo = iReelNoValue.replace('  ', '');
                }
            }
            setAcReelNo(reelNo);
        }
    }

    const onKeyDownUserId = (e) => {

    }

    const onClickPrint = useCallback(
        async ()=> {
            const createPayload = (isMulti, rows, device) => ({
                isMulti,
                listSelected: rows,
                device
            });
    
            const singleRow = {
                VENDOR: acVendor,
                PARTNO: acPartNoVendor,
                ITEMCD: acMatId,
                LOTNOCNT: acLotTotalCnt,
                LOTNO: acLotNo,
                QTY: acQty,
                REELNO: acReelNo,
                USER_ID: acUserId,
                ISSUENO: acIssueNo,
                REMARK: acRemark,
                DATECODE: acDateCode,
                REMARK: acRemark,
                LOT_ID : acMatId + '/' + acLotNo + "/" + acQty + "/" + acDateCode + "/" + acReelNo,
    
            };
            let payLoad;
            const multi = getMultiSelectedRows();
    
            if (multi && multi.length >= 1) {
                payLoad = createPayload(true, multi, device);
            } else {
                payLoad = createPayload(false, [singleRow], device);
            }
                                
            try {
                const result = await CreatePrintLabel(
                    payLoad
                );
                if(result.result.status){
                    setModal2Open(true);
                    setError(BARCODE_SUCCESS_MESSAGE.PRINTER_SUCCESS);
                }
                else{
                    setModal2Open(true);
                    setError(BARCODE_ERR_MESSAGE.PRINTER_ERROR);
                }
    
            } catch (error) {
    
            }
        
        }, [getMultiSelectedRows] 
    ) 

    const [isModalVisible, setIsModalVisible] = useState(false);

    const onClickCancel = () => {
        setIsModalVisible(false);
    };

    const onClickPreview = () => {
        setIsModalVisible(true);
        let LOTID = newLabel.ITEMCD + '/' + newLabel.LOTNO + '/' + newLabel.QTY + '/' + newLabel.DATECODE + '/' + newLabel.REELNO;
    };


    const resetAllState = () => {
        setAcVendor('');
        setAcPartNo('')
        setAcMatId('')
        setAcLotTotalCnt(0);
        setAcLotNo('');
        setAcQty(0);
        setAcDateCode('');
        setAcReelNo('');
        setAcUserId('');
        setAcIssueNo('');
        setAcRemark('');
        formQuery.resetFields();
    };

    useEffect(() => {
        resetAllState()
    }, [])



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
                        formQuery={formQuery}
                        fromDate={fromDate}
                        toDate={toDate}

                        onFinish={onFinish}
                        onClickPrint={onClickPrint}
                        onClickPreview={onClickPreview}
                        isModalVisible={isModalVisible}
                        onClickCancel={onClickCancel}

                        onDropDownChange={onDropDownChange}
                        optionDevices={optionDevices}
                        handleOnchangeDevice={handleOnchangeDevice}

                        onChangeVendor={onChangeVendor}
                        onClearVendorValue={onClearVendorValue}
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
                                setSelectRow={setSelectRow}
                                setClickedRowData={setClickedRowData}
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