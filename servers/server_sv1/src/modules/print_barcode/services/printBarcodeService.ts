import { Injectable, StreamableFile } from '@nestjs/common';
import { ERROR_MESSAGES } from 'src/common/utils/constants';
import { join } from 'path';
import * as XLSX from "xlsx"
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';
import { IntegerType } from 'typeorm';

@Injectable()
export class PrintBarcodeService {
    constructor(
        private readonly mySqlService: DatabaseService
    ) { }

    async getPaginatedData(
        matID: string, 
        lotNo: string,
        pageIndex: number,
        pageSize: number
    ) {
        try {
            const result = this.GetData(matID, lotNo, pageIndex, pageSize);
            return result;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }

    async GetData(matID: string, lotNo: string, pageIndex: number, pageSize: number) {
        let query = ` SELECT TRAN_CODE, TRAN_SEQ, ITEMCD, LOTNO, QTY, DATECODE, REELNO, DATETIME, LOT_ID, USER_ID     FROM EWIPRMTBCI WHERE (1=1) `;
        query += await this.genWhereClause(matID, lotNo);
        query += ` LIMIT 1,10 `;
        const result = await this.mySqlService.executeQuery(
            query
        );
        return result;
    }

    async genWhereClause(matID: string, lotNo: string) {


        let query = ``;

        // if (dateFr != null) {
        //   query += ` AND DATETIME > '` + dateFr + `'`;
        // }
        // if (dateTo != null) {
        //   query += ` AND DATETIME <= '` + dateTo + `'`;
        // }
        // if (vendor != null) {
        //   query += ` AND VENDOR = '` + vendor + `'`;
        // }
        if (matID != null) {
            query += ` AND ITEMCD LIKE '` + matID + `'`;
        }
        if (lotNo != null) {
            query += ` AND LOTNO LIKE '` + lotNo + `'`;
        }

        return query;
    }

}
