import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';
import { GenerateXmlService } from '../generate-xml/generate-xml.service';

@Injectable()
export class StockOutService {
    constructor(private readonly databaseService: DatabaseService, private readonly generateXmlService: GenerateXmlService) { }


    async _SPDMMOutReqListQuery_Web(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
        const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
        const query = `
          EXEC _SPDMMOutReqListQuery_Web 
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
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }
    async ITM_SPDMMOutReqItemList_WEB(outReqSeq: string): Promise<SimpleQueryResult> {
        const query = `
          EXEC ITM_SPDMMOutReqItemList_WEB 
           @OutReqSeq = ${outReqSeq}
        `;
        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }







}
