import { useCallback, useRef, useState } from "react";
import { Card, Button, Modal, Space, Input, Typography, DatePicker, Checkbox, Row, Col, Select, message, Form, Radio } from 'antd';

import { CreatePrintLabel } from "../../../../features/barcode/printBarcodeService";

export default function BarcodeChangeAction({
    // fromDate,
    // toDate,
    setNewDataAction,
    onFinish,
    onChangeBarcode,
    btnOpenModal,
    isModalVisible,
    handleBtnConfirm,
    handleCancel,

    formChange,
    onChangeQty,
    onChangeNewQty,
    oldQty,
    newQty,
}) {
    const [form] = Form.useForm();
    const [formPopup] = Form.useForm();

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

    const [ip, setIP] = useState('');
    const [port, setPort] = useState('');








    const postPrint = useCallback(async () => {

        const dataPost = {
            ip,
            port,
            newLabel: newLabel
        }

        try {
            const itemList = await CreatePrintLabel(
                dataPost
            );
        } catch (error) {
            message.error("Kiểm tra kết nối máy in !");
        }
    }, [ip, port])



    const onFormLayoutChange = ({ layout }) => {
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinishModal = (values) => {

    }

    console.log("oldQty", oldQty)

    return (
        <div className="mt-1">
            <Card className="mb-1 p-1 shadow-sm" size="small">

                <Card className="mb-1 p-1 shadow-sm" size="small" >
                    <Form
                        layout={'inline'}
                        form={form}
                        initialValues={{
                            layout: 'inline',
                        }}

                        style={{
                            maxWidth: 'inline' ? 'none' : 600,
                        }}

                        onFinish={onFinish}

                        autoComplete="off"
                    >
                        <Form.Item label="From Date" name="fromDate">
                            <DatePicker size="small" />
                        </Form.Item>

                        <Form.Item label="To Date" name="toDate">
                            <DatePicker size="small" />
                        </Form.Item>

                        <Form.Item label="Barcode" name="barcode">
                            <Input placeholder="" size="small" />
                        </Form.Item>
                        <Form.Item label="Mat ID" name="matID">
                            <Input placeholder="" size="small" />
                        </Form.Item>
                        <Form.Item label="Lot No" name="lotNo" >
                            <Input placeholder="" size="small" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="small" htmlType="submit">SEARCH</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={btnOpenModal} type="primary" size="small">PRINT</Button>
                        </Form.Item>
                    </Form>

                </Card>

                <Card className="mb-1 p-1 shadow-sm" size="small">
                    <Form
                        layout={'inline'}
                        form={formChange}
                        initialValues={{
                            layout: 'inline',
                        }}
                        onValuesChange={onFormLayoutChange}
                        style={{
                            maxWidth: 'inline' ? 'none' : 600,
                        }}

                        // onFinish={btnOpenModal}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item label="Barcode" name="oldBarcode">
                            <Input placeholder="" size="small" onChange={onChangeBarcode} />
                        </Form.Item>
                        <Form.Item label="Pre QTY" name="preQty">
                            <Input 
                            placeholder="" 
                            size="small" 
                            type="number" 
                            min={0}
                            disabled={true}
                            />
                        </Form.Item>
                        <Form.Item label="Change QTY" name="changeQty">
                            <Input 
                            placeholder="" 
                            size="small" 
                            type="number" 
                            min={0} 
                            onChange={onChangeQty}/>
                        </Form.Item>
                        <Form.Item label="QTY" name="qty">
                            <Input 
                            placeholder="" 
                            size="small" 
                            type="number" 
                            min={0} 
                            value={newQty}
                            disabled={true}
                            onChange={onChangeNewQty}/>
                        </Form.Item>

                        <Form.Item label="Remark" name="remark">
                            <Input placeholder="" size="small" />
                        </Form.Item>
                        <Form.Item label=" User ID" name="userID">
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

                    </Form>

                </Card>

                <Modal
                    title="Print Label Confirmation"
                    visible={isModalVisible}
                    onOk={handleBtnConfirm}
                    onCancel={handleCancel}
                    className="w-3"
                >

                    <Form
                        layout={'inline'}
                        form={formPopup}
                        initialValues={{
                            layout: 'inline',
                        }}
                        onValuesChange={onFormLayoutChange}
                        style={{
                            maxWidth: 'inline' ? 'none' : 600,
                        }}

                        onFinish={onFinishModal}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >

                        <Form.Item label="IP" name="ip" layout={"inline"} >
                            <Input size="small" style={{ width: 100 }} />
                        </Form.Item>
                        <Form.Item label="Port" name="port" layout={"inline"} >
                            <Input size="small" style={{ width: 100 }} />
                        </Form.Item>

                        <Form.Item label="Barcode" name="oldBarcode" layout={"inline"} >
                            <Input size="small" style={{ width: 100 }} />
                        </Form.Item>

                        <Form.Item label="New Barcode" name="newBarcode" layout={"inline"} >
                            <Input size="small" style={{ width: 100 }} />
                        </Form.Item>

                        <Form.Item label="Barcode Confirm" name="cfBarcode" layout={"inline"} >
                            <Input size="small" style={{ width: 100 }} />
                        </Form.Item>
                    </Form>

                </Modal>

            </Card>

        </div>

    );
}