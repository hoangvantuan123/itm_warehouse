import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Typography, message, Modal } from 'antd'
const { Title } = Typography
import 'moment/locale/vi'
import WaitingIqcStockInActions from '../../components/actions/material/waitingIqcStockInActions'
import TableTransferWaitingIqcStockIn from '../../components/table/material/tableTransferWaitingIqcStockIn'
import { FilterOutlined } from '@ant-design/icons'
import WaitingIqcStockInQuery from '../../components/query/material/waitingIqcStockInQuery'
import { ArrowIcon } from '../../components/icons'
import CryptoJS from 'crypto-js'
import ModalWaitingIqcStockIn from '../../components/modal/material/modalWaitingIqcStockIn'
import { SMaterialQRCheckWeb } from '../../../features/material/postSMaterialQRCheck'
import ErrorPage from '../../components/modal/default/errorPage'
import { GetSUGGetActiveDeliveryItem } from '../../../features/material/getSUGGetActiveDeliveryItem'
import { debounce } from 'lodash'
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../../utils/constants'
import { CheckAllProceduresStockIn } from '../../../features/material/postCheckAllProceduresStockIn'

const dataB = [
  {
    WHName: 'Warehouse A',
    ItemNo: 'A12345',
    LotNo: 'L001',
    Qty: 100,
    DateCode: '202311',
    ReelNo: 'R001',
    Barcode: '123456789012',
    CreateDate: '2023-11-20',
    RegDate: '2023-11-21',
    YYWW: '2347',
    YYMM: '2311',
    YYMMDD: '231120',
    InvoiceNo: 'INV001',
    BizUnit: 'BU001',
    DateIn: '2023-11-19',
  },
  {
    WHName: 'Warehouse B',
    ItemNo: 'B67890',
    LotNo: 'L002',
    Qty: 200,
    DateCode: '202312',
    ReelNo: 'R002',
    Barcode: '987654321098',
    CreateDate: '2023-12-01',
    RegDate: '2023-12-02',
    YYWW: '2348',
    YYMM: '2312',
    YYMMDD: '231201',
    InvoiceNo: 'INV002',
    BizUnit: 'BU002',
    DateIn: '2023-11-30',
  },
  {
    WHName: 'Warehouse C',
    ItemNo: 'C54321',
    LotNo: 'L003',
    Qty: 150,
    DateCode: '202401',
    ReelNo: 'R003',
    Barcode: '111222333444',
    CreateDate: '2024-01-10',
    RegDate: '2024-01-11',
    YYWW: '2402',
    YYMM: '2401',
    YYMMDD: '240110',
    InvoiceNo: 'INV003',
    BizUnit: 'BU003',
    DateIn: '2024-01-09',
  },
  {
    WHName: 'Warehouse D',
    ItemNo: 'D11223',
    LotNo: 'L004',
    Qty: 300,
    DateCode: '202402',
    ReelNo: 'R004',
    Barcode: '555666777888',
    CreateDate: '2024-02-15',
    RegDate: '2024-02-16',
    YYWW: '2407',
    YYMM: '2402',
    YYMMDD: '240215',
    InvoiceNo: 'INV004',
    BizUnit: 'BU004',
    DateIn: '2024-02-14',
  },
];

export default function WaitingIqcStockIn({ permissions, isMobile }) {
  const { t } = useTranslation()
  const { id } = useParams()
  const workerRef = useRef(null)
  const inputCodeRef = useRef(null)
  const [loading, setLoading] = useState(true)

  const gridRef = useRef(null)
  const [inputCode, setInputCode] = useState(null)
  const [result, setResult] = useState(null);
  const [loadingSave, setLoadingSave] = useState(false)
  const [data, setData] = useState([])
  const bufferRef = useRef('')
  const dataRef = useRef(data)
  const [modal2Open, setModal2Open] = useState(false)
  const [modal3Open, setModal3Open] = useState(false)
  const [error, setError] = useState(null)
  const [scanHistory, setScanHistory] = useState([{
    WHName: 'Warehouse A',
    ItemNo: 'A12345',
    LotNo: 'L001',
    Qty: 100,
    DateCode: '202311',
    ReelNo: 'R001',
    Barcode: '123456789012',
    CreateDate: '2023-11-20',
    RegDate: '2023-11-21',
    YYWW: '2347',
    YYMM: '2311',
    YYMMDD: '231120',
    InvoiceNo: 'INV001',
    BizUnit: 'BU001',
    DateIn: '2023-11-19',
  },
  {
    WHName: 'Warehouse B',
    ItemNo: 'B67890',
    LotNo: 'L002',
    Qty: 200,
    DateCode: '202312',
    ReelNo: 'R002',
    Barcode: '987654321098',
    CreateDate: '2023-12-01',
    RegDate: '2023-12-02',
    YYWW: '2348',
    YYMM: '2312',
    YYMMDD: '231201',
    InvoiceNo: 'INV002',
    BizUnit: 'BU002',
    DateIn: '2023-11-30',
  },
  {
    WHName: 'Warehouse C',
    ItemNo: 'C54321',
    LotNo: 'L003',
    Qty: 150,
    DateCode: '202401',
    ReelNo: 'R003',
    Barcode: '111222333444',
    CreateDate: '2024-01-10',
    RegDate: '2024-01-11',
    YYWW: '2402',
    YYMM: '2401',
    YYMMDD: '240110',
    InvoiceNo: 'INV003',
    BizUnit: 'BU003',
    DateIn: '2024-01-09',
  },
  {
    WHName: 'Warehouse D',
    ItemNo: 'D11223',
    LotNo: 'L004',
    Qty: 300,
    DateCode: '202402',
    ReelNo: 'R004',
    Barcode: '555666777888',
    CreateDate: '2024-02-15',
    RegDate: '2024-02-16',
    YYWW: '2407',
    YYMM: '2402',
    YYMMDD: '240215',
    InvoiceNo: 'INV004',
    BizUnit: 'BU004',
    DateIn: '2024-02-14',
  },])
  const dataRefSacenHistory = useRef(scanHistory)
  const [status, setStatus] = useState(false)
  const [filteredData, setFilteredData] = useState(null)
  const [YYWW, setYYWW] = useState(null)
  const [YYYYMM, setYYYYMM] = useState(null)
  const secretKey = 'TEST_ACCESS_KEY'

  const Format = useCallback((date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }, []);

  const DateIn = Format(new Date())

  const fetchDeliveryData = async (delvNo, purchaseType) => {
    try {
      setLoading(true)
      const response = await GetSUGGetActiveDeliveryItem(delvNo, purchaseType)
      setData(response?.data || [])
    } catch (error) {
      setData([])
    } finally {
      setLoading(false)
    }
  }

  const decodeBase64Url = (base64Url) => {
    try {
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const padding =
        base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4))
      return base64 + padding
    } catch (error) {
      throw new Error('Invalid Base64 URL')
    }
  }

  const decryptData = (encryptedToken) => {
    try {
      const base64Data = decodeBase64Url(encryptedToken)
      const bytes = CryptoJS.AES.decrypt(base64Data, secretKey)
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
      return JSON.parse(decryptedData)
    } catch (error) {
      setModal3Open(true)
      return null
    }
  }

  useEffect(() => {
    if (id) {
      const data = decryptData(id)
      if (data) {
        setFilteredData(data)
        fetchDeliveryData(data?.DelvNo, data?.PurchaseType)
      }
    }
  }, [id])

  useEffect(() => {
    dataRef.current = data
    dataRefSacenHistory.current = scanHistory
  }, [data, scanHistory])

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../../../workers/workerWatingIqcStockIn.js', import.meta.url),
    )

    workerRef.current.onmessage = async (event) => {
      const { success, message: resultMessage, data: resultData } = event.data
      if (success) {
        if (resultData) {
          const { itemNo, qty, lot, dc, reel, barcode, permitSerl, permitSeq } =
            resultData

          const formData = {
            workingTag: 'A',
            idx_no: '1',
            status: '0',
            dataSeq: '1',
            selected: '1',
            permitSeq: permitSeq,
            permitSerl: permitSerl,
            bizUnit: filteredData?.BizUnit,
            bizUnitName: filteredData?.BizUnitName,
            sMImpKind: filteredData?.ImpType,
            sMImpKindName: filteredData?.PurchaseType,
            itemNo: itemNo,
            lotNo: lot,
            qty: qty,
            dateCode: dc,
            reelNo: reel,
            barcode: barcode,
          }
          const resSuccess = await SMaterialQRCheckWeb(formData)
          if (resSuccess.success) {
            const dataResSuccess = resSuccess.data[0]
            message.success(resultMessage)
            setYYWW(dataResSuccess?.YYWW)
            setYYYYMM(dataResSuccess?.YYMM)
            setData((prevData) =>
              prevData.map((item) =>
                item.ItemNo === itemNo
                  ? {
                    ...item,
                    OkQty: item.OkQty + qty,
                    RemainQty: item.RemainQty - qty,
                  }
                  : item,
              ),
            )

            setScanHistory((prevHistory) => [
              ...prevHistory,
              {
                SMImpKind: dataResSuccess?.SMImpKind,
                ItemNo: dataResSuccess?.ItemNo,
                LotNo: dataResSuccess?.LotNo,
                Qty: dataResSuccess?.Qty,
                DateCode: dataResSuccess?.DateCode,
                ReelNo: dataResSuccess?.ReelNo,
                Barcode: dataResSuccess?.Barcode,
                ItemSeq: dataResSuccess?.ItemSeq,
                WHSeq: dataResSuccess?.WHSeq,
                WHName: dataResSuccess?.WHName,
                CreateDate: dataResSuccess?.CreateDate,
                RegDate: dataResSuccess?.RegDate,
                YYWW: dataResSuccess?.YYWW,
                YYMM: dataResSuccess?.YYMM,
                YYMMDD: dataResSuccess?.YYMMDD,
                InvoiceNo: dataResSuccess?.InvoiceNo,
                PermitSerl: dataResSuccess?.PermitSerl,
                PermitSeq: dataResSuccess?.PermitSeq,
                EmpSeq: dataResSuccess?.EmpSeq,
                EmpName: dataResSuccess?.EmpName,
                DeptSeq: dataResSuccess?.DeptSeq,
                DeptName: dataResSuccess?.DeptName,
                CurrSeq: dataResSuccess?.CurrSeq,
                CurrName: dataResSuccess?.CurrName,
                ExRate: dataResSuccess?.ExRate,
                Price: dataResSuccess?.Price,
                CurAmt: dataResSuccess?.CurAmt,
                DomPrice: dataResSuccess?.DomPrice,
                DomAmt: dataResSuccess?.DomAmt,
                LotNoFull: dataResSuccess?.LotNoFull,
                StdUnitSeq: dataResSuccess?.StdUnitSeq,
                STDUnitName: dataResSuccess?.STDUnitName,
                UnitSeq: dataResSuccess?.UnitSeq,
                UnitName: dataResSuccess?.UnitName,
                CustSeq: dataResSuccess?.CustSeq,
                CustName: dataResSuccess?.CustName,
                ItemName: dataResSuccess?.ItemName,
                Spec: dataResSuccess?.Spec,
                DateIn: dataResSuccess?.DateIn,
                StdQty: dataResSuccess?.StdQty,
                FromAmt: dataResSuccess?.FromAmt,
                FromVAT: dataResSuccess?.FromVAT,
                BizUnit: dataResSuccess?.BizUnit,
                SMImpKindName: dataResSuccess?.SMImpKindName,
                PermitNo: dataResSuccess?.PermitNo
              },
            ])
          } else {
            setModal2Open(true)
            setError(resSuccess?.message)
          }
        }
      } else {
        setModal2Open(true)
        setError(resultMessage)
      }
    }

    return () => {
      workerRef.current.terminate()
    }
  }, [filteredData])

  const handleCheckBarcode = (barcode) => {
    workerRef.current.postMessage({
      type: 'CHECK_BARCODE',
      barcode,
      tableData: dataRef.current,
      tableScanHistory: dataRefSacenHistory.current,
    })
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && bufferRef.current.trim()) {
        const barcode = bufferRef.current.trim();
        handleCheckBarcode(barcode);
        setInputCode(barcode);
        bufferRef.current = '';
      } else if (e.key.length === 1) {
        bufferRef.current += e.key;
      }
    };
  
    const handleFocus = () => setStatus(true);
  
    const handleBlur = () => setStatus(false);
  
    const handleClick = () => setStatus(true);
  
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('click', handleClick);
  
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('click', handleClick);
    };
  }, []);
  

  /* SAVE */
  const createXmlDataCloseCheck = (data) => {
    return `
          <DataBlock1>
              <WorkingTag>A</WorkingTag>
              <IDX_NO>1</IDX_NO>
              <Status>0</Status>
              <DataSeq>1</DataSeq>
              <Selected>1</Selected>
              <TABLE_NAME>DataBlock1</TABLE_NAME>
              <IsChangedMst>1</IsChangedMst>
              <BizUnit>${data.BizUnit}</BizUnit>
              <Date>${DateIn}</Date>
              <DeptSeq>${data.DeptSeq}</DeptSeq>
              <ServiceSeq>4492</ServiceSeq> 
              <MethodSeq>2</MethodSeq>
              <DtlUnitSeq>1</DtlUnitSeq>
          </DataBlock1>
      `
  }
  const createXmlDataMasterCheck = (data) => {
    return `
          <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>1</IDX_NO>
    <Status>0</Status>
    <DataSeq>1</DataSeq>
    <Selected>1</Selected>
    <TABLE_NAME>DataBlock1</TABLE_NAME>
    <IsChangedMst>1</IsChangedMst>
    <DelvNo /> 
    <BLNo /> 
    <BizUnit>${data[0].BizUnit}</BizUnit> 
    <BizUnitName>${data[0].BizUnitName}</BizUnitName>
    <SMImpKind>${data[0].SMImpKind}</SMImpKind>
    <SMImpKindName>${data[0].SMImpKindName}</SMImpKindName> 
    <CustSeq>${data[0].CustSeq}</CustSeq> 
    <CustName>${data[0].CustName}</CustName> 
    <PermitNo>${data[0].PermitNo}</PermitNo>
    <DelvSeq>0</DelvSeq> 
    <DelvDate>${data[0].DateIn}</DelvDate>
    <EmpSeq>${data[0].EmpSeq}</EmpSeq>
    <EmpName>${data[0].EmpName}</EmpName>
    <DeptSeq>${data[0].DeptSeq}</DeptSeq>
    <DeptName>${data[0].DeptName}</DeptName>
    <CurrSeq>${data[0].CurrSeq}</CurrSeq>
    <CurrName>${data[0].CurrName}</CurrName>
    <ExRate>${data[0].ExRate}</ExRate>
    <Remark>${data[0].InvoiceNo}</Remark>
    <IsPJT>0</IsPJT>
  </DataBlock1>
      `
  }


  const createXmlDataBlock = (row, index) => `
  <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <ServiceSeq>4492</ServiceSeq> 
    <MethodSeq>2</MethodSeq>
    <BizUnit>${row?.BizUnit}</BizUnit> 
    <Date>${row?.DateIn}</Date>
    <DeptSeq>${row?.DeptSeq}</DeptSeq> 
    <BizUnitOld>${row?.BizUnit}</BizUnitOld>
    <DateOld>${row?.DateIn}</DateOld> 
    <DeptSeqOld>${row?.DeptSeq}</DeptSeqOld> 
  </DataBlock2>
`;


  const createXmlDataBlock2 = (row, index) => `
    <DataBlock2>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected>
    <PJTSeq>0</PJTSeq>
    <WBSSeq>0</WBSSeq>
    <ItemName>${row?.ItemName}</ItemName>
    <ItemNo>${row?.ItemNo}</ItemNo>
    <Spec>${row?.Spec}</Spec>
    <MakerName />
    <MakerSeq>0</MakerSeq>
    <UnitName>${row?.UnitName}</UnitName>
    <Qty>${row?.Qty}</Qty>
    <Price>${row?.Price}</Price>
    <CurAmt>${row?.CurAmt}</CurAmt>
    <DomAmt>${row?.DomAmt}</DomAmt>
    <WHName>${row?.WHName}</WHName>
    <LotNo>${row?.LotNo}</LotNo>
    <FromSerlNo />
    <ToSerlNo />
    <ProdDate />
    <STDUnitName>${row?.STDUnitName}</STDUnitName>
    <STDQty>${row?.StdQty}</STDQty>
    <DelvSerl />
    <ItemSeq>${row?.ItemSeq}</ItemSeq>
    <UnitSeq>${row?.UnitSeq}</UnitSeq>
    <STDUnitSeq>${row?.StdUnitSeq}</STDUnitSeq>
    <AccName />
    <OppAccName />
    <WHSeq>${row?.WHSeq}</WHSeq>
    <IsQtyChange />
    <Remark />
    <Memo1 />
    <Memo2 />
    <Memo3 />
    <Memo4 />
    <Memo5 />
    <Memo6 />
    <Memo7>0</Memo7>
    <Memo8>0</Memo8>
    <TABLE_NAME>DataBlock2</TABLE_NAME>
    <BizUnit>${row?.BizUnit}</BizUnit>
    <DelvDate>${row?.DateIn}</DelvDate>
    <DelvSeq></DelvSeq>
  </DataBlock2>

`;
  const createXmlDataBlock3 = (row, index) => `
   <DataBlock1>
    <WorkingTag>A</WorkingTag>
    <IDX_NO>${index + 1}</IDX_NO>
    <DataSeq>${index + 1}</DataSeq>
    <Status>0</Status>
    <Selected>0</Selected> 
    <Spec>${row?.Spec}</Spec>
    <CustSeq>${row?.CustSeq}</CustSeq>
    <Qty>${row?.Qty}</Qty>
    <LotNo>${row?.LotNoFull}</LotNo>
    <CreateDate>${row?.CreateDate}</CreateDate>
    <ItemSeq>${row?.ItemSeq}</ItemSeq>
    <UnitSeq>${row?.UnitSeq}</UnitSeq>
    <ItemSeqOld>0</ItemSeqOld>
    <LotNoOLD/>
    <TABLE_NAME>DataBlock1</TABLE_NAME> 
    <RegDate>${row?.RegDate}</RegDate>
    <InNo>${row?.InvoiceNo}</InNo>
    <SupplyCustSeq>${row?.CustSeq} </SupplyCustSeq>
  </DataBlock1>
`;


  /* const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoadingSave(true);
    setResult(null);

    const xmlForCloseCheck = createXmlDataCloseCheck(filteredData);
    const xmlForCloseItemCheck = scanHistory.map(createXmlDataBlock).join('\n');
    const xmlForMasterCheck = createXmlDataMasterCheck(scanHistory);
    const xmlForSheetCheck = scanHistory.map(createXmlDataBlock2).join('\n');
    const xmlForLotNoMasterCheck = scanHistory.map(createXmlDataBlock3).join('\n');

    try {
      const response = await CheckAllProceduresStockIn(scanHistory, {
        closeCheckXML: xmlForCloseCheck,
        closeItemCheckXML: xmlForCloseItemCheck,
        masterCheckXML: xmlForMasterCheck,
        sheetCheckXML: xmlForSheetCheck,
        sheetLotNoMasterCheckXML: xmlForLotNoMasterCheck,
      });
      console.log("response", response)
      setResult(response);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoadingSave(false);
    }
  }, [filteredData, scanHistory]); */


  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoadingSave(true);
    setResult(null);
    if (scanHistory.length === 0) {
      setModal2Open(true); 
      setError("Chưa có dữ liệu để gửi. Vui lòng quét dữ liệu trước khi gửi."); 
      return; 
    }
    const xmlForCloseCheck = createXmlDataCloseCheck(filteredData);
    const xmlForCloseItemCheck = scanHistory.map(createXmlDataBlock).join('\n');
    const xmlForMasterCheck = createXmlDataMasterCheck(scanHistory);
    const xmlForSheetCheck = scanHistory.map(createXmlDataBlock2).join('\n');
    const xmlForLotNoMasterCheck = scanHistory.map(createXmlDataBlock3).join('\n');

    try {
      const response = await CheckAllProceduresStockIn(scanHistory, {
        closeCheckXML: xmlForCloseCheck,
        closeItemCheckXML: xmlForCloseItemCheck,
        masterCheckXML: xmlForMasterCheck,
        sheetCheckXML: xmlForSheetCheck,
        sheetLotNoMasterCheckXML: xmlForLotNoMasterCheck,
      });

      setResult(response);
      if (response.success) {
        message.success('Tất cả các quy trình đã được thực thi thành công!');
        setScanHistory([])
      } else {
        message.error(`Lỗi: ${response.message}`);
      }
    } catch (error) {
      setResult({ error: error.message });
      setModal2Open(true)
      setError(error.message)
    } finally {
      setLoadingSave(false);
    }
  }, [filteredData, scanHistory]);

  const handleDelete = () => {
    if (gridRef.current) {
      const gridInstance = gridRef.current.getInstance(); 
      const selectedRows = gridInstance.getCheckedRows(); 
      const remainingRows = scanHistory.filter(
        (row) => !selectedRows.find((selectedRow) => selectedRow.Barcode === row.Barcode)
      );
      setScanHistory(remainingRows);
    }
  };
  const handleRestFrom = () => {
    if (scanHistory.length === 0) {
      setModal2Open(true)
      setError('Không có dữ liệu để reset! Vui lòng quét dữ liệu trước.')
      return; 
    }
  
    setScanHistory([]);
    fetchDeliveryData();
    message.success('Reset form thành công!');
  };
  
  const handleUploadExcel = () =>{
    setModal2Open(true)
    setError('Chức năng đang trong quá trình phát triển?')
  }
  return (
    <>
      <Helmet>
        <title>ITM - {t('Waiting Iqc Stock In')}</title>
      </Helmet>

      <div className="bg-slate-50 p-3 h-screen overflow-hidden">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-4 h-full">
          <div className="col-start-1 col-end-5 row-start-1 w-full rounded-lg ">
            <div className="flex items-center justify-between mb-2">
              <Title level={4} className="mt-2 uppercase opacity-85">
                Waiting Iqc Stock In
              </Title>
              <WaitingIqcStockInActions
                status={status}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleRestFrom={handleRestFrom}
                handleUploadExcel={handleUploadExcel}
              />
            </div>
            <details
              className="group p-2 [&_summary::-webkit-details-marker]:hidden border rounded-lg bg-white"
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
                <WaitingIqcStockInQuery    filteredData={filteredData}  YYWW={YYWW} YYYYMM={YYYYMM}/>
              </div>
            </details>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg  overflow-auto">
            <TableTransferWaitingIqcStockIn
              sampleTableA={data}
              sampleTableB={scanHistory}
              handleDelete={handleDelete}
              gridRefA={gridRef}
            />
          </div>
        </div>
      </div>
      <ModalWaitingIqcStockIn
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
        error={error}
      />
      <ErrorPage modal3Open={modal3Open} setModal3Open={setModal3Open} />
    </>
  )
}
