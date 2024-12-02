import { useState } from "react";

import { Card, Button, Modal } from 'antd';
import { SaveFilled } from '@ant-design/icons';

import ZebraBrowserPrintWrapper from 'zebra-browser-print-wrapper';
import LabelItem from "./labeldesign";

import { useReactToPrint } from "react-to-print";


export default function BarcodePrintAction({ dataSearch, btnSearch, dataSelect }) {

    const [img, setImg] = useState(null);
    const [zplcode, setZplCode] = useState('');

    const [loading, setLoading] = useState(false);

    const printLabel = async () => {

        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.appendChild(iframe);

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();

        const html = `
            <html>
                <head>
                    <style>
                        body {
                            text-align: center;
                            margin: 0;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                        }
                    </style>
                </head>
                <body>
                    <img
                    src=${imageUrl.onImageGenerated}
                    alt="Label Preview"
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                    }}
                />
                </body>
            </html>
        `;
        console.log(html);
        iframeDoc.write(html);
        iframeDoc.close();

        iframe.contentWindow.focus();
        iframe.contentWindow.print();

        setTimeout(() => document.body.removeChild(iframe), 1000);

    };


    const getZplcode = async function () {

        const res = await fetch("http://localhost:8080/api/v1/label/test?matID=DIO0032&lotNo=RU338144G01")
        if (!res.ok) throw new Error('Failed to fetch data');

        const databody = await res.json();
        const resZplCode = databody.zplCode;

        setZplCode(resZplCode);

    };

    const zplArray = dataSelect.map((data) => {
        return zplcode
            .replace('{BARCODE_DATA}', data.LOT_ID)
            .replace('{CODE}', data.ITEMCD)
            .replace('{LOT}', data.LOTNO)
            .replace('{QTY}', data.QTY)
            .replace('{DC}', data.DATECODE)
            .replace('{REEL}', data.REELNO)
            .replace('{USER_ID}', data.USER_ID)
            .replace('{QR_DATA}', data.LOT_ID);
    });

    const fetchImages = async () => {

        const imageUrls = [];
        for (const zpl of zplArray) {
            const formData = new FormData();
            formData.append('file', zpl);

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'image/png',
                },
                body: formData,
            };

            try {
                const response = await fetch(`http://api.labelary.com/v1/printers/12dpmm/labels/4.94x0.91/0/`, options);

                if (!response.ok) {
                    throw new Error('Error generating preview');
                }

                const blob = await response.blob();
                const url = URL.createObjectURL(blob);

                imageUrls.push(url);
            } catch (error) {
                console.error('Error fetching ZPL preview:', error);
            }
        }


        return imageUrls;
    };

    const printImages = async () => {
        const res = await fetch("http://localhost:8080/api/v1/label/test")
        if (!res.ok) throw new Error('Failed to fetch data');

        const databody = await res.json();
        const resZplCode = databody.zplCode;

        setZplCode(resZplCode);
        const objectUrls = await fetchImages();

        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(`
             <style>
              @page {
                size: 3.94in 0.79in;
                margin: 0 !important;
                padding: 0 !important;
                }
                   html, body {
                        magin: 0 !important;
                        padding:0 !important;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    img {

                        width: auto;
                        height: auto;
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                        page-break-before: always;
                        margin-top:0;
                    }

                    </style>
            `);
        objectUrls.forEach((url) => {
            doc.write(`
                    
                    <img src="${url}" alt="Label">
                    
            `);


        });

        console.log(doc);
        doc.close();
        iframe.onload = () => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
            setTimeout(() => {
                document.body.removeChild(iframe);
                objectUrls.forEach((url) => URL.revokeObjectURL(url));
            }, 1000);
        };
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const printRef = useRef();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = useReactToPrint({
        content: () => printRef.current,
        pageStyle: `
            @page {
                size: 10cm 2cm; 
                margin: 0;
            }
            body {
                margin: 0;
                padding: 0;
            }
        `,


    }
    );

};

const handleCancel = () => {
    setIsModalVisible(false);
};

const printLabel1 = () => {
    showModal(); // Hiển thị popup
};

const btnPrintPop = async () => {
    try {

        const browserPrint = new ZebraBrowserPrintWrapper();
        const defaultPrinter = await browserPrint.getAvailablePrinters();
        console.log("defaultPrinter", defaultPrinter);

        browserPrint.setPrinter(defaultPrinter);


        const printerStatus = await browserPrint.checkPrinterStatus();


        if (printerStatus.isReadyToPrint) {

            const zpl = `^XA
                        ^BY2,2,100
                        ^FO20,20^BC^FD${serial}^FS
                        ^XZ`;

            // browserPrint.print(zpl);

        }
        else {
            console.error("No connect");
        }


    } catch (error) {
        throw new Error(error);
    }




return (
    <div className="mt-1">
        <Card className="mb-2 p-2 shadow-sm" size="small">

            <div className="flex gap-2 justify-end mt-2">

                <Button

                    type={'PRINT' === 'Save' ? 'primary' : 'default'}
                    icon={<SaveFilled />}
                    size="middle"
                    className="uppercase"
                    onClick={printLabel1}
                >
                    PRINT LABEL
                </Button>

                <Button

                    type={'PRINT' === 'Save' ? 'primary' : 'default'}
                    icon={<SaveFilled />}
                    size="middle"
                    className="uppercase"
                    onClick={printImages}
                >
                    PRINT LABEL TEST
                </Button>

                <Button
                    type={'PRINT' === 'Save' ? 'primary' : 'default'}
                    icon={<SaveFilled />}
                    size="middle"
                    className="uppercase"
                    onClick={btnSearch}
                >
                    SEARCH
                </Button>

                <Modal
                    title="Print Label Confirmation"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >

                    <Button
                        type={'PRINT' === 'Save' ? 'primary' : 'default'}
                        icon={<SaveFilled />}
                        size="middle"
                        className="uppercase"
                        onClick={btnPrintPop}
                    >
                        SEARCH
                    </Button>
                    <LabelItem labelData1={data} btnPrint={handleOk} />
                    <p>Are you sure you want to print the label?</p>

                </Modal>


            </div>
        </Card>

    </div>

);
    }