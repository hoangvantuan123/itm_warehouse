import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Typography, Layout } from 'antd';
const { Title } = Typography;
const { Header, Content } = Layout;
import 'moment/locale/vi';
import BarcodePrintAction from '../../components/actions/barcodePrint/barcocePrintAction';
import TableBarcodePrint from '../../components/table/barcodePrint/tableBarcodePrint';
import { useState } from 'react';
import { getPageMat } from '../../../services/printBarcodeService';

export default function BarcodePrint({ permissions, isMobile }) {

    const [data, setData] = useState([])
    const { t } = useTranslation();

    const [selectState, setSelectState] = useState([]);


    const onHandleData = function setDataHandle(varData) {
        setData(varData);
    }

    const btnSearch = async () => {
        const resData = await getPageMat();
        setData(resData?.data)

    }


    const handleSeclecData =  function setSelectData (ev) {
        const gridInstance = ev.instance;
        const checkedRows = gridInstance.getCheckedRows();
        setSelectState(checkedRows);
        
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
                    <BarcodePrintAction dataSearch={onHandleData} btnSearch={btnSearch} dataSelect={selectState}/>
                </Header>

                <Content className="flex-grow px-4  bg-slate-50">
                    <div className="h-full flex flex-col">
                        <div className="flex-grow">
                            <TableBarcodePrint data={data} handleSelect={handleSeclecData}/>
                        </div>
                    </div>
                </Content>
            </div>


        </Layout>
    );
}