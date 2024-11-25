import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class StockInService {
  constructor(private readonly databaseService: DatabaseService) { }

  async ITM_SConvertDC(itemNo: string, prodDate1: string, inDate1: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC ITM_SConvertDC 
        @pItemNo = ${itemNo},
        @pProdDate = ${prodDate1},
        @pInDate = ${inDate1};
    `;

    try {
      const result = await this.databaseService.executeQuery(query);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }
  async ITM_CheckItemLotExists(itemNo: string, lotno: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC ITM_CheckItemLotExists 
        @ItemNo = ${itemNo},
        @Lotno = ${lotno};
    `;

    try {
      const result = await this.databaseService.executeQuery(query);
      if (result.length === 0) {
        return { success: false, message: ERROR_MESSAGES.WARNING_BARCODE_DATABASE };
      } else {
        return { success: true, data: result };
      }
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }

  async ITM_CheckIQCHold(itemNo: string, lotno: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC ITM_CheckIQCHold 
        @ItemNo = ${itemNo},
        @Lotno = ${lotno};
    `;

    try {
      const result = await this.databaseService.executeQuery(query);
      if (result.length === 0) {
        return { success: false, message: ERROR_MESSAGES.WARNING_HOLD_BARCODE };
      } else {
        return { success: true, data: result };
      }
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }




}
