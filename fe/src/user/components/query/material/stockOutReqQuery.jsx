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
    setBizUnit
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
                            label={<span className="uppercase text-xs">Ngày yêu cầu 1</span>}
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
                            label={<span className="uppercase text-xs">Ngày yêu cầu 2</span>}
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
                            label={<span className="uppercase text-xs">Nơi sản xuất</span>}
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
                            label={<span className="uppercase text-xs">Bộ phận yêu cầu</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2 bg-blue-50"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-xs">Người yêu cầu</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                 className=" text-sm p-2 bg-blue-50"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-xs">Khách hàng</span>}
                            className="mb-0"
                        >
                            <Input
                               
                                size="small"
                                className=" text-sm p-2 bg-blue-50"
                            />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            label={<span className="uppercase text-xs">Số yêu cầu</span>}
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
                            label={<span className="uppercase text-xs">Số yêu cầu</span>}
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
                            label={<span className="uppercase text-xs">Số kế hoạch</span>}
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
                            label={<span className="uppercase text-xs">Số lệnh sản xuất</span>}
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
                            label={<span className="uppercase text-xs">Phân loại kho</span>}
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
