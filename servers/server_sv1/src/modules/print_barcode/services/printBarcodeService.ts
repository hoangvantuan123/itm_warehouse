import { Injectable, StreamableFile } from '@nestjs/common';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';
import { join } from 'path';
import * as XLSX from "xlsx"
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';
import { IntegerType } from 'typeorm';

import * as net from 'net';
import { BarcodeDto } from '../models/barcodeDto';
import { error, log } from 'console';
import { throwError } from 'rxjs';
import { ItemLabelDto } from '../models/itemLabelDto';

@Injectable()
export class PrintBarcodeService {
    constructor(
        private readonly mySqlService: DatabaseService
    ) { }

    async getPaginatedData(
        matID: string,
        lotNo: string,
        pageIndex: number,
        pageSize: number,
        vendor: string,
    ) {
        try {
            const offset = (pageIndex - 1) * pageSize;
            const result = this.GetData(matID, lotNo, offset, pageSize, vendor);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(matID: string, lotNo: string, offset: number, pageSize: number, vendor:string) {
        let query = ` SELECT PLANT, TRAN_CODE, TRAN_SEQ, TRAN_TYPE, VENDOR, ITEMCD, LOTNO, QTY, DATECODE, REELNO, DATETIME, LOT_ID, USER_ID   FROM EWIPRMTBCI WHERE (1=1) `;
        query += await this.genWhereClause(matID, lotNo, vendor);
        query += ` ORDER BY DATETIME DESC `
        query += ` LIMIT ${pageSize} OFFSET ${offset} `;
        const result = await this.mySqlService.executeQuery(
            query
        );
        return result;
    }

    async genWhereClause(matID: string, lotNo: string, vendor : string) {


        let query = ``;

        // if (dateFr != null) {
        //   query += ` AND DATETIME >= '` + dateFr + `'`;
        // }
        // if (dateTo != null) {
        //   query += ` AND DATETIME <= '` + dateTo + `'`;
        // }
        if (vendor != '') {
          query += ` AND VENDOR LIKE '` + vendor + `'`;
        }
        if (matID != '') {
            query += ` AND ITEMCD LIKE '` + matID + `'`;
        }
        if (lotNo != '') {
            query += ` AND LOTNO LIKE '` + lotNo + `'`;
        }

        return query;
    };

    async printByZplCode(barcodeDto: BarcodeDto) {

        this.validDto(barcodeDto);
        this.isExistData(barcodeDto);
        const listDataLabel = barcodeDto.data;
        const dataCode = [];

        for (const data of listDataLabel) {
            let zplCode = `
                            ^XA
                                ^PW790               
                                ^LL160                ; Chiều cao tem (0.79in x 203dpi = 160 dots)
                                ^CF0,20               ; Đặt kích thước font mặc định
                                ^FO180,10^BY1,1,65     ; Đặt vị trí và kích thước barcode
                                    ^BCN,50,Y,N,N
                                ^FD{BARCODE_DATA}^FS
                                ; Cột trái
                                ^FO30,90^A0N,20,20^FDCode: {CODE}^FS 
                                ^FO250,90^A0N,20,20^FDLot: {LOT}^FS
                                ^FO500,90^A0N,20,20^FDReel: {REEL}^FS
                                ; Cột phải
                                ^FO30,120^A0N,20,20^FDQTY: {QTY}^FS
                                ^FO250,120^A0N,20,20^FDDC: {DC}^FS
                                ^FO500,120^A0N,20,20^FDUserID: {USER_ID}^FS
                                ; QR Code
                                ^FO700,60^BQN,3.5,3.5   ; QR code nhỏ hơn
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
                        log("Print succesfull", zpl);
                    });

                    client.on('error', (err) => {
                        error('Error connecting to printer:', err);
                        reject(err);
                    });
                });

            } catch (err) {
                error('Error connecting to printer:', err);
            }

        }

        return {
            status: true,
            message: SUCCESS_MESSAGES.REQUEST_SUCCESS,
            data: dataCode
        }
    };

    async validDto (barcodeDto: BarcodeDto) {

        if (barcodeDto == null){
            throw new Error("INVALID_OBJECT");
        }

        if (barcodeDto.ip == null || barcodeDto.port == null){
            throw new Error("IP_OR_PORT_NOT_NULL");
        }
        if (!barcodeDto.data || !Array.isArray(barcodeDto.data)) {
            throw new Error("INVALID_DATA_LABEL");
        }
    };

    async isExistData (barcodeDto: BarcodeDto) {

    };

    async createLabel (barcodeDto: BarcodeDto) {

    };

    async excute (itemLabel: ItemLabelDto) {

        let query = ` INSERT INTO insert into EWIPRMTBCI ( 
                                                plant, 
                                                tran_code, 
                                                tran_seq, 
                                                tran_type,
                                                vendor,
                                                itemcd, 
                                                lotno, 
                                                qty, 
                                                reelno, 
                                                datecode, 
                                                datetime, 
                                                lot_id, 
                                                remark, 
                                                user_id 
                                                )
                                 values ( 
                                 ' ` 

        

    };




}
