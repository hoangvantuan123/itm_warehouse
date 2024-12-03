import { useState } from 'react'
import {
    Button,
    Form,
    Input,
    Row,
    Col,
    DatePicker,
    Segmented,
    Select,
} from 'antd'
import moment from 'moment'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

const dateFormat = 'YYYY/MM/DD'
const weekFormat = 'MM/DD'
const monthFormat = 'YYYY/MM'

export default function StockOutRequestQuery({
    formData,
    setFormData,
    setToDate,
    toDate,
    dataUnit, 
    setBizUnit, 
    handleSearch1,
    handleSearch2,
    handleSearch3,
    setModalVisible1,
    loadingCodeHelp,
    modalVisible1,
}) {
    const handleFormDate = (date) => {
        setFormData(date)
    }
    const handletoDate = (date) => {
        setToDate(date)
    }
    const handleChange = (value) => {
        setBizUnit(value)
    }
    return (
        <div className="flex items-center gap-2">
            <Form layout="vertical">
                <Row className="gap-4 flex items-center ">
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Ngày yêu cầu 1</span>}
                            className="mb-0"
                        >
                            <DatePicker
                                className="w-full text-sm p-2"
                                value={formData}
                                onChange={handleFormDate}
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Ngày yêu cầu 2</span>}
                            className="mb-0"
                        >
                            <DatePicker
                                className="w-full text-sm p-2"
                                value={toDate}
                                onChange={handletoDate}
                                format="YYYY-MM-DD"
                            />
                        </Form.Item>
                    </Col>

                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Nơi sản xuất</span>}
                            className="mb-0"
                        >
                            <Select
                                id="typeSelect"
                                defaultValue="All"
                                size="large"
                                style={{
                                    width: 190,
                                }}
                                onChange={handleChange}
                                options={dataUnit?.map((item) => ({
                                    label: item?.AccUnitName,
                                    value: item?.BizUnit,
                                }))}
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Bộ phận yêu cầu</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2 bg-blue-50"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch1()
                                    }
                                  }}
                                  onDoubleClick={handleSearch1}
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Người yêu cầu</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                 className=" text-sm p-2 bg-blue-50"
                                 onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch2()
                                    }
                                  }}
                                  onDoubleClick={handleSearch2}
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Khách hàng</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2 bg-blue-50"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearch3()
                                    }
                                  }}
                                  onDoubleClick={handleSearch3}
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Số yêu cầu</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Số yêu cầu</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Số kế hoạch</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Số lệnh sản xuất</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-[10px]">Phân loại kho</span>}
                            className="mb-0"
                        >
                            <Select
                                id="typeSelect"
                                defaultValue="All"
                                size="large"
                                style={{
                                    width: 190,
                                }}

                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
