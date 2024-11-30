import { Controller, Get, Post, Put, Delete, Body, Query, Param, Header, StreamableFile } from '@nestjs/common';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from 'src/common/utils/constants';
import { PrintBarcodeService } from '../services/printBarcodeService';
import { BarcodeDto } from '../models/barcodeDto';

@Controller('v1/print-barcode')
export class PrintBarcodeController {
    constructor(private readonly printBarcodeService: PrintBarcodeService) { }


    @Get('paginated')
    async getPaginatedData(
        @Query('matID') matID?: string,
        @Query('lotNo') lotNo?: string,
        @Query('pageIndex') pageIndex?: number,
        @Query('pageSize') pageSize?: number,
    ) {
        try {
            const result = await this.printBarcodeService.getPaginatedData(matID, lotNo, pageIndex, pageSize);
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
        @Body() barcodeDto : BarcodeDto
    ) {
        try {
            const result = await this.printBarcodeService.connectionPrinter(barcodeDto);
            return { status: true, message: SUCCESS_MESSAGES.REQUEST_SUCCESS, data: result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

}
