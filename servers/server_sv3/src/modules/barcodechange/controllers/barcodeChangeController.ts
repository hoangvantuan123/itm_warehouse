import { Controller, Get, Post, Put, Delete, Body, Query, Param, Header, StreamableFile } from '@nestjs/common';
import { SUCCESS_MESSAGES, ERROR_MESSAGES, BARCODE_SUCCESS_MESSAGES } from 'src/common/utils/constants';
import { BarcodeChangeService } from '../services/barcodeChangeService';
import { BarcodeChange, BaseDto } from '../models/baseDto';


@Controller('v3/barcode-change')
export class BarcodeChangeController {
    constructor(private readonly barcodeChangeService: BarcodeChangeService) { }


    @Get('paginated')
    async getPaginatedData(
        @Query("fromDate") dateFr: string,
        @Query("toDate") dateTo: string,
        @Query("lotNo") lotNo: string,
        @Query("matId") matID: string,
        @Query("barcode") barcode: string,
        @Query("pageIndex") pageIndex: number,
        @Query("pageSize") pageSize: number,
    ) {
        try {
            const result = await this.barcodeChangeService.searchBy(dateFr, dateTo, lotNo, matID, barcode, pageIndex, pageSize);
            return { status: true, message: SUCCESS_MESSAGES.REQUEST_SUCCESS, data: result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Post('printer')
    async checkPrinter(
        @Body() baseDto: any
    ) {
        try {
            const result = await this.barcodeChangeService.printBarcode(baseDto);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Post('check-old-barcode')
    async checkConfirm(
        @Body() barcode: any
    ): Promise<any> {
        try {
            const result = await this.barcodeChangeService.checkConfirmBarcode(barcode);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Post('check-new-barcode')
    async checkNewBarcode(
        @Body() barcode: any
    ): Promise<any> {
        try {
            const result = await this.barcodeChangeService.checkConfirmNewBarcode(barcode);
            return {
                status: true,
                message: BARCODE_SUCCESS_MESSAGES.BARCODE_CONFIRM_SUCCESSFULL,
                data: result,
            };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Post('confirm')
    async confirmBarcode(
        @Body() dataBarcode: any[]
    ): Promise<any> {
        try {
            const result = await this.barcodeChangeService.confirmBarcode(dataBarcode);
            return result ;  
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Post('exist-barcode')
    async isExistBarcode(
        @Body() dataBarcode: any
    ) {
        try {
            const result = await this.barcodeChangeService.isExistBarcode(dataBarcode);
            return result;
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Get('device-printer')
    async searchByPrinter(
        @Param("name") name?: any
    ) {
        try {
            const result = await this.barcodeChangeService.getPrinter(name);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

}
