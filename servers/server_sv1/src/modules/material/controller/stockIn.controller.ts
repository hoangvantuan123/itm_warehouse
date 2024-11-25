import { Controller, Get, Query } from '@nestjs/common';
import { StockInService } from '../service/stockIn.service';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v1/mssql/stock-in')
export class EmployeeController {
    constructor(private readonly stockInService: StockInService) { }

    @Get('convert-dc')
    async convertDC(
        @Query('itemNo') itemNo: string,
        @Query('prodDate1') prodDate1: string,
        @Query('inDate1') inDate1: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockInService.ITM_SConvertDC(itemNo, prodDate1, inDate1);
        return result;
    }

    @Get('check-item-lot-exists')
    async checkItemLotExists(
        @Query('itemNo') itemNo: string,
        @Query('lotno') lotno: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockInService.ITM_CheckItemLotExists(itemNo, lotno);
        return result;
    }
    @Get('check-iqc-hold')
    async checkIQCHold(
        @Query('itemNo') itemNo: string,
        @Query('lotno') lotno: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockInService.ITM_CheckIQCHold(itemNo, lotno);
        return result;
    }
}
