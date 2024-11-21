import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Input, Space, Table, Typography, message, Button, Layout } from 'antd';
const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
import 'moment/locale/vi';
import WaitingIqcStockInActions from '../../components/actions/material/waitingIqcStockInActions';

// Dữ liệu mẫu (dataTest)
const dataTest = [
    { "id": 1, "code": "A001", "quantity": 100, "quantityOut": 0, "quantityRemaining": 100 },
    { "id": 2, "code": "A002", "quantity": 200, "quantityOut": 0, "quantityRemaining": 200 },
    { "id": 3, "code": "A003", "quantity": 150, "quantityOut": 0, "quantityRemaining": 150 },
    { "id": 4, "code": "A004", "quantity": 300, "quantityOut": 0, "quantityRemaining": 300 },
    { "id": 5, "code": "A005", "quantity": 50, "quantityOut": 0, "quantityRemaining": 50 },
    { "id": 6, "code": "A006", "quantity": 120, "quantityOut": 0, "quantityRemaining": 120 },
    { "id": 7, "code": "A007", "quantity": 180, "quantityOut": 0, "quantityRemaining": 180 },
    { "id": 8, "code": "A008", "quantity": 75, "quantityOut": 0, "quantityRemaining": 75 },
    { "id": 67, "code": "A067", "quantity": 400, "quantityOut": 0, "quantityRemaining": 400 },
];

export default function WaitingIqcStockIn({ permissions, isMobile }) {
  const { t } = useTranslation();

  // Web Worker Setup
  const workerRef = useRef(null);
  const inputCodeRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputCode, setInputCode] = useState(""); 
  const [inputQuantity, setInputQuantity] = useState(0); 
  const [oldData, setOldData] = useState([]); 
  const [processedData, setProcessedData] = useState([]); 
  const [data, setData] = useState(dataTest); 

  // Khởi tạo Web Worker
  useEffect(() => {
    workerRef.current = new Worker(new URL('./worker.js', import.meta.url));

    workerRef.current.onmessage = (event) => {
      const { type, payload } = event.data;
      if (type === 'processedData') {
        if (payload.error) {
          message.error(payload.error);
        } else {
          // A001/99
          setData(payload.updatedData); 
          setProcessedData((prevData) => [...prevData, payload.processedData]);
          setOldData((prevData) => [
            ...prevData,
            { key: Math.random(), ...payload.processedData }
          ]);
        }
        setIsProcessing(false);
      }
    };

    workerRef.current.onerror = (error) => {
      console.error('Worker Error:', error);
      message.error('Đã xảy ra lỗi khi xử lý!');
      setIsProcessing(false);
    };

    if (inputCodeRef.current) {
      inputCodeRef.current.focus();
    }

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleCodeChange = (e) => {
    const value = e.target.value;
    setInputCode(value);

    if (value.includes('/')) {
      const [code, quantity] = value.split('/');

      if (quantity && !isNaN(quantity) && Number(quantity) > 0) {
        setInputQuantity(Number(quantity));
        setInputCode(code);
        handleProcessData(code, Number(quantity));
      }
    }
  };

  const handleProcessData = (code, quantity) => {
    if (!code || quantity <= 0) {
      message.error('Vui lòng nhập mã và số lượng hợp lệ!');
      return;
    }

    workerRef.current.postMessage({
      type: 'processData',
      payload: { dataTest: data, code, quantity }
    });

    setIsProcessing(true);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleProcessData(inputCode, inputQuantity);
    }
  };

  const columnsOldData = [
    { title: 'Mã', dataIndex: 'code', key: 'code' },
    { title: 'Số lượng nhập', dataIndex: 'quantity', key: 'quantity' },
  ];

  const columnsProcessedData = [
    { title: 'Mã', dataIndex: 'code', key: 'code' },
    { title: 'Số lượng đã nhập', dataIndex: 'quantity', key: 'quantity' },
  ];

  return (
    <Layout className="h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Waiting Iqc Stock In')}</title>
      </Helmet>

      <div className="h-[calc(100vh-100px)] overflow-auto">
        <Header className="bg-slate-50 px-4 h-auto">
          <Title level={5} className="mt-2 uppercase">
            {t('Waiting Iqc Stock In')}
          </Title>
          <WaitingIqcStockInActions />
        </Header>

        <Content className="flex h-auto justify-center items-center bg-slate-50 px-4">
          <div style={{ marginBottom: 20, width: '100%' }}>
            <Title level={4}>Nhập mã và số lượng</Title>
            <Space style={{ display: 'flex', marginBottom: 20 }}>
              <Input
                ref={inputCodeRef} 
                value={inputCode}
                onChange={handleCodeChange}
                onKeyDown={handleEnterPress} 
                placeholder="Nhập mã/số lượng (Ví dụ: A001/50)"
                style={{ width: '150px' }}
              />
            </Space>
          </div>

          <div style={{ marginTop: 40 }}>
            <Title level={4}>Dữ liệu gốc</Title>
            <Table
              style={{ marginTop: 20 }}
              columns={[
                { title: 'Mã', dataIndex: 'code', key: 'code' },
                { title: 'Số lượng còn lại', dataIndex: 'quantityRemaining', key: 'quantityRemaining' },
              ]}
              dataSource={data} 
              pagination={false}
            />
          </div>

          <div style={{ marginTop: 40 }}>
            <Title level={4}>Dữ liệu mới (Số lượng đã nhập)</Title>
            <Table
              style={{ marginTop: 20 }}
              columns={columnsProcessedData}
              dataSource={processedData}
              pagination={false}
            />
          </div>
        </Content>

        <Footer className="text-center h-auto bg-slate-50">
          <Text className="text-base">ITM SEMICONDUCTOR CO.,LTD ©2024</Text>
        </Footer>
      </div>
    </Layout>
  );
}
