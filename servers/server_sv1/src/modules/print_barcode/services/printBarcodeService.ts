import { Injectable, StreamableFile } from '@nestjs/common';
import { ERROR_MESSAGES } from 'src/common/utils/constants';
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
            const result = this.GetData(matID, lotNo, pageIndex, pageSize);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(matID: string, lotNo: string, pageIndex: number, pageSize: number) {
        let query = ` SELECT TRAN_CODE, TRAN_SEQ, ITEMCD, LOTNO, QTY, DATECODE, REELNO, DATETIME, LOT_ID, USER_ID     FROM EWIPRMTBCI WHERE (1=1) `;
        query += await this.genWhereClause(matID, lotNo);
        query += ` LIMIT 1,10 `;
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
        if (matID != null) {
            query += ` AND ITEMCD LIKE '` + matID + `'`;
        }
        if (lotNo != null) {
            query += ` AND LOTNO LIKE '` + lotNo + `'`;
        }

        return query;
    };

    async connectionPrinter(barcodeDto: BarcodeDto) {

        const dataPrinter = await this.GetData("IC0137", "3AA", null, null);

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


        const data = dataPrinter[0]; 

        const zpl = zplCode
            .replace('{BARCODE_DATA}', data.LOT_ID)
            .replace('{CODE}', data.ITEMCD)
            .replace('{LOT}', data.LOTNO)
            .replace('{QTY}', data.QTY)
            .replace('{DC}', data.DATECODE)
            .replace('{REEL}', data.REELNO)
            .replace('{USER_ID}', data.USER_ID)
            .replace('{QR_DATA}', data.LOT_ID);

        const client = new net.Socket();
        client.connect(barcodeDto.port, barcodeDto.ip, () => {
            console.log('Connected to printer');

            client.write(zpl);
            client.end();
            return 'Connected to printer';

          });
    };

}
