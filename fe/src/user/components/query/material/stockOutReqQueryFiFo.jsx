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

export default function StockOutRequestQueryFiFo() {

    return (
        <div className="flex items-center gap-2">
            <Form layout="vertical" onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            }}>

            </Form>
        </div>
    )
}
