import { Injectable } from '@nestjs/common';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

import * as net from 'net';
import { BarcodeDto } from '../models/barcodeDto';
import { error, log } from 'console';
import { ItemLabelDto } from '../models/itemLabelDto';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';


@Injectable()
export class PrintBarcodeService {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async getPaginatedData(
        matID: string,
        lotNo: string,
        pageIndex: number,
        pageSize: number,
        vendor: string,
        dateFr: string, 
        dateTo: string,
    ) {
        try {
            const offset = (pageIndex - 1) * pageSize;
            const result = this.GetData(matID, lotNo, offset, pageSize, vendor, dateFr, dateTo);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(matID: string, lotNo: string, offset: number, pageSize: number, vendor: string, dateFr: string, dateTo: string) {
        let query = ` SELECT PLANT, TRAN_CODE, TRAN_SEQ, TRAN_TYPE, VENDOR, ITEMCD, LOTNO, QTY, DATECODE, REELNO, DATETIME, LOT_ID, USER_ID   FROM EWIPRMTBCI WHERE (1=1) `;
        query += await this.genWhereClause(matID, lotNo, vendor, dateFr, dateTo);
        query += ` ORDER BY DATETIME DESC `;
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    }

    async genWhereClause(matID: string, lotNo: string, vendor: string, dateFr: string, dateTo: string) {


        let query = ``;

        if (dateFr != null) {
          query += ` AND DATETIME >= '` + dateFr + `'`;
        }
        if (dateTo != null) {
          query += ` AND DATETIME <= '` + dateTo + `'`;
        }
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
        const listDataLabel = [];
        const dataCode = [];

        if (!this.isPrintNewData(barcodeDto)) {
            const newLabel = await this.execute(barcodeDto?.newlabel);
            listDataLabel.push(newLabel);
        } else {
            listDataLabel.push(...barcodeDto.data); 
        }

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

    async validDto(barcodeDto: BarcodeDto) {

        if (barcodeDto == null) {
            throw new Error("INVALID_OBJECT");
        }

        if (barcodeDto.ip == null || barcodeDto.port == null) {
            throw new Error("IP_OR_PORT_NOT_NULL");
        }
        // if (!barcodeDto.data || !Array.isArray(barcodeDto.data)) {
        //     throw new Error("INVALID_DATA_LABEL");
        // }
    };

    async isExistData(barcodeDto: BarcodeDto) {
        // Todo : check is exist label 
    };

    async createLabel(barcodeDto: BarcodeDto) {

    };

    async execute(itemLabel: ItemLabelDto): Promise<any> {

        const tranNo = await this.GetBarcodeInNo();
        const tranSeq = this.getBarcodeInSeq(tranNo);
        const tranTime = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);

        let lotID = itemLabel.matID + '/' + itemLabel.lotNo + '/' + itemLabel.qty + '/' + itemLabel.date + '/' + itemLabel.reelNo;

        let query = ` INSERT INTO insert into EWIPRMTBCI (plant, tran_code, tran_seq, tran_type, vendor, itemcd, lotno, qty, reelno, datecode, datetime, lot_id, remark, user_id )
                                 values ( 'ITMVPSG', 
                                 ${tranNo}, 
                                 ${tranSeq}, 
                                 N'', 
                                 ${itemLabel.vendor}, 
                                 ${itemLabel.matID}, 
                                 ${itemLabel.lotNo}, 
                                 ${itemLabel.qty}, 
                                 ${itemLabel.reelNo}, 
                                 ${itemLabel.date}, 
                                 ${tranTime}, 
                                 ${lotID}, 
                                 ${itemLabel.remark}, 
                                 ${itemLabel.userId} ) ;`;

        if (this.chkStock("ITMVPSG", "1000", itemLabel.matID)) {
            query += ` UPDATE EWIPRMTSTS SET stock_qty = stock_qty + ${itemLabel.qty} 
                where plant = 'ITMVPSG' and wh_code = '1000' and mat_id = '${itemLabel.matID}';  `;
        }
        else {
            query += ` insert into EWIPRMTSTS ( plant,  wh_code,  mat_id,  stock_qty,  hold_qty,  wit_qty,  qm_wit_qty,  lock_qty, loss_qty )
                             values ( 'ITMVPSG', '1000', '${itemLabel.matID}', ${itemLabel.qty} , 0, 0, 0, 0, 0 ); `;
        }
        query += ` insert into EWIPLOTSTS ( plant, lot_id, lot_gubun, wh_code,  product_type, mat_id, oper_code, lot_status, qty, good_flag, lock_flag, hold_flag )
             values ( 'ITMVPSG', '${lotID}', '양산', '1000', '양산', '${itemLabel.matID}', '', '', ${itemLabel.qty}, 'G', 'N', 'N'); `;

        try {
            await this.databaseService.executeQuery(query);
            return {
                LOT_ID: lotID,
                ITEMCD: itemLabel?.matID,
                LOTNO: itemLabel?.lotNo,
                QTY: itemLabel?.qty,
                DATECODE: itemLabel?.date,
                REELNO: itemLabel?.reelNo,
                USER_ID: itemLabel?.userId,
            };
        } catch (e) {
            throw new Error("Error insert data");
        }
    };

    async GetBarcodeInNo(): Promise<string> {
        let vInNo: string = '';
        const qTrancode = ` SELECT MAX(TRAN_CODE) AS TRAN_CODE FROM EWIPRMTBCI `;
        try {
            const result = await this.databaseService.executeQuery(qTrancode);

            if (!result || result.length === 0) {
                const vsNowDate = new Date().toISOString().slice(2, 10).replace(/-/g, '');
                vInNo = `PI${vsNowDate}0001`;
                return vInNo;
            }

            const vMaxNo = result[0]?.TRAN_CODE || '';

            if (!vMaxNo) {
                const vsNowDate = new Date().toISOString().slice(2, 10).replace(/-/g, '');
                vInNo = `PI${vsNowDate}0001`;
                return vInNo;
            }

            const vNo = vMaxNo.slice(-4);
            const vDate = vMaxNo.slice(2, 6);
            const vNowDate = new Date().toISOString().slice(2, 10).replace(/-/g, '');

            if (vNowDate !== vDate) {
                vInNo = `PI${vNowDate}0001`;
            } else {
                const num = parseInt(vNo, 10) + 1;
                const newNo = num.toString().padStart(4, '0');
                vInNo = `${vMaxNo.slice(0, 8)}${newNo}`;
            }

            return vInNo;
        } catch (error) {
            console.error('Error fetching barcode:', error);
            throw new Error('Failed to generate barcode');
        }

    };

    async getBarcodeInSeq(tranCode: string): Promise<string> {
        let vInNo: string = '';
        const qTranSeq = `SELECT MAX(TRAN_SEQ) AS TRAN_SEQ FROM EWIPRMTBCI WHERE TRAN_CODE = '${tranCode}'`;

        try {
            const result = await this.databaseService.executeQuery(qTranSeq);

            if (!result || result.length === 0) {
                return vInNo;
            }

            const vMaxNo = result[0]?.TRAN_SEQ || '';

            if (!vMaxNo) {
                vInNo = '0001';
                return vInNo;
            }

            const num = parseInt(vMaxNo, 10);
            const newNo = (num + 1).toString().padStart(4, '0');
            vInNo = newNo;

            return vInNo;
        } catch (error) {
            console.error('Error fetching barcode sequence:', error);
            throw new Error('Failed to generate barcode sequence');
        }
    };


    async chkLot(plant: string, lotNo: string): Promise<boolean> {
        let errMsg: string = '';
        const sql = `
            SELECT * FROM EWIPLOTSTS
            WHERE PLANT = '${plant}' AND lot_id = '${lotNo}'
        `;

        try {
            const result = await this.databaseService.executeQuery(sql);

            if (!result || result.length === 0) {
                errMsg = "LOT이 존재하지 않습니다.";
                console.error(errMsg);
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error checking LOT:', error);
            throw new Error('Failed to check LOT');
        }
    };

    async chkStock(plant: string, whCode: string, itemCd: string): Promise<boolean> {
        let errMsg: string = '';
        const sql = `
            SELECT stock_qty FROM EWIPRMTSTS
            WHERE plant = '${plant}' AND wh_code = '${whCode}' AND mat_id = '${itemCd}'
        `;

        try {
            const result = await this.databaseService.executeQuery(sql);

            if (!result || result.length === 0) {
                errMsg = "품목이 존재하지 않습니다.";
                console.error(errMsg);
                return false;
            }

            return true;
        } catch (error) {
            console.error('Error checking stock:', error);
            throw new Error('Failed to check stock');
        }
    };

    async isPrintNewData(barcodeDto: BarcodeDto): Promise<boolean> {

        if (Array.isArray(barcodeDto?.data) && barcodeDto?.newlabel == null) {
            return false;
        }
        return true;
    };

}
