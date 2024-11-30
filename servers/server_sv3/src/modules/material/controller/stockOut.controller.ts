import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { StockOutService } from '../service/stockOut.service';

@Controller('v1/mssql/stock-out')
export class StockOutController {
    constructor(private readonly stockOutService: StockOutService) { }


    @Post('sp-dmm-out-req-list')
    async processSPDMMOutReqListQueryWeb(@Body() body: any): Promise<SimpleQueryResult> {
        const {
            xmlDocument,
            xmlFlags,
            serviceSeq,
            workingTag,
            companySeq,
            languageSeq,
            userSeq,
            pgmSeq,
        } = body;
        return this.stockOutService._SPDMMOutReqListQuery_Web(
            xmlDocument,
            xmlFlags,
            serviceSeq,
            workingTag,
            companySeq,
            languageSeq,
            userSeq,
            pgmSeq,
        );
    }

    @Get('itm-spd-mm-out-req-item-list')
    async processITMSPDMMOutReqItemListWEB(
        @Query('outReqSeq') outReqSeq: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockOutService.ITM_SPDMMOutReqItemList_WEB(outReqSeq);
        return result;
    }

}
