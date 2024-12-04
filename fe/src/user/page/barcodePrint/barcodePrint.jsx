import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import BarcodePrintAction from '../../components/actions/barcodePrint/barcocePrintAction';
import TableBarcodePrint from '../../components/table/barcodePrint/tableBarcodePrint';
import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { debounce } from 'lodash';
import { GetPageItem } from '../../../services/printBarcodeService';

export default function BarcodePrint({ permissions, isMobile }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const { t } = useTranslation();
    const [dataInfo, setDataInfo] = useState([]);
    const [rowChecked, setRowChecked] = useState([]);
    const [fromDate, setFromDate] = useState(dayjs().startOf('month'))
    const [toDate, setToDate] = useState(dayjs().startOf('month'))
    const formatDate = useCallback((date) => date.format('YYYYMMDD'), [])

    const [vendor, setVendor] = useState('')
    const [matID, setMatID] = useState('')
    const [lotNo, setLotNo] = useState('')
    const [gridData, setGridData] = useState([])

    const [selectRow, setSelectRow] = useState(null);

    const onHandleData = function setDataHandle(varData) {
        setData(varData);
    };

    const fetchItemList = useCallback(async () => {
        setLoading(true)
        try {
          const itemList = await GetPageItem(
            formatDate(fromDate),
            formatDate(toDate),
            vendor,
            matID,
            lotNo,
          );
          setData(itemList?.data.data || [])
        } catch (error) {
          setData([])
        } finally {
          setLoading(false)
        }
      }, [fromDate, toDate, vendor, matID, lotNo])

      const debouncedFetchItemData = useMemo(
        () => debounce(fetchItemList, 100),
        [fetchItemList],
      )

      useEffect(() => {
        debouncedFetchItemData()
        return () => {
            debouncedFetchItemData.cancel()
        }
      }, [debouncedFetchItemData])

      const btnSearch = () => {
        debouncedFetchItemData();
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
                    <BarcodePrintAction 
                    fromDate={fromDate}
                    setFromDate={setFromDate}
                    toDate={toDate}
                    setToDate={setToDate}
                    vendor={vendor}
                    setVendor={setVendor}
                    matID={matID}
                    setMatID={setMatID}
                    lotNo= {lotNo} 
                    setLotNo={setLotNo}
                    dataSearch={onHandleData} 
                    btnSearch={btnSearch} 
                    dataSelect={rowChecked} 
                    dataInfo={dataInfo} />
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