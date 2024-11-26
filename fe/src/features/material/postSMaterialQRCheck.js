import axios from 'axios'
import {
    HOST_API_SERVER_1
} from '../../services'

const generateXml = (data) => {
    return `
    <ROOT>
        <DataBlock1>
            <WorkingTag>${data.WorkingTag}</WorkingTag>
            <IDX_NO>${data.IDXNO}</IDX_NO>
            <Status>${data.Status}</Status>
            <DataSeq>${data.DataSeq}</DataSeq>
            <Selected>${data.Selected}</Selected>
            <TABLE_NAME>DataBlock1</TABLE_NAME>

            <BizUnit>${data.BizUnit}</BizUnit>
            <BizUnitName>${data.BizUnitName}</BizUnitName>
            <SMImpKindName>${data.SMImpKindName}</SMImpKindName>
            <ItemNo>${data.ItemNo}</ItemNo>
            <LotNo>${data.LotNo}</LotNo>
            <Qty>${data.Qty}</Qty>
            <DateCode>${data.DateCode}</DateCode>
            <ReelNo>${data.ReelNo}</ReelNo>
            <Barcode>${data.Barcode}</Barcode>
        </DataBlock1>
    </ROOT>`
}

const DEFAULTS = {
    xmlFlags: 2,
    serviceSeq: 1613,
    workingTag: '',
    companySeq: 1,
    languageSeq: 6,
    userSeq: 18770,
    pgmSeq: 1791,
}

export const SMaterialQRCheckWeb = (requestData) => {
    const requestParams = {
        ...DEFAULTS,
        ...requestData,
    }
    const xmlDocument = generateXml(requestParams)
    const dataToSend = {
        xmlDocument,
        xmlFlags: requestParams.xmlFlags,
        serviceSeq: requestParams.serviceSeq,
        workingTag: requestParams.workingTag,
        companySeq: requestParams.companySeq,
        languageSeq: requestParams.languageSeq,
        userSeq: requestParams.userSeq,
        pgmSeq: requestParams.pgmSeq,
    }

    return axios
        .post(`${HOST_API_SERVER_1}/mssql/stock-in/smaterial-qr-check-web`, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.data
            }
            throw new Error('Error from API: ' + response.data.message)
        })
        .catch((error) => {
            const errorMessage = error.response ?
                error.response.data.message || 'Error from API' :
                'Unknown error occurred'
            throw new Error(errorMessage)
        })
}