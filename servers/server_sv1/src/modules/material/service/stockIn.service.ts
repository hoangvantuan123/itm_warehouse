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



  async ITM_SUGGetActiveDeliveryItem(deliverySeq: number, purchaseType: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC ITM_SUGGetActiveDeliveryItem_WEB 
        @pDeliverySeq = ${deliverySeq},
        @pPurchaseType = '${purchaseType}';
    `;
    try {
      const result = await this.databaseService.executeQuery(query);
      console.log(result);
      if (result.length !== 0) {
        return { success: true, data: result };
      } else {
        return { success: false, message: ERROR_MESSAGES.WARNING_HOLD_BARCODE };
      }
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }


  async _SMaterialQRCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SMaterialQRCheck_WEB 
        @xmlDocument = N'<ROOT> ${escapedXmlDocument} </ROOT>',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
    try {
      const result = await this.databaseService.executeQuery(query);

      const invalidStatuses = result.some((item: any) => item.Status !== 0);
      if (invalidStatuses) {
        const errorMessage = result
          .map((item: any) => `${item.Result}`)
          .join('; ');
        return { success: false, message: errorMessage };
      }
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }


  /* CHECK SACAN CODE POST */

  
  async _SCOMCloseCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SCOMCloseCheck_WEB 
        @xmlDocument = N'<ROOT> ${escapedXmlDocument} </ROOT>',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
    try {
      const result = await this.databaseService.executeQuery(query);

      const invalidStatuses = result.some((item: any) => item.Status !== 0);
      if (invalidStatuses) {
        const errorMessage = result
          .map((item: any) => `${item.Result}`)
          .join('; ');
        return { success: false, message: errorMessage };
      }
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }




  
  async _SCOMCloseItemCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SCOMCloseItemCheck_WEB 
        @xmlDocument = N'<ROOT> ${escapedXmlDocument} </ROOT>',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
    try {
      const result = await this.databaseService.executeQuery(query);

      const invalidStatuses = result.some((item: any) => item.Status !== 0);
      if (invalidStatuses) {
        const errorMessage = result
          .map((item: any) => `${item.Result}`)
          .join('; ');
        return { success: false, message: errorMessage };
      }
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }




}
