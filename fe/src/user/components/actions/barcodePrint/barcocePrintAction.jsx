import { useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { Card, Button, Modal, Space, Input, Typography, DatePicker, Checkbox, Row, Col, Select } from 'antd';
import { SaveFilled } from '@ant-design/icons';

import ZebraBrowserPrintWrapper from 'zebra-browser-print-wrapper';
import LabelItem from "./labeldesign";
import Printer from 'esc-pos-printer';
import { use } from "i18next";








export default function BarcodePrintAction({
    fromDate,
    setFromDate,
    toDate,
    setToDate,
    vendor,
    setVendor,
    matID,
    setMatID,
    lotNo,
    setLotNo,
    dataSearch,
    btnSearch,
    dataSelect,
    dataInfo,
}) {

    const [zplcode, setZplCode] = useState('');

    const [sizeLabel, setSizeLabel] = useState({

        barCodePosX: Number(0),
        barCodePosY: Number(0),
        barCodeSizeX: Number(0.8),
        barCodeSizeY: Number(20),
        QrPosX: Number(0),
        QrPosY: Number(0),
        QrSizeX: Number(40),
        QrSizeY: Number(0),
        paperSizeX: Number(0),
        paperSizeY: Number(0),

    });

    const [ip, setIP] = useState('');
    const [port, setPort] = useState('');
    const handleFromDate = (date) => {
        setFromDate(date);
    }
    const handleToDate = (date) => {
        setToDate(date);
    }

    const handleChange = (value) => {
        setVendor(value)
      }

    const handleInputChange = (e, field) => {
        setSizeLabel(prevState => ({
            ...prevState,
            [field]: e.target.value
        }));
    };

    const vendorList = [];

    vendorList.push({"label": "MAT", value: "AMT"});

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
                size: 3.94in 1in;
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

    const printRef = useRef({});

    const showModal = () => {
        setTimeout(() => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            const doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();

            const styles = Array.from(document.styleSheets)
                .map(styleSheet => {
                    try {
                        return Array.from(styleSheet.cssRules)
                            .map(rule => rule.cssText)
                            .join('\n');
                    } catch (e) {
                        return '';
                    }
                })
                .join('\n');

            doc.write(`<style>${styles}</style>`);

            doc.write(`
                <style>
                    @page {
                        size: 3.94in 1in;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                 
                }
                </style>
            `);

            const labelHtml = printRef.current.innerHTML;
            doc.write(labelHtml);

            console.log(printRef);
            doc.close();

            iframe.onload = () => {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();

                setTimeout(() => {
                    document.body.removeChild(iframe);
                }, 1000);
            };
        }, 1000);
    };

    const onOk = () => {
        setTimeout(() => {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            const doc = iframe.contentDocument || iframe.contentWindow.document;
            doc.open();

            const styles = Array.from(document.styleSheets)
                .map(styleSheet => {
                    try {
                        return Array.from(styleSheet.cssRules)
                            .map(rule => rule.cssText)
                            .join('\n');
                    } catch (e) {
                        return '';
                    }
                })
                .join('\n');

            doc.write(`<style>${styles}</style>`);

            doc.write(`
                <style>
                    @page {
                        size: 3.94in 1in;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                 
                }
                </style>
            `);

            const tempContainer = document.createElement('div');
            document.body.appendChild(tempContainer);

            ReactDOM.render(
                <>
                    {dataSelect.map((item, index) => (
                        <LabelItem label={item} dataSize={sizeLabel} />
                    ))}
                </>,
                tempContainer
            );
            const labelHtml = tempContainer.innerHTML;

            console.log(labelHtml);
            doc.write(labelHtml);

            doc.close();

            iframe.onload = () => {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();

                setTimeout(() => {
                    document.body.removeChild(iframe);
                }, 1000);
            };
        }, 1000);
    };

    const btnPrintLabel = () => {

    }


    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const btnOpenModal = () => {
        setIsModalVisible(true);
    }

    return (
        <div className="mt-1">
            <Card className="mb-2 p-2 shadow-sm" size="small">

                <Card className="mb-2 p-2 shadow-sm" size="small" >
                    <div className="flex gap-3">
                        <Space direction="vertical" size={6}>
                            <Typography.Text>From date</Typography.Text>
                            <DatePicker
                                value={fromDate}
                                className="w-full"
                                onChange={handleFromDate} />
                        </Space>
                        <Space direction="vertical" size={6}>
                            <Typography.Text>To date</Typography.Text>
                            <DatePicker
                                value={toDate}
                                className="w-full"
                                onChange={handleToDate} />
                        </Space>
                        <Space direction="vertical" size={6}>
                            <Typography.Text>Vendor</Typography.Text>
                            <Select
                                id="typeSelect"
                                defaultValue="All"
                                size="large"
                                style={{
                                    width: 190,
                                }}
                                onChange={handleChange}
                                options={vendorList?.map((item) => ({
                                    label: item?.label,
                                    value: item?.value,
                                }))}
                            />

                        </Space>
                        <Space direction="vertical" size={6}>
                            <Typography.Text>Mat ID</Typography.Text>
                            <Input
                                value={matID}
                                className="w-full bg-blue-50"
                                onChange={(e) => setMatID(e.target.value)} />
                        </Space>
                        <Space direction="vertical" size={6}>
                            <Typography.Text className="text-red-500">Lot No</Typography.Text>
                            <Input
                                value={lotNo}
                                className="w-full bg-blue-50"
                                onChange={(e) => setLotNo(e.target.value)} />

                        </Space>

                        <Space direction="horizontal" size={6}>
                            <Button

                                type={'PRINT' === 'Save' ? 'primary' : 'default'}
                                icon={<SaveFilled />}
                                size="middle"
                                className="uppercase"
                                onClick={btnOpenModal}
                            >
                                PRINT LABEL
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

                        </Space>


                    </div>

                </Card>

                <Card className="mb-2 p-2 shadow-sm" size="small">
                    <Row>
                        <div className="flex gap-3">
                            <Space direction="vertical" size={6}>
                                <Typography.Text>Vendor</Typography.Text>
                                <Input className="w-20 bg-blue-50" />

                            </Space>

                            <Space direction="vertical" size={6}>
                                <Typography.Text>Part No</Typography.Text>
                                <Input className="w-20 bg-blue-50" />

                            </Space>
                            <Space direction="vertical" size={6}>
                                <Typography.Text>Mat ID</Typography.Text>
                                <Input className="w-20 bg-blue-50" value={dataInfo?.ITEMCD} />

                            </Space>
                            <Space direction="vertical" size={6}>
                                <Typography.Text>Lot Total CNT</Typography.Text>
                                <Input className="w-20 bg-blue-50" />

                            </Space>

                            <Space direction="vertical" size={6}>
                                <Typography.Text>Lot No</Typography.Text>
                                <Input className="w-20 bg-blue-50" value={dataInfo?.LOTNO} />

                            </Space>

                            <Space direction="vertical" size={6}>
                                <Typography.Text>QTY</Typography.Text>
                                <Input className="w-20 bg-blue-50" value={dataInfo?.QTY} />

                            </Space>
                            <Space direction="vertical" size={6}>
                                <Typography.Text>Date</Typography.Text>
                                <Input className="w-20 bg-blue-50" value={dataInfo?.DATECODE} />

                            </Space>

                            <Space direction="vertical" size={6}>
                                <Typography.Text>Reel No</Typography.Text>
                                <Input className="w-20 bg-blue-50" value={dataInfo?.REELNO} />

                            </Space>

                            <Space direction="vertical" size={6}>
                                <Typography.Text>UserID</Typography.Text>
                                <Input className="w-20 bg-blue-50" value={dataInfo?.USER_ID} />

                            </Space>
                            <Space direction="vertical" size={6}>
                                <Typography.Text>Issuse NO</Typography.Text>
                                <Input className="w-20 bg-blue-50" />

                            </Space>
                            <Space direction="vertical" size={6}>
                                <Typography.Text>Remark</Typography.Text>
                                <Input className="w-full bg-blue-50" value={dataInfo?.LOT_ID} />
                            </Space>
                        </div>

                    </Row>

                    <Row className="mt-4">
                        <Space direction="horizontal" size={6}>
                            <Typography.Text>1D BARCODE POSITION</Typography.Text>
                            <Input className="w-20 bg-blue-50" value={sizeLabel.barCodePosX} type="number" onChange={(e) => handleInputChange(e, 'barCodePosX')} />
                            <Input className="w-20 bg-blue-50" value={sizeLabel.barCodePosY} type="number" onChange={(e) => handleInputChange(e, 'barCodePosY')} />

                        </Space>

                        <Space direction="horizontal" size={6}>
                            <Typography.Text>1D BARCODE SIZE</Typography.Text>
                            <Input className="w-20 bg-blue-50" value={sizeLabel.barCodeSizeX} type="number" onChange={(e) => handleInputChange(e, 'barCodeSizeX')} />
                            <Input className="w-20 bg-blue-50" value={sizeLabel.barCodeSizeY} type="number" onChange={(e) => handleInputChange(e, 'barCodeSizeY')} />
                        </Space>


                        <Space direction="horizontal" size={6}>
                            <Typography.Text>2D BARCODE POSITION</Typography.Text>
                            <Input className="w-20 bg-blue-50" value={sizeLabel.QrPosX} type="number" onChange={(e) => handleInputChange(e, 'QrPosX')} />
                            <Input className="w-20 bg-blue-50" value={sizeLabel.QrPosY} type="number" onChange={(e) => handleInputChange(e, 'QrPosY')} />

                        </Space>

                        <Space direction="horizontal" size={6}>
                            <Typography.Text>2D BARCODE SIZE</Typography.Text>
                            <Input className="w-20 bg-blue-50" value={sizeLabel.QrSizeX} type="number" onChange={(e) => handleInputChange(e, 'QrSizeX')} />
                            <Input className="w-20 bg-blue-50" value={sizeLabel.QrSizeY} type="number" onChange={(e) => handleInputChange(e, 'QrSizeY')} />
                        </Space>

                        <Space direction="horizontal" size={6}>
                            <Typography.Text>PAPER SIZE</Typography.Text>

                            <Input className="w-20 bg-blue-50" value={sizeLabel.paperSizeX} type="number" onChange={(e) => handleInputChange(e, 'paperSizeX')} />
                            <Input className="w-20 bg-blue-50" value={sizeLabel.paperSizeY} type="number" onChange={(e) => handleInputChange(e, 'paperSizeY')} />

                        </Space>
                        <Button

                            icon={<SaveFilled />}
                            size="middle"
                            className="uppercase"
                            onClick={btnOpenModal}
                        >
                            Preview
                        </Button>

                    </Row>

                </Card>

                <Modal
                    title="Print Label Confirmation"
                    visible={isModalVisible}
                    onOk={btnPrintLabel}
                    onCancel={handleCancel}
                    className="w-2"
                >
                    <Space direction="horizontal" size={6}>
                            <Typography.Text>PRINTER</Typography.Text>

                            <Input className="w-20 bg-blue-50" placeholder="PORT" value={port} onChange={(e) => setPort(e.target.value)} />
                            <Input className="w-50 bg-blue-50" placeholder="IP" value={ip}  onChange={(e) => setIP(e.target.value)} />

                        </Space>
                    <div>
                        <LabelItem label={dataInfo} dataSize={sizeLabel} />
                    </div>


                </Modal>

            </Card>

        </div>

    );
}