import { Injectable, StreamableFile } from '@nestjs/common';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';
import { join } from 'path';
import * as XLSX from "xlsx"
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';
import { IntegerType } from 'typeorm';

import * as net from 'net';
import { BarcodeDto } from '../models/barcodeDto';

@Injectable()
export class PrintBarcodeService {
    constructor(
        private readonly mySqlService: DatabaseService
    ) { }

    async getPaginatedData(
        matID: string,
        lotNo: string,
        pageIndex: number,
        pageSize: number
    ) {
        try {
            const offset = (pageIndex - 1) * pageSize;
            const result = this.GetData(matID, lotNo, offset, pageSize);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(matID: string, lotNo: string, offset: number, pageSize: number) {
        let query = ` SELECT TRAN_CODE, TRAN_SEQ, ITEMCD, LOTNO, QTY, DATECODE, REELNO, DATETIME, LOT_ID, USER_ID     FROM EWIPRMTBCI WHERE (1=1) `;
        query += await this.genWhereClause(matID, lotNo);
        query += ` LIMIT ${pageSize} OFFSET ${offset} `;
        const result = await this.mySqlService.executeQuery(
            query
        );
        return result;
    }

    async genWhereClause(matID: string, lotNo: string) {


        let query = ``;

        // if (dateFr != null) {
        //   query += ` AND DATETIME > '` + dateFr + `'`;
        // }
        // if (dateTo != null) {
        //   query += ` AND DATETIME <= '` + dateTo + `'`;
        // }
        // if (vendor != null) {
        //   query += ` AND VENDOR = '` + vendor + `'`;
        // }
        if (matID != '') {
            query += ` AND ITEMCD LIKE '` + matID + `'`;
        }
        if (lotNo != '') {
            query += ` AND LOTNO LIKE '` + lotNo + `'`;
        }

        return query;
    };

    async printByZplCode(barcodeDto: BarcodeDto) {

        const listDataLabel = barcodeDto.data;
        const dataCode = [];

        if (!listDataLabel || !Array.isArray(listDataLabel)) {
            return 'Invalid data';
        }

        for (const data of listDataLabel) {
            let zplCode = `
                            ^XA
                                ^PW790               
                                ^LL160                ; Chiều cao tem (0.79in x 203dpi = 160 dots)
                                ^CF0,20               ; Đặt kích thước font mặc định
                                ^FO30,10^BY2,2,50     ; Đặt vị trí và kích thước barcode
                                    ^BCN,50,Y,N,N
                                ^FD{BARCODE_DATA}^FS
                                ; Cột trái
                                ^FO30,70^A0N,20,20^FDCode: {CODE}^FS 
                                ^FO30,100^A0N,20,20^FDLot: {LOT}^FS
                                ^FO30,130^A0N,20,20^FDReel: {REEL}^FS
                                ; Cột phải
                                ^FO400,70^A0N,20,20^FDQTY: {QTY}^FS
                                ^FO400,100^A0N,20,20^FDDC: {DC}^FS
                                ^FO400,130^A0N,20,20^FDUserID: {USER_ID}^FS
                                ; QR Code
                                ^FO650,60^BQN,3,3   ; QR code nhỏ hơn
                                ^FDQA,{QR_DATA}^FS
                            ^XZ 
                         `;

            const zpl = zplCode
                .replace('{BARCODE_DATA}', data.LOT_ID)
                .replace('{CODE}', data.ITEMCD)
                .replace('{LOT}', data.LOTNO)
                .replace('{QTY}', data.QTY)
                .replace('{DC}', data.DATECODE)
                .replace('{REEL}', data.REELNO)
                .replace('{USER_ID}', data.USER_ID)
                .replace('{QR_DATA}', data.LOT_ID);

                dataCode.push(zpl);
            try {
                const client = new net.Socket();
                await new Promise((resolve, reject) => {
                    client.connect(barcodeDto.port, barcodeDto.ip, () => {
                        client.write(zpl);
                        client.end();
                        resolve('Printed');
                    });

                    client.on('error', (err) => {
                        console.error('Error connecting to printer:', err);
                        reject(err);
                    });
                });

            } catch (error) {
                console.error('Error connecting to printer:', error);
            }

        }

        return {
            status: true,
            message: SUCCESS_MESSAGES.REQUEST_SUCCESS,
            data: dataCode
        }
    };



}
