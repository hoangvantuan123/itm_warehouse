import { Controller, Get, Post, Put, Delete, Body, Query, Param, Header, StreamableFile } from '@nestjs/common';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from 'src/common/utils/constants';
import { PrintBarcodeService } from '../services/printBarcodeService';
import { BarcodeDto } from '../models/barcodeDto';

@Controller('v3/print-barcode')
export class PrintBarcodeController {
    constructor(private readonly printBarcodeService: PrintBarcodeService) { }


    @Get('paginated')
    async getPaginatedData(
        @Query('matID') matID?: string,
        @Query('lotNo') lotNo?: string,
        @Query('pageIndex') pageIndex?: number,
        @Query('pageSize') pageSize?: number,
        @Query('vendor') vendor?: string,
        @Query('fromDate') dateFrom?: string,
        @Query('toDate') dateTo?: string,
    ) {
        try {
            const result = await this.printBarcodeService.getPaginatedData(matID, lotNo, pageIndex, pageSize, vendor, dateFrom, dateTo);
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
        @Body() barcodeDto: any
    ) {
        try {
            const result = await this.printBarcodeService.printBarcode(barcodeDto);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Post('print-by-size')
    async printBySize(
        @Body() barcodeDto: any
    ) {
        try {
            const result = await this.printBarcodeService.printBarcodeChangeSize(barcodeDto);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Get('get-matid')
    async getMatIdByVendor(
        @Query("plant") plant?: any,
        @Query("partNo") partNo?: any,
    ): Promise<any> {
        try {
            const result = await this.printBarcodeService.getMatIdByVendor(plant, partNo);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Get('get-reel-no')
    async getReelNo(
        @Body() barcodeDto: any
    ): Promise<any> {
        try {
            const result = await this.printBarcodeService.getReelSeq(barcodeDto);
            return { result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }

    @Get('get-lot-count')
    async getLotCount(
        @Query('plant') plant?: string,
        @Query('lotNo') lotNo?: string,
    ): Promise<any> {
        try {
            const result = await this.printBarcodeService.getLotCount(plant, lotNo);
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
