import { Injectable } from '@nestjs/common';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

import * as net from 'net';
import { error, log } from 'console';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { BarcodeChangeDto } from '../models/barcodeChangeDto';
import { BaseDto } from '../models/baseDto';


@Injectable()
export class BarcodeChangeService {
    constructor(
        private readonly databaseService: DatabaseService
    ) { }

    async searchBy(
        dateFr: string, 
        dateTo: string,
        lotNo: string,
        matID: string,
        barcode: string,
        pageIndex: number,
        pageSize: number,
    ) {
        try {
            const offset = (pageIndex - 1) * pageSize;
            const result = this.GetData(dateFr, dateTo, lotNo, matID, barcode);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(dateFr?: string, dateTo?: string, lotNo?: string, matID?: string, barcode?: string) {
        
        if (dateFr == null){
            dateFr = '';
        }
        if (dateTo == null){
            dateTo = '';
        }
        if (lotNo == null){
            lotNo = '';
        }
        if (matID == null){
            matID = '';
        }
        if (barcode == null){
            barcode = '';
        }
        
        const query = ` EXEC ITM_SGetBarcodeChange 
              @pFromDate = '${dateFr}',
              @pToDate = '${dateTo}',
              @pBarcodeID = N'${barcode}',
              @pItemNo = N'${matID}',
              @pLotNo = N'${lotNo}'
        `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

    async printBarcode(barcodeDto: BaseDto) {

        this.validDto(barcodeDto);
        this.isExistData(barcodeDto);
        const listDataLabel = [];
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

    async createBarcodeChange(barcodeChangeDto: BarcodeChangeDto) {
        const query = ` EXEC ITM_SSaveBarcodeChange 
              @pTran_code = N'${barcodeChangeDto.tranCode}',
              @pVendor = N'${barcodeChangeDto.vendor}',
              @pItemNo = N'${barcodeChangeDto.itemNo}',
              @pLotNo = N'${barcodeChangeDto.lotNo}',
              @pQty = '${barcodeChangeDto.qty}'
              @pDateCode = '${barcodeChangeDto.dateCode}'
              @pReelNo = '${barcodeChangeDto.reelNo}'
              @pBarCode = '${barcodeChangeDto.barcode}'
              @pnewBarCode = '${barcodeChangeDto.newBarcode}'
              @pnewQty = '${barcodeChangeDto.newQty}'
              @pRemark = N'${barcodeChangeDto.remark}'
              @pUserID = N'${barcodeChangeDto.userId}'

        `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

    async validDto(barcodeDto: BaseDto) {

        if (barcodeDto == null) {
            throw new Error("INVALID_OBJECT");
        }
        
    };

    async isExistData(barcodeDto: BaseDto) {
        // Todo : check is exist label 
    };

    async createLabel(barcodeDto: BarcodeChangeDto) {

    };

}
