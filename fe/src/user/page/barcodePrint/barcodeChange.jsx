import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout, Button, message, Form } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import dayjs from 'dayjs';
import BarcodeChangeAction from '../../components/actions/barcodePrint/barcodeChangAction';
import TabelBarcodeChange from '../../components/table/barcodePrint/tableBarcodeChange';
import { createChangeBarcode, isExistBarcode, searchPage } from '../../../features/barcode/barcodeChangeService';
import { use } from 'react';
import { BARCODE_ERR_MESSAGE, BARCODE_SUCCESS_MESSAGE, ERROR_MESSAGES } from '../../../utils/constants';

export default function BarcodeChange({ permissions, isMobile }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [dataInfo, setDataInfo] = useState([]);
    const [rowChecked, setRowChecked] = useState(null);
    const [fromDate, setFromDate] = useState(dayjs().startOf('week'))
    const [toDate, setToDate] = useState(dayjs().endOf('week'))
    const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])


    const [gridData, setGridData] = useState([])
    const [selectRow, setSelectRow] = useState(null);
    const [clickedRowData, setClickedRowData] = useState(null)
    const [dataAc, setDataAc] = useState({});
    const [formChange] = Form.useForm();

    const [oldQty, setOldQty] = useState();
    const [NewQty, setNewQty] = useState('');
    const [changeQty, setChangeQty] = useState('');

    const [BarcodeID, setBarcodeID] = useState('');
    const [ItemNo, setItemNo] = useState('');
    const [LotNo, setLotNo] = useState('');
    const [DateCode, setDateCode] = useState('');
    const [ReelNo, setReelNo] = useState('');
    const [NewBarcodeID, setNewBarCodeId] = useState('');
    const [Remark, setRemark] = useState('');
    const [UserID, setUserID] = useState('');
    const changeQtyRef = useRef(null);
    const remarkRef = useRef(null);

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

    const getValues = () => {
        const values = formChange.getFieldsValue();
        console.log('Current values:', values);
    };

    useEffect(() => {

        formChange.resetFields();
        const unsubscribe = formChange.setFieldsValue(() => {
            getValues();
        });


        return () => unsubscribe;
    }, [formChange]);



    const listSelect = useCallback(

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

    const onFinish = async (e) => {
        setData([]);
        const {
            fromDate,
            toDate,
            lotNo,
            matID,
            barcode, } = e;

        try {
            const result = await searchPage(
                formatDate(fromDate),
                formatDate(toDate),
                lotNo,
                matID,
                barcode
            );

            setData(result.data.data || []);
        } catch (err) {
            setData([])
        }

    };

    const onChangeBarcode = async (e) => {
        const inputValue = e.target.value;
        setBarcodeID(inputValue);

        if (!inputValue.includes('/')) {
            message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT);
            return;
        }

        const arrLot = inputValue.split('/');
        if (arrLot.length != 5) {
            message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT);
            return;
        }

        setItemNo(arrLot[0]);
        setLotNo(arrLot[1]);
        setOldQty(arrLot[2]);
        setDateCode(arrLot[3]);
        setReelNo(arrLot[4]);

        const param = {
            itemNo: arrLot[0],
            lotNo: arrLot[1] + '/' + arrLot[3] + '/' + arrLot[4],
        }

        try {
            const result = await isExistBarcode(
                param
            );

            console.log(result.result.length)
            if (result.result.length == 0) {
                message.info(BARCODE_ERR_MESSAGE.BARCODEID_NOT_EXISTS);
            } else {
                formChange.setFieldsValue({ preQty: arrLot[2] });
                changeQtyRef.current.focus();
            }
        } catch (err) {
            message.error(err);
        }


    };

    const onChangeQty = (e) => {
        const changeQty = e.target.value;
        const newQty = oldQty - changeQty;
        setNewQty(newQty);
        formChange.setFieldsValue({ qty: newQty });
        setNewBarCodeId(ItemNo + "/" + LotNo + "/" + newQty + "/" + DateCode + "/" + ReelNo)
    }

    const onChangeNewQty = (e) => {

    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const btnOpenModal = useCallback(async () => {

        const validBody = (body) => {
            if (!body.ItemNo.includes('/')) {
                message.warning(BARCODE_ERR_MESSAGE.INVALID_BARCODE_FORMAT);
                return ;
            }
        }

        const listSelected = getMultiSelectedRows();
        const createPayload = (isConfirm, rows) => ({
            isConfirm,
            listSelected: rows,
        });

        const handleCreateChangeBarcode = async (body) => {
            try {
                const result = await createChangeBarcode(body);
                if (result && result.result.status) {
                    return true;
                }
                else {
                    return false;
                }
            } catch (err) {
                console.error('Error creating barcode change:', err);
                message.error(BARCODE_ERR_MESSAGE.PRINTER_ERROR);
            }
        };

        if (listSelected.length >= 1) {
            const body = createPayload(false, listSelected);
            const isSucces = await handleCreateChangeBarcode(body);
            if (isSucces) {
                message.info(BARCODE_SUCCESS_MESSAGE.PRINTER_SUCCESS);
                return;
            } else {
                message.error(BARCODE_ERR_MESSAGE.PRINTER_ERROR);
                return;
            }
        } else {

            const singleRow = {
                ItemNo,
                LotNo,
                NewQty,
                oldQty,
                DateCode,
                ReelNo,
                BarcodeID,
                NewBarcodeID,
                Remark,
                UserID,
                NewStatus: '',
            };

            const body = createPayload(true, [singleRow]);
            const isSucces = await handleCreateChangeBarcode(body);
            resetAllData();
            if (isSucces) {
                message.info(BARCODE_SUCCESS_MESSAGE.PRINTER_SUCCESS);
                setIsModalVisible(true);
                return;
            }
            else {
                message.error(BARCODE_ERR_MESSAGE.PRINTER_ERROR);
                return;
            }
        }
    }, [getMultiSelectedRows, createChangeBarcode, setData, setIsModalVisible]);


    const onKeyDownBarcode = (e) => {
        if (e.key === 'Enter') {
            onChangeBarcode(e);
        }
    };

    const onKeyDownChangeQty = (e) => {
        if (e.key === 'Enter') {
            onChangeQty(e);
            remarkRef.current.focus();
        }
    };

    const resetAllData = () => {
        setItemNo('');
        setLotNo('');
        setNewQty('');
        setOldQty('');
        setDateCode('');
        setReelNo('');
        setBarcodeID('');
        setNewBarCodeId('');
        setRemark('');
        setUserID('');
    }

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
                        fromDate={fromDate}
                        toDate={toDate}
                        onFinish={onFinish}
                        handleEnter={onKeyDownBarcode}
                        btnOpenModal={btnOpenModal}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}

                        formChange={formChange}
                        onKeyDownChangeQty={onKeyDownChangeQty}
                        changeQtyRef={changeQtyRef}
                        remarkRef={remarkRef}
                        onChangeNewQty={onChangeNewQty}
                        oldQty={oldQty}
                        newQty={NewBarcodeID}
                        setRemark={setRemark}
                        setUserId={setUserID}
                        clickedRowData={clickedRowData}

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
                                setClickedRowData={setClickedRowData}
                            />
                        </div>
                    </div>
                </Content>
            </div>


        </Layout>
    );
}