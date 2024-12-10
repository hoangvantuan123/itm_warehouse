import { Injectable, Logger } from '@nestjs/common';
import { BARCODE_ERR_MESSAGES, BARCODE_SUCCESS_MESSAGES, ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

import * as net from 'net';
import { error, info, log } from 'console';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { BarcodeChange } from '../models/baseDto';


@Injectable()
export class BarcodeChangeService {
    constructor(
        private readonly databaseService: DatabaseService,
    
    ) { }

    private readonly logger = new Logger(BarcodeChangeService.name, { timestamp: true })

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
        this.logger.log('Search', query);
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

        const qTemplateLabel = ` SELECT label, value FROM tbl_zplcode WHERE (1=1) AND label LIKE 'barcode-change'`.trim();
        const rTemplateLabel = await this.databaseService.executeQuery(
            qTemplateLabel
        );

        for (const data of listDataLabel) {

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
                    client.connect(port, ip, () => {
                        client.write(zpl);
                        client.end();
                        resolve(true);
                        this.logger.log('Print label succesfull', zpl);
                    });

                    client.on('error', (err) => {
                        this.logger.error('Error connecting to printer:', err)
                        reject(err);
                        return {
                            status: false,
                            message: err,
                        }
                    });
                });

                if (barcodeDto.isConfirm && data.NewStatus == '' && printResult == true) {
                    try {
                         await this.createBarcodeChange(barcodeDto.listSelected[0]);
                    } catch (err) {
                        this.logger.error('Error execute query: ', err);
                    }
                }

            } catch (err) {
                error('Error connecting to printer:', err);
                return {
                    status: false,
                    message: err,
                }
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
        this.logger.log('CREATE BARCODE', query)
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

    async confirmBarcode(dataBarcode: any[]) : Promise<any> {
        const res = [];

        for (const data of dataBarcode) {
            const query = ` EXEC ITM_SBarcodeUpdate 
            @pBarcode = '${data.oldBarcode}',
            @pNewBarcode = '${data.newBarcode}',
            @pStatus = N'${data.isconfirm}' `.trim();

            try {
                await this.databaseService.executeQuery(
                    query
                );
                this.logger.log('Confirm barcode', query);  
            } catch (error) {
                return {
                    status: false,
                    message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                    data: null,
                };
            }
        }

        return {
            status: true,
            message: BARCODE_SUCCESS_MESSAGES.BARCODE_CONFIRM_SUCCESSFULL,
            data: res,
        };
    };

    async checkConfirmNewBarcode(barcode: any): Promise<any> {

        this.validBarcodeCheck(barcode.oldBarcode);
        this.validBarcodeCheck(barcode.newBarcode);
        const query = ` EXEC ITM_SBarcodeCheck2 
               @pBarcode = '${barcode.oldBarcode}',
               @pNewBarcode = '${barcode.newBarcode}'
         `.trim();
         this.logger.log('Check new barcode', query);
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

    async isExistBarcode(barcode: any): Promise<any> {

        this.validBarcodeCheck(barcode.lotNo);
        const query = ` EXEC ITM_CheckItemLotExistsOrNot 
               @ItemNo = '${barcode.itemNo}',
               @Lotno = '${barcode.lotNo}'
         `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        this.logger.log('Check is exist barcode', query);

        const qDuplicate = ` SELECT 
                                COUNT(*) AS cBarcode
                            FROM _TPDBarcodeConfirm 
                            WHERE (1=1) 
                                AND BarcodeID LIKE '${barcode.barcodeID}' 
                                AND NewStatus LIKE 'OK'; `;

        this.logger.log('Check Duplicate', qDuplicate);
        const rDuplicate = await this.databaseService.executeQuery(
            qDuplicate
        );

        if(!result){
            return {
                status: false,
                message: BARCODE_ERR_MESSAGES.BARCODE_ID_NOT_EXIST,
                data: barcode.barcodeID,
            }
        }

        if (rDuplicate[0].cBarcode > 0){
            return {
                status: false,
                message: BARCODE_ERR_MESSAGES.BARCODE_ID_HAS_ALREADY_CHANGE,
                data: barcode.barcodeID,
            }
        }

        return {
            status: true,
            message: BARCODE_SUCCESS_MESSAGES.BARCODE_VERIFY_SUCCESFULL,
            data: barcode.barcodeID,
        }
    };

    async getPrinter(name: any): Promise<any[]> {
        const query = ` SELECT userid, ip, port FROM Printer WHERE (1=1) `.trim();
        const result = await this.databaseService.executeQuery(
            query
        );
        return result;
    };

}
