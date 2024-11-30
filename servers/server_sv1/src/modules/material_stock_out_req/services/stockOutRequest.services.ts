import { Injectable, StreamableFile } from '@nestjs/common';
import { ERROR_MESSAGES } from 'src/common/utils/constants';
import { join } from 'path';
import * as XLSX from "xlsx"
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';

@Injectable()
export class StockOutRequestService {
    constructor(
        private readonly mySqlService: DatabaseService
    ) { }

    async getPaginatedData(
        StockInDateFr: string,
        StockInDateTo: string,
        ReqNo: string,
        WorkOrderNo: string,
        ItemNo: string,
        ItemName: string,
        BizUnit: string
    ) {
        try {
            const result = await this.mySqlService.executeQuery(
                ` EXEC dbo.ITM_SPDMMOutReqListQuery_PDA_2 
                    @pFromDate = '${StockInDateFr}',
                    @pToDate = '${StockInDateTo}',
                    @pReqNo = '${ReqNo}',
                    @pWorkOrderNo = '${WorkOrderNo}',
                    @pItemNo = '${ItemNo}',
                    @pItemName = N'${ItemName}',
                    @pFacUnit = ${BizUnit}
                `
            );

            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }


    async exportExcelPaginatedData(
        StockInDateFr: string,
        StockInDateTo: string,
        ReqNo: string,
        WorkOrderNo: string,
        ItemNo: string,
        ItemName: string,
        BizUnit: string
    ) {
        try {
            // const result = await this.msSqlService.executeQuery(
            //     ` EXEC dbo.ITM_SPDMMOutReqListQuery_PDA_2 
            //         @pFromDate = '${StockInDateFr}',
            //         @pToDate = '${StockInDateTo}',
            //         @pReqNo = '${ReqNo}',
            //         @pWorkOrderNo = '${WorkOrderNo}',
            //         @pItemNo = '${ItemNo}',
            //         @pItemName = N'${ItemName}',
            //         @pFacUnit = ${BizUnit}
            //     `
            // );

            // const templatePath = join(__dirname, '..', 'resources', 'template.xlsx');
            const templatePath = 'E:/Workspaces/itm_warehouse/servers/server_sv1/resources/SheetJSNest.xlsx';

            const workbook = XLSX.readFile(templatePath);

            const sheet = workbook.Sheets[workbook.SheetNames[0]];

            

            sheet['A2'] = { v: StockInDateFr };
            sheet['B2'] = { v: StockInDateTo };
            sheet['C2'] = { v: ReqNo };
            sheet['D2'] = { v: WorkOrderNo };
            sheet['E2'] = { v: ItemNo };
            sheet['F2'] = { v: ItemName };
            sheet['G2'] = { v: BizUnit };
            XLSX.utils.sheet_add_aoa(sheet, [], {origin:-1});

            const updatedExcelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
            return new StreamableFile(updatedExcelBuffer);
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }


    async createUnpacking(data: any) {
        try {

            if (data.hasOwnProperty('data')) {
                data = data.data;
            }

            const columns = Object.keys(data);
            const values = Object.values(data);


            const records = [values];

            return await this.mySqlService.executeQuery('ETC_PCB_UNPACKING_WEB');
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INVALID_DATA);
        }
    }

    async createUnpackingImport(data: any) {
        try {
            return await this.mySqlService.executeQuery('');
        } catch (error) {
            console.error('Service Error:', error);
            throw new Error(ERROR_MESSAGES.INVALID_DATA);
        }
    }



}
