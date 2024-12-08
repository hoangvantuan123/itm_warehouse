import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout, Button, message, Form } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { debounce, values } from 'lodash';
import BarcodeChangeAction from '../../components/actions/barcodePrint/barcodeChangAction';
import TabelBarcodeChange from '../../components/table/barcodePrint/tableBarcodeChange';
import { searchPage } from '../../../features/barcode/barcodeChangeService';
import { use } from 'react';

export default function BarcodeChange({ permissions, isMobile }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [dataInfo, setDataInfo] = useState([]);
    const [rowChecked, setRowChecked] = useState(null);
    // const [fromDate, setFromDate] = useState(dayjs().startOf('month'))
    // const [toDate, setToDate] = useState(dayjs().startOf('month'))
    const formatDate = useCallback((date) => date.format('YYYYMMDDHHmmss'), [])


    const [gridData, setGridData] = useState([])
    const [selectRow, setSelectRow] = useState(null);
    const [dataAc, setDataAc] = useState({});
    const [formChange] = Form.useForm();

    const [oldQty, setOldQty] = useState();
    const [newQty, setNewQty] = useState('');
    const [changeQty, setChangeQty] = useState('');

    const [oldBarcode, setOldBarcode] = useState('');
    const [itemNo, setItemNo] = useState('');
    const [lotNo, setLotNo] = useState('');
    const [changeLotId, setChangeLotId] = useState('');

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

    const onFinishFormChange = (e) => {

        const {
            oldBarcode,
            preQty,
            changeQty,
            qty,
            remark,
            userID,
            barcodePosX,
            barcodePosY,
            barcodeSizeX,
            barcodeSizeY,
            qrcodePosX,
            qrcodePosY,
            qrcodeSizeX,
            qrcodeSizeY

        } = e;

        console.log("oldBarcode", oldBarcode);
    };


    const onChangeBarcode = (e) => {
        const inputValue = e.target.value; // Lấy giá trị hiện tại từ input
        setOldBarcode(inputValue); // Cập nhật state

        // if (!inputValue.includes('/')) {
        //     message.warning("BARCODE INVALID FORMAT 1!");
        //     return;
        // }

        const arrLot = inputValue.split('/');
        // if (arrLot.length < 9) {
        //     message.warning("BARCODE INVALID FORMAT 2 !");
        //     setLotNo("");
        //     return;
        // }

        setItemNo(arrLot[0]);
        setLotNo(`${arrLot[1]}/${arrLot[3]}/${arrLot[4]}`);
        setOldQty(arrLot[2]);
        formChange.setFieldsValue({ preQty: arrLot[2] });

    };

    const onChangeQty = (e) => {
        const changeQty = e.target.value;
        const newQty = oldQty - changeQty;
        setNewQty(newQty);
        formChange.setFieldsValue({ qty: newQty });
    }

    const onChangeNewQty = (e) => {
        setChangeLotId(itemNo + '/' + lotNo)
        
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const btnOpenModal = (e) => {
        setIsModalVisible(true);
        console.log(e);
    }

    const handleBtnConfirm = () => {

        if (!port || !ip) {
            message.error("PORT và IP không được để trống");
            return;
        }
        postPrint();
    }
    const handleCancel = () => {
        setIsModalVisible(false);
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
                        // fromDate={fromDate}
                        // toDate={toDate}
                        setNewDataAction={setDataAc}
                        onFinish={onFinish}
                        onChangeBarcode={onChangeBarcode}
                        btnOpenModal={btnOpenModal}
                        isModalVisible={isModalVisible}
                        handleBtnConfirm={handleBtnConfirm}
                        handleCancel={handleCancel}

                        formChange={formChange}

                        onChangeQty={onChangeQty}
                        onChangeNewQty={onChangeNewQty}
                        oldQty={oldQty}
                        newQty={newQty}
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