import { Injectable } from '@nestjs/common';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

import * as net from 'net';
import { error, info, log } from 'console';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { BarcodeChange } from '../models/baseDto';


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
            const result = this.GetData(dateFr, dateTo, lotNo, matID, barcode);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(dateFr?: string, dateTo?: string, lotNo?: string, matID?: string, barcode?: string) {

        if (dateFr == null) {
            dateFr = '';
        }
        if (dateTo == null) {
            dateTo = '';
        }
        if (lotNo == null) {
            lotNo = '';
        }
        if (matID == null) {
            matID = '';
        }
        if (barcode == null) {
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

    async printBarcode(barcodeDto: any) {

        this.validDto(barcodeDto);
        this.isExistData(barcodeDto);
        const listDataLabel = [];
        listDataLabel.push(...barcodeDto.listSelected)

        const userID = barcodeDto.listSelected[0].UserID;

        const dataCode = [];

        const query = ` SELECT ip, port FROM Printer WHERE (1=1) AND userId like '${userID}'`.trim();
        const result = await this.databaseService.executeQuery(
            query
        );

        const qTemplateLabel = ` SELECT label, value FROM tbl_zplcode WHERE (1=1) AND label LIKE 'barcode-change'`.trim();
        const rTemplateLabel = await this.databaseService.executeQuery(
            qTemplateLabel
        );

        for (const data of listDataLabel) {
            console.log(data)

            let zplCode = rTemplateLabel[0].value;

            const zpl = zplCode
                .replace('{BARCODE_DATA}', data.NewBarcodeID)
                .replace('{CODE}', data.ItemNo)
                .replace('{LOT}', data.LotNo)
                .replace('{QTY}', data.NewQty)
                .replace('{DC}', data.DateCode)
                .replace('{REEL}', data.ReelNo)
                .replace('{USER_ID}', data.UserID)
                .replace('{QR_DATA}', data.NewBarcodeID);

            dataCode.push(zpl);

            try {
                const client = new net.Socket();

                const printResult = await new Promise((resolve, reject) => {
                    client.connect(result[0].port, result[0].ip, () => {
                        client.write(zpl);
                        client.end();
                        resolve(true);
                        log("Print succesfull", zpl);
                    });

                    client.on('error', (err) => {
                        error('Error connecting to printer:', err);
                        reject(err);
                    });
                });

                if (barcodeDto.isConfirm && data.NewStatus == '' && printResult == true) {
                    try {
                        const execChangeBarcode = await this.createBarcodeChange(barcodeDto.listSelected[0]);
                    } catch (err) {
                        error('Error execute query: ', err);
                    }
                }

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

    async createBarcodeChange(barcodeChangeDto: any) {

        const query = ` EXEC ITM_SSaveBarcodeChange 
              @pTran_code = 'PSG',
              @pVendor = 'PSG',
              @pItemNo = N'${barcodeChangeDto.ItemNo}',
              @pLotNo = N'${barcodeChangeDto.LotNo}',
              @pQty = '${barcodeChangeDto.oldQty}',
              @pDateCode = '${barcodeChangeDto.DateCode}',
              @pReelNo = '${barcodeChangeDto.ReelNo}',
              @pBarCode = '${barcodeChangeDto.BarcodeID}',
              @pnewBarCode = '${barcodeChangeDto.NewBarcodeID}',
              @pnewQty = '${barcodeChangeDto.NewQty}',
              @pRemark = N'${barcodeChangeDto.Remark}',
              @pUserID = N'${barcodeChangeDto.UserID}'

        `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

    async validDto(barcodeDto: BarcodeChange) {

        if (barcodeDto == null) {
            throw new Error("INVALID_OBJECT");
        }

    };

    async isExistData(barcodeDto: BarcodeChange) {
        // Todo : check is exist label  oldBarcode

    };

    async checkConfirmBarcode(barcode: any): Promise<any> {

        this.validBarcodeCheck(barcode.oldBarcode);
        const query = ` EXEC ITM_SBarcodeCheck 
              @pBarcode = '${barcode.oldBarcode}'
        `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

    async validBarcodeCheck(barcode: string): Promise<any> {
        if (barcode.includes('/')) {
            return {
                code: 401,
                message: 'Invalid format barcode !'
            }
        }
    }

    async confirmBarcode(dataBarcode: any[]) {

        for (const data of dataBarcode) {
            const query = ` EXEC ITM_SBarcodeUpdate 
            @pBarcode = '${data.oldBarcode}',
            @pNewBarcode = '${data.newBarcode}',
            @pStatus = N'${data.isconfirm}'   
      `.trim();
            const result = await this.databaseService.executeQuery(
                query
            );
            return result;
        }
    };

    async checkConfirmNewBarcode(barcode: any): Promise<any> {

        this.validBarcodeCheck(barcode.oldBarcode);
        this.validBarcodeCheck(barcode.newBarcode);
        const query = ` EXEC ITM_SBarcodeCheck2 
               @pBarcode = '${barcode.oldBarcode}',
               @pNewBarcode = '${barcode.newBarcode}'
         `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

}
