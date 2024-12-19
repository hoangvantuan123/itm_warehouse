import { Injectable, Logger } from '@nestjs/common';
import { BARCODE_ERR_MESSAGES, BARCODE_SUCCESS_MESSAGES, ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

import * as net from 'net';
import { BarcodeDto } from '../models/barcodeDto';
import { error } from 'console';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';

@Injectable()
export class PrintBarcodeService {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    private readonly logger = new Logger(PrintBarcodeService.name, { timestamp: true })
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

        this.logger.log('SEARCH PAGE', query);
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
        if (vendor != null && vendor != 'ALL') {
            query += ` AND VENDOR LIKE '` + vendor + `'`;
        }
        if (matID != null && matID != '') {
            query += ` AND ITEMCD LIKE '` + matID + `'`;
        }
        if (lotNo != null && lotNo != '') {
            query += ` AND LOTNO LIKE '` + lotNo + `'`;
        }

        return query;
    };

    async printBarcode(barcodeDto: any) {

        const rCheck = await this.validDto(barcodeDto);
        
        if(rCheck != null && rCheck.status == false){
            return rCheck;
        }
        this.isExistData(barcodeDto);
        const listDataLabel = [];
        listDataLabel.push(...barcodeDto.listSelected)

        const dataCode = [];

        if (!barcodeDto?.device) {
            return {
                status: false,
                message: BARCODE_ERR_MESSAGES.IP_OR_PORT_IS_NULL,
            }
        }
        const device = barcodeDto.device.split(':');
        const ip = device[0] || '';
        const port = device[1] || 0;

        const qTemplateLabel = ` SELECT label, value FROM ZPLCODE WHERE (1=1) AND label LIKE 'barcode-change'`.trim();
        const rTemplateLabel = await this.databaseService.executeQuery(
            qTemplateLabel
        );

        for (const data of listDataLabel) {
            let zplCode = rTemplateLabel[0].value;

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

                const printResult = await this.printZpl(ip, port, zpl);
                if (barcodeDto.isMulti == false && printResult == true) {
                    try {
                        await this.createBarcode(barcodeDto.listSelected[0]);
                    } catch (err) {
                        this.logger.error('Error execute query: ', err);
                    }
                }

            } catch (err) {
                this.logger.error('Error connecting to printer:', err);
                
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.NO_CONNECTION_PRINTER + ' ' + ip + ':' + port,
                }
            }
        }

        return {
            status: true,
            message: SUCCESS_MESSAGES.REQUEST_SUCCESS,
            data: dataCode
        }
    };

    async printBarcodeChangeSize(barcodeDto: any) {

        this.validDto(barcodeDto);
        this.isExistData(barcodeDto);
        const listDataLabel = [];
        listDataLabel.push(...barcodeDto.listSelected)

        const dataCode = [];

        if (!barcodeDto?.device) {
            return {
                status: false,
                message: BARCODE_ERR_MESSAGES.IP_OR_PORT_IS_NULL,
            }
        }
        if (!barcodeDto?.labelsize) {
            return {
                status: false,
                message: BARCODE_ERR_MESSAGES.LABEL_SIZE_NULL,
            }
        }
        const labelSize = barcodeDto.labelsize;

        const device = barcodeDto.device.split(':');
        const ip = device[0] || '';
        const port = device[1] || 0;

        const qTemplateLabel = ` SELECT label, value FROM ZPLCODE WHERE (1=1) AND label LIKE 'barcode-change-size'`.trim();
        const rTemplateLabel = await this.databaseService.executeQuery(
            qTemplateLabel
        );

        for (const data of listDataLabel) {
            let zplCode = rTemplateLabel[0].value;

            const zpl = zplCode
                .replace('{BARCODE_DATA}', data.LOT_ID)
                .replace('{CODE}', data.ITEMCD)
                .replace('{LOT}', data.LOTNO)
                .replace('{QTY}', data.QTY)
                .replace('{DC}', data.DATECODE)
                .replace('{REEL}', data.REELNO)
                .replace('{USER_ID}', data.USER_ID)
                .replace('{QR_DATA}', data.LOT_ID)
                .replace('{barcodeX}', labelSize.barCodePosX)
                .replace('{barcodeY}', labelSize.barCodePosY)
                .replace('{barcodeSizeX}', labelSize.barCodeSizeX)
                .replace('{barcodeSizeY}', labelSize.barCodeSizeY)
                .replace('{qrCodePosX}', labelSize.QrPosX)
                .replace('{qrCodePosY}', labelSize.QrPosY)
                .replace('{qrCodeSizeX}', labelSize.QrSizeX)
                .replace('{qrCodeSizeY}', labelSize.QrSizeY)
                .replace('{paperSizeX}', labelSize.paperSizeX)
                .replace('{paperSizeY}', labelSize.paperSizeY);

            dataCode.push(zpl);

            
            try {

                const printResult = await this.printZpl(ip, port, zpl);
                if (barcodeDto.isMulti == false && printResult == true) {
                    this.logger.log('ZPL CODE', zpl);
                    try {
                        await this.createBarcode(barcodeDto.listSelected[0]);
                    } catch (err) {
                        this.logger.error('Error execute query: ', err);
                    }
                }

            } catch (err) {
                error('Error connecting to printer:', err);
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.NO_CONNECTION_PRINTER + ' ' + ip + ':' + port,
                }
            }
        }

        return {
            status: true,
            message: SUCCESS_MESSAGES.REQUEST_SUCCESS,
            data: dataCode
        }
    };


    async validDto(barcodeDto: any) {

        if (barcodeDto == null) {
            throw new Error("INVALID_OBJECT");
        }

        if (Array.isArray(barcodeDto?.listSelected) && barcodeDto?.listSelected.length == 1){
            const newBarcode = barcodeDto?.listSelected[0];

            if(newBarcode?.LOT_ID == null || newBarcode?.LOT_ID == '' ){
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.LOT_ID_NOT_NULL,
                }
            }
            if(newBarcode?.LOTNO == null || newBarcode?.LOTNO == '' ){
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.LOTNO_NOT_NULL,
                }
            }
            if(newBarcode?.QTY == null || newBarcode?.QTY == '' ){
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.QTY_NOT_NULL,
                }
            }
            if(newBarcode?.DATECODE == null || newBarcode?.DATECODE == '' ){
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.DATECODE_NOT_NULL,
                }
            }
            if(newBarcode?.REELNO == null || newBarcode?.REELNO == '' ){
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.REELNO_NOT_NULL,
                }
            }
            if(newBarcode?.USER_ID == null || newBarcode?.USER_ID == '' ){
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.USER_ID_NOT_NULL,
                }
            }
        }

    };

    async isExistData(barcodeDto: BarcodeDto) {
        // Todo : check is exist label 
    };

    async printZpl(ip: string, port: number, zpl: string) {
        return new Promise((resolve, reject) => {
            const client = new net.Socket();

            client.connect(Number(port), ip, () => {
                client.write(zpl);
                client.end();
                resolve(true);
                this.logger.log(BARCODE_SUCCESS_MESSAGES.PRINT_SUCCESSFULL, zpl);
            });

            client.on('error', (err) => {
                reject(err);
            });
        });
    }

    async createBarcode(itemLabel: any): Promise<any> {


        const tranNo = await this.GetBarcodeInNo();
        const tranSeq = await this.getBarcodeInSeq(tranNo);
        const tranTime = new Date().toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);

        let lotID = itemLabel.ITEMCD + '/' + itemLabel.LOTNO + '/' + itemLabel.QTY + '/' + itemLabel.DATECODE + '/' + itemLabel.REELNO;

        const isExist = await this.isExistBarcode(lotID);

        if (isExist != null  && isExist.status == false){
            return isExist;
        }
        
        let query = ` INSERT INTO EWIPRMTBCI (
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
                                user_id )
                        VALUES ( 
                                 'ITMVPSG', 
                                 '${tranNo}', 
                                 '${tranSeq}', 
                                 'N', 
                                 '${itemLabel.VENDOR}', 
                                 '${itemLabel.ITEMCD}', 
                                 '${itemLabel.LOTNO}', 
                                 ${itemLabel.QTY}, 
                                 '${itemLabel.REELNO}', 
                                 '${itemLabel.DATECODE}', 
                                 ${tranTime}, 
                                 '${lotID}', 
                                 '${itemLabel.REMARK}', 
                                 '${itemLabel.USER_ID}' 
                        ) ;`;

        if (this.chkStock("ITMVPSG", "1000", itemLabel.ITEMCD)) {
            query += ` 
            UPDATE EWIPRMTSTS SET 
                stock_qty = stock_qty + ${itemLabel.QTY} 
            WHERE plant = 'ITMVPSG' 
                AND wh_code = '1000' 
                AND mat_id = '${itemLabel.ITEMCD}';  
            `;
        }
        else {
            query += ` 
                INSERT INTO EWIPRMTSTS ( 
                    plant,  
                    wh_code,  
                    mat_id,  
                    stock_qty,  
                    hold_qty,  
                    wit_qty,  
                    qm_wit_qty,  
                    lock_qty, 
                    loss_qty 
                    )
                VALUES 
                ( 
                    'ITMVPSG', 
                    '1000', 
                    '${itemLabel.ITEMCD}', 
                    ${itemLabel.QTY} , 
                    0, 0, 0, 0, 0 
                ); 
            `;
        }
        query += ` 
            INSERT INTO EWIPLOTSTS (
                plant, 
                lot_id, 
                lot_gubun, 
                wh_code,  
                product_type, 
                mat_id, 
                oper_code, 
                lot_status, 
                qty, 
                good_flag, 
                lock_flag, 
                hold_flag 
            )
            VALUES 
             ( 
                'ITMVPSG', 
                '${lotID}', 
                '양산', 
                '1000', 
                '양산', 
                '${itemLabel.ITEMCD}', 
                '', 
                '', 
                ${itemLabel.QTY}, 
                'G', 
                'N', 
                'N'
            ); `;

        try {
            this.logger.log("CREATE LABEL", query);
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
            throw new Error(`Error insert data : ${e}`);
        }
    };

    async isExistBarcode (barcode: any) : Promise<any>{

        const qCheck  = ` SELECT COUNT(*) AS count_ewip FROM EWIPRMTBCI WHERE LOT_ID LIKE '${barcode}' ;`;
        try {
            const result = await this.databaseService.executeQuery(qCheck);
            if(result[0]?.count_ewip != null && result[0]?.count_ewip > 0 ){
                this.logger.log('CHECK EXIST BARCODE', qCheck, result[0]?.count_ewip);
                return {
                    status: false,
                    message: BARCODE_ERR_MESSAGES.BARCODE_ID_EXIST,
                }
            }
        }
        catch(err){
            return {
                status: false,
                message: err,
            }

        }
        
    }

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
            this.logger.log("CHECK QTY STOCK", sql);
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

    async getMatIdByVendor(plant: any, partNo: any): Promise<any> {
        const qMatId = `
            SELECT ItemNo FROM _TDAItem WHERE 
                    ItemSeq IN  (
                                SELECT ItemSeq FROM _TDAItemUserDefine 
                                WHERE MngSerl = 1000007 
                                    AND MngValText = '${partNo}'
                            ) 
                    AND ItemNo NOT LIKE 'N-%'
        `;

        this.logger.log('GET MAT ID BY VENDOR ', qMatId);

        try {
            const result = await this.databaseService.executeQuery(qMatId);

            if (!result || result.length === 0) {
                return {
                    status: false,
                    data: null,
                }
            }
            return {
                status: true,
                data: result[0].ItemNo,
            }
        } catch (error) {
            console.error('Error checking stock:', error);
            throw new Error('Failed to check stock');
        }
    }

    async getReelSeq(dto: any): Promise<any> {
        let vSeq = '2-';
        const sql = `
            SELECT 
                MAX(CONVERT(REPLACE(ReelNo, '2-', ''), int)) +1 AS ReelNo 
            FROM EWIPRMTBCI WHERE (1=1)
                AND plant = '${dto.plant}' 
                AND lotno = '${dto.lotNo}' 
        `;

        this.logger.log('GET REEL SEQ ', sql);

        try {
            const result = await this.databaseService.executeQuery(sql);

            if (!result || result.length === 0) {
                return '2-1';
            } else {
                const vMaxNo = result[0];
                if (vMaxNo == '') {
                    return '2-1';
                }
                vSeq = vSeq + vMaxNo;
            }
            return vSeq;
        } catch (error) {
            console.error('Error checking stock:', error);
            throw new Error('Failed to check stock');
        }
    }

    async getLotCount(plant: string, lotNo: string): Promise<any> {
        let vSeq = 0;
        const sql = `
            SELECT COUNT(*) as LotCount 
            FROM EWIPRMTBCI a 
            WHERE plant = '${plant}' 
                AND lotno = '${lotNo}'
                AND tran_code + tran_seq IN(
                    SELECT tran_code + max(tran_seq) 
                    FROM EWIPRMTBCI b 
                    WHERE plant = 'ITMVPSG' 
                    AND a.lotno = b.lotno 
                    AND a.tran_code = b.tran_code GROUP BY tran_code ) ;
        `;

        this.logger.log('GET LOT COUNT', sql);

        try {
            const result = await this.databaseService.executeQuery(sql);

            if (!result || result.length === 0) {
                return vSeq;
            }
            else {
                const vMaxNo = result[0];
                if (vMaxNo == 0) {
                    return vSeq;
                }
                vSeq = vMaxNo;

            }
            return vSeq;
        } catch (error) {
            console.error('Error checking stock:', error);
            throw new Error('Failed to check stock');
        }
    }

}
