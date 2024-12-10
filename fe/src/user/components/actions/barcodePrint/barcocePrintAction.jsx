import { useEffect, useState } from "react";
import { Card, Button, Modal, Space, Input, Typography, DatePicker, Select, Form } from 'antd';
import { SaveFilled } from '@ant-design/icons';

import LabelItem from "./labeldesign";
import { VENDOR_LIST } from "../../../../utils/sysConstants";

export default function BarcodePrintAction({

    formQuery,
    fromDate,
    toDate,

    onFinish,
    onClickPrint,
    isModalVisible,
    onClickCancel,

    optionDevices,
    onDropDownChange,
    handleOnchangeDevice,

    onChangeVendor,
    onClearVendorValue,
    onKeyDownPartNo,
    onKeyDownMatId,
    onKeyDownLotTotalCnt,
    onKeyDownLotNo,
    onKeyDownQty,
    onKeyDownDateCode,
    onKeyDownReelNo,
    onKeyDownUserId,
    onKeyDownRemark,

    partNoRef,
    matIdRef,
    lotNoRef,
    qtyRef,
    dateCodeRef,
    reelNoRef,
    userIdRef,
    remarkRef,
    lotTotalCNTRef,

    formPreview,
    onFinishPreview,
    sizeLabel,
    previewLabel,
    setPreviewLabel,
    label,
    onClickOk

}) {

    const [formSearch] = Form.useForm();

    const setFieldsQuery = () => {

        if (previewLabel){
            formQuery.setFieldsValue({
                matID: previewLabel?.ITEMCD,
                lotNo: previewLabel?.LOTNO,
                qty: previewLabel?.QTY,
                dateCode: previewLabel?.DATECODE,
                userID: previewLabel?.USER_ID,
                reelNo: previewLabel?.REELNO,
              });
    
            formPreview.setFieldsValue({
                barcodePosX: sizeLabel.barCodePosX,
                barcodePosY: sizeLabel.barCodePosY,
                barcodeSizeX: sizeLabel.barCodeSizeX,
                barcodeSizeY: sizeLabel.barCodeSizeY,
                qrcodePosX: sizeLabel.QrPosX,
                qrcodePosY: sizeLabel.QrPosY,
                qrcodeSizeX: sizeLabel.QrSizeX,
                qrcodeSizeY: sizeLabel.QrSizeY,
              });
        }
        setPreviewLabel(null);
    }

    useEffect(() => {
        formSearch.setFieldsValue({ fromDate: fromDate });
        formSearch.setFieldsValue({ toDate: toDate });
        setFieldsQuery();
    }, [fromDate, toDate, setFieldsQuery])


    


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
                                initialValues="All"
                                size="small"

                                style={{
                                    width: 150,
                                }}
                                options={VENDOR_LIST?.map((item) => ({
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
                            <Button type="primary" size="small" htmlType="submit">SEARCH</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={onClickPrint} type="primary" size="small">PRINT</Button>
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
                                initialValues="All"
                                size="small"
                                onChange={onChangeVendor}

                                style={{
                                    width: 150,
                                }}
                                options={VENDOR_LIST?.map((item) => ({
                                    label: item?.label,
                                    value: item?.value,
                                }))}
                                onClear={onClearVendorValue}
                            />

                        </Form.Item>

                        <Form.Item
                            label="Part No"
                            name={"partNo"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownPartNo}
                                ref={partNoRef}

                            />

                        </Form.Item>

                        <Form.Item
                            label="Mat ID"
                            name={"matID"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownMatId}
                                ref={matIdRef}
                            />

                        </Form.Item>

                        <Form.Item
                            label="Lot Total CNT"
                            name={"lotTotalCNT"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownLotTotalCnt} 
                                ref={lotTotalCNTRef}/>
                        </Form.Item>

                        <Form.Item
                            label="Lot No"
                            name={"lotNo"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownLotNo}
                                ref={lotNoRef}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Qty"
                            name={"qty"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownQty}
                                ref={qtyRef} />
                        </Form.Item>

                        <Form.Item
                            label="Date Code"
                            name={"dateCode"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownDateCode}
                                ref={dateCodeRef}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Reel NO"
                            name={"reelNo"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownReelNo}
                                ref={reelNoRef}
                            />
                        </Form.Item>

                        <Form.Item
                            label="User ID"
                            name={"userID"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownUserId}
                                ref={userIdRef}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Issue NO"
                            name={"issueNo"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small" />
                        </Form.Item>
                        <Form.Item
                            label="Remark"
                            name={"remark"}
                            size="small"
                        >
                            <Input
                                placeholder=""
                                size="small"
                                onKeyDown={onKeyDownRemark}
                                ref={remarkRef}
                            />
                        </Form.Item>

                        <Form.Item label="Device Printer" name="device">
                            <Select
                                labelInValue
                                id="typeSelect"
                                initialValues=""
                                size="small"
                                style={{
                                    width: 150,
                                }}
                                allowClear
                                options={optionDevices}
                                onDropdownVisibleChange={onDropDownChange}
                                onChange={handleOnchangeDevice}

                            />
                        </Form.Item>
                    </Form>

                    <Form
                        layout={"inline"}
                        initialValues={{
                            layout: 'inline',
                        }}
                        form={formPreview}
                        style={{
                            maxWidth: 'inline' ? 'none' : 600,
                        }}
                        autoComplete="off"
                        onFinish={onFinishPreview}
                    >
                        <Form.Item label="1D Position" layout={"inline"}>
                            <div className="flex gap-0">
                                <Form.Item name="barcodePosX" style={{ marginBottom: 0 }}>
                                    <Input placeholder="X" size="small" style={{ width: 60 }} type="number" min={0} step={0.1}/>
                                </Form.Item>
                                <Form.Item name="barcodePosY" style={{ marginBottom: 0 }}>
                                    <Input placeholder="Y" size="small" style={{ width: 60 }} type="number" min={0} step={0.1}/>
                                </Form.Item>
                            </div>
                        </Form.Item>

                        <Form.Item label="1D Size" layout={"inline"} >

                            <div className="flex gap-0">
                                <Form.Item name="barcodeSizeX" layout={"inline"} >
                                    <Input placeholder="X"  size="small" style={{ width: 50 }} type="number" min={0} step={0.1}/>
                                </Form.Item>

                                <Form.Item name="barcodeSizeY" layout={"inline"} >
                                    <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0}  step={0.1}/>
                                </Form.Item>
                            </div>

                        </Form.Item>

                        <Form.Item label="2D Position" layout={"inline"}>

                            <div className="flex gap-0">
                                <Form.Item name="qrcodePosX" layout={"inline"} >
                                    <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} step={0.1} />
                                </Form.Item>

                                <Form.Item name="qrcodePosY" layout={"inline"} >
                                    <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} step={0.1}/>
                                </Form.Item>
                            </div>

                        </Form.Item>

                        <Form.Item label="2D Size" layout={"inline"}>
                            <div className="flex gap-0">
                                <Form.Item name="qrcodeSizeX" layout={"inline"} >
                                    <Input placeholder="X" size="small" style={{ width: 50 }} type="number" min={0} step={0.1} />
                                </Form.Item>
                                <Form.Item name="qrcodeSizeY" layout={"inline"} >
                                    <Input placeholder="Y" size="small" style={{ width: 50 }} type="number" min={0} step={0.1}/>
                                </Form.Item>
                            </div>

                        </Form.Item>

                        <Form.Item>
                            <Button
                                icon={<SaveFilled />}
                                size="small"
                                className="uppercase"
                                htmlType="submit"
                            >
                                Preview
                            </Button>
                        </Form.Item>
                    </Form>

                </Card>

                <Modal
                    title="Print Label Confirmation"
                    open={isModalVisible}
                    onOk={onClickOk}
                    onCancel={onClickCancel}
                    className="w-3"
                >
                    <LabelItem label={label} dataSize={sizeLabel} />
                </Modal>

            </Card>

        </div>

    );
}
