import { useCallback, useEffect, useRef, useState } from "react";
import { Card, Button, Modal, Space, Input, Typography, DatePicker, Select, message, Form } from 'antd';
import { SaveFilled } from '@ant-design/icons';

import LabelItem from "./labeldesign";
import { CreatePrintLabel } from "../../../../features/barcode/printBarcodeService";
import { useForm } from "antd/es/form/Form";



export default function BarcodePrintAction({
    fromDate,
    toDate,
    onFinish,
    onChangeVendor,
    btnPrinter,
    rowSelects,
    setRowChecked,
}) {

    const [formSearch] = Form.useForm();
    const [formQuery] = Form.useForm();
    formSearch.setFieldsValue({ fromDate: fromDate });
    formSearch.setFieldsValue({ toDate: toDate });


    useEffect(() => {
    }, [fromDate, toDate])

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


    const [newLabel, setNewLabel] = useState({

        VENDOR: '',
        PARTNO: '',
        ITEMCD: '',
        LOTTOTALCNT: Number(0),
        LOTNO: '',
        QTY: Number(0),
        DATECODE: Number(),
        REELNO: '',
        USER_ID: '',
        REMARK: '',
        ISSUENO: '',
        LOTID: ''

    });

    const handleInputNewLabel = (e, field) => {
        setNewLabel(prevState => ({
            ...prevState,
            [field]: e.target.value
        }));
    };

    

    const handleInputChange = (e, field) => {
        setSizeLabel(prevState => ({
            ...prevState,
            [field]: e.target.value
        }));
    };

    const vendorList = [];
    vendorList.push({ label: "NEXPERIA", value: "NEXPERIA" });
    vendorList.push({ label: "PANASONIC", value: "PANASONIC" });
    vendorList.push({ label: "ALPHA OMEGA", value: "ALPHA OMEGA" });
    vendorList.push({ label: "TEXAS INSTRUMENT", value: "TEXAS INSTRUMENT" });
    vendorList.push({ label: "INFINEON", value: "INFINEON" });
    vendorList.push({ label: "MITSUMI", value: "MITSUMI" });
    vendorList.push({ label: "ABLIC", value: "ABLIC" });
    vendorList.push({ label: "SMK", value: "SMK" });
    vendorList.push({ label: "NISSHINBO", value: "NISSHINBO" });


    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const btnOpenModal = () => {
        setIsModalVisible(true);
        btnPrinter();
    }

    const btnOpenModalPreview = () => {
        setIsModalVisible(true);
        setRowChecked(null);
        let LOTID = newLabel.ITEMCD + '/' + newLabel.LOTNO + '/' + newLabel.QTY + '/' + newLabel.DATECODE + '/' + newLabel.REELNO;

        setNewLabel(prevState => {
            const updatedLabel = {
                ...prevState,
                LOT_ID: LOTID,
            };

            setRowChecked([updatedLabel]);

            return updatedLabel;
        });

    };


    const postPrint = useCallback(async () => {

        const dataPost = {
            data: rowSelects,
            newLabel: newLabel
        }

        try {
            const itemList = await CreatePrintLabel(
                dataPost
            );
        } catch (error) {
            message.error("Kiểm tra kết nối máy in !");
        }
    }, [rowSelects])

    const handleBtnConfirm = () => {
        postPrint();
    }

    return (
        <div className="mt-1">
            <Card className="mb-1 p-1 shadow-sm" size="small">

                <Card className="mb-1 p-1 shadow-sm" size="small" >

                    <Form
                        layout={"inline"}
                        initialValues={{
                            layout: 'inline',
                        }}
                        form={formSearch}
                        onFinish={onFinish}

                        style={{
                            maxWidth: 'inline' ? 'none' : 600,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="From Date"
                            name={"fromDate"}
                        >
                            <DatePicker size="small" />
                        </Form.Item>

                        <Form.Item
                            label="To Date"
                            name={"toDate"}
                        >
                            <DatePicker size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Vendor"
                            name={"vendor"}
                            size="small"
                        >
                            <Select
                                labelInValue
                                allowClear
                                id="typeSelect"
                                defaultValue="All"
                                size="small"

                                style={{
                                    width: 150,
                                }}
                                onChange={onChangeVendor}
                                options={vendorList?.map((item) => ({
                                    label: item?.label,
                                    value: item?.value,
                                }))}
                            />

                        </Form.Item>

                        <Form.Item
                            label="Mat ID"
                            name={"matID"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Lot No"
                            name={"lotNo"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={btnOpenModal} type="primary" size="small">PRINT</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size="small" htmlType="submit">SEARCH</Button>
                        </Form.Item>

                    </Form>
                </Card>

                <Card className="mb-1 p-1 shadow-sm" size="small">

                    <Form
                        layout={"inline"}
                        initialValues={{
                            layout: 'inline',
                        }}
                        form={formQuery}

                        style={{
                            maxWidth: 'inline' ? 'none' : 600,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Vendor"
                            name={"vendor"}
                            size="small"
                        >
                            <Select
                                labelInValue
                                allowClear
                                id="vendorSelect"
                                defaultValue="All"
                                size="small"

                                style={{
                                    width: 150,
                                }}
                                onChange={onChangeVendor}
                                options={vendorList?.map((item) => ({
                                    label: item?.label,
                                    value: item?.value,
                                }))}
                            />

                        </Form.Item>

                        <Form.Item
                            label="Part No"
                            name={"partNo"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />

                        </Form.Item>

                        <Form.Item
                            label="Part No"
                            name={"partNo"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />

                        </Form.Item>

                        <Form.Item
                            label="Mat ID"
                            name={"matID"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />

                        </Form.Item>

                        <Form.Item
                            label="Lot Total CNT"
                            name={"lotTotalCNT"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Lot No"
                            name={"lotNo"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Qty"
                            name={"qty"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Date Code"
                            name={"dateCode"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Reel NO"
                            name={"reelNo"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="User ID"
                            name={"userID"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item
                            label="Issue NO"
                            name={"issueNo"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>
                        <Form.Item
                            label="Remark"
                            name={"remark"}
                            size="small"
                        >
                            <Input placeholder="" size="small" />
                        </Form.Item>

                        <Form.Item label="1D Position" layout={"inline"}>
                            <Form.Item name="barcodePosX" layout={"inline"}>
                                <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>
                            <Form.Item name="barcodePosY" layout={"inline"} >
                                <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="1D Size" layout={"inline"} >

                            <Form.Item name="barcodeSizeX" layout={"inline"} >
                                <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>

                            <Form.Item name="barcodeSizeY" layout={"inline"} >
                                <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="2D Position" layout={"inline"}>

                            <Form.Item name="qrcodePosX" layout={"inline"} >
                                <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>

                            <Form.Item name="qrcodePosY" layout={"inline"} >
                                <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="2D Size" layout={"inline"}>
                            <Form.Item name="qrcodeSizeX" layout={"inline"} >
                                <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>
                            <Form.Item name="qrcodeSizeY" layout={"inline"} >
                                <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                icon={<SaveFilled />}
                                size="small"
                                className="uppercase"
                                onClick={btnOpenModalPreview}
                            >
                                Preview
                            </Button>
                        </Form.Item>

                    </Form>

                </Card>

                <Modal
                    title="Print Label Confirmation"
                    visible={isModalVisible}
                    onOk={handleBtnConfirm}
                    onCancel={handleCancel}
                    className="w-3"
                >
                    <Space direction="horizontal" size={6}>
                        <Typography.Text>PRINTER</Typography.Text>
                        <Input className="w-20 bg-blue-50" placeholder="PORT" required={true} onChange={(e) => setPort(e.target.value)} />
                        <Input className="w-50 bg-blue-50" placeholder="IP" required={true} onChange={(e) => setIP(e.target.value)} />
                    </Space>

                    {rowSelects?.map((item, index) => (
                        <div key={index}>
                            <LabelItem label={item} dataSize={sizeLabel} />
                        </div>
                    ))}
                </Modal>

            </Card>

        </div>

    );
}