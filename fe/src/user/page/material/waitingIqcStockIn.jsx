import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, message, Layout } from 'antd'
const { Title, Text } = Typography
const { Header, Content, Footer } = Layout
import 'moment/locale/vi'
import WaitingIqcStockInActions from '../../components/actions/material/waitingIqcStockInActions'
import TableTransferWaitingIqcStockIn from '../../components/table/material/tableTransferWaitingIqcStockIn'
import { FilterOutlined } from '@ant-design/icons'
import WaitingIqcStockInQuery from '../../components/query/material/waitingIqcStockInQuery'
import { ArrowIcon } from '../../components/icons'



export default function WaitingIqcStockIn({ permissions, isMobile }) {
  const { t } = useTranslation()

  // Web Worker Setup
  const workerRef = useRef(null);
  const inputCodeRef = useRef(null);
  const [inputCode, setInputCode] = useState(null);
  const [currentBarcode, setCurrentBarcode] = useState(''); 
  const bufferRef = useRef('');
  useEffect(() => {
    workerRef.current = new Worker(new URL('../../../workers/workerWatingIqcStockIn.js', import.meta.url));

    workerRef.current.onmessage = (event) => {
      setCurrentBarcode(event.data); 
      message.success(`Mã "${event.data}" đã được quét thành công!`);
    };

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && bufferRef.current.trim()) {
        workerRef.current.postMessage({
          barcode: bufferRef.current.trim(),
        });
        bufferRef.current = '';
      } else if (e.key.length === 1) {
        bufferRef.current += e.key;
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);


  return (
    <>
      <Helmet>
        <title>ITM - {t('Waiting Iqc Stock In')}</title>
      </Helmet>
      
      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
  <div
    className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full"
  >
    <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg bg-white">
      <div className="flex items-center justify-between mb-2">
        <Title level={4} className="mt-2 uppercase opacity-85">
          Waiting Iqc Stock In
        </Title>
        <WaitingIqcStockInActions />
      </div>
      <details
        className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-xs font-medium flex items-center gap-2 text-blue-600">
            <FilterOutlined />
            {t('Điều kiện truy vấn')}
          </h2>
          <span className="relative size-5 shrink-0">
            <ArrowIcon />
          </span>
        </summary>
        <div className="flex p-2 gap-4">
          <WaitingIqcStockInQuery
            inputCodeRef={inputCodeRef}
            inputCode={inputCode}
            setInputCode={setInputCode}
          />
        </div>
      </details>
    </div>

    <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg bg-white overflow-auto">
      <TableTransferWaitingIqcStockIn />
    </div>
  </div>
</div>

    </>
  )
}
