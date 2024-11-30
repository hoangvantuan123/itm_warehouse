import { Controller, Get, Post, Put, Delete, Body, Query, Param, Header, StreamableFile } from '@nestjs/common';
import { SUCCESS_MESSAGES, ERROR_MESSAGES } from 'src/common/utils/constants';
import { StockOutRequestService } from '../services/stockOutRequest.services';

@Controller('v1/stock-out-request')
export class StockOutRequestController {
    constructor(private readonly stockOutService: StockOutRequestService) { }


    @Get('paginated')
    async getPaginatedData(
        @Query('StockInDateFr') StockInDateFr: string,
        @Query('StockInDateTo') StockInDateTo: string,
        @Query('ReqNo') ReqNo: string,
        @Query('WorkOrderNo') WorkOrderNo: string,
        @Query('ItemNo') ItemNo: string,
        @Query('ItemName') ItemName: string,
        @Query('BizUnit') BizUnit: string
    ) {
        try {
            const result = await this.stockOutService.getPaginatedData(StockInDateFr, StockInDateTo, ReqNo, WorkOrderNo, ItemNo, ItemName, BizUnit);
            return { status: true, message: SUCCESS_MESSAGES.REQUEST_SUCCESS, data: result };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
                data: null,
            };
        }
    }


    /* {
      "column1": "value1",
      "column2": "value2",
      "column3": "value3"
    }
     */
    @Post('create')
    async createUnpacking(@Body() data: any) {
        try {
            if (data && data.hasOwnProperty('data')) {
                data = data.data;
            }
            const result = await this.stockOutService.createUnpacking(data);

            return {
                status: true,
                message: SUCCESS_MESSAGES.RECORD_CREATED,
                data: result,
            };
        } catch (error) {

            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INVALID_DATA,
                data: null,
            };
        }
    }



    @Post('unpacking-import')
    async createUnpackingImport(@Body() data: any) {
        try {
            const formattedData = this.formatData(data.data);
            const result = await this.stockOutService.createUnpackingImport(formattedData);
            return {
                status: true,
                message: result.message,
            };
        } catch (error) {
            return {
                status: false,
                message: error.message || ERROR_MESSAGES.INVALID_DATA,
            };
        }
    }


    formatData(rawData: any[]): any[] {
        const columnNames = rawData[0];
        const formattedData = rawData.slice(1).map((row: any[]) => {
            const rowObj: any = {};
            columnNames.forEach((colName: string, index: number) => {
                rowObj[colName] = row[index];
            });
            return rowObj;
        });
        return formattedData;
    }


    @Get('export')
    @Header('Content-Disposition', 'attachment; filename="SheetJSNest.xlsx"')
    async exportExcelPaginatedData(
        @Query('StockInDateFr') StockInDateFr: string,
        @Query('StockInDateTo') StockInDateTo: string,
        @Query('ReqNo') ReqNo: string,
        @Query('WorkOrderNo') WorkOrderNo: string,
        @Query('ItemNo') ItemNo: string,
        @Query('ItemName') ItemName: string,
        @Query('BizUnit') BizUnit: string
    ): Promise<StreamableFile> {
        return await this.stockOutService.exportExcelPaginatedData(StockInDateFr, StockInDateTo, ReqNo, WorkOrderNo, ItemNo, ItemName, BizUnit);
    }

}
