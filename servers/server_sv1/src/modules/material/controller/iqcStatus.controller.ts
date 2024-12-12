import { IQCStatusService } from './../service/iqcStatus.service';
import { Controller, Get, Query } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v1/mssql/iqc-status')
export class IQCStatusController {
    constructor(private readonly iqcStatusService: IQCStatusService) { }

    @Get('itm-spdqc-imp-result-list-web')
    async convertDC(
        @Query('fromDate') fromDate: string,
        @Query('toDate') toDate: string,
        @Query('blNo') blNo: string,
        @Query('delivbizUniteryNo') bizUnit: number,
        @Query('itemNo') itemNo: string,
        @Query('itemName') itemName: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.iqcStatusService.ITM_SPDQCImpResultListQuery_WEB(fromDate, toDate, blNo, bizUnit, itemNo, itemName);
        return result;
    }

}
