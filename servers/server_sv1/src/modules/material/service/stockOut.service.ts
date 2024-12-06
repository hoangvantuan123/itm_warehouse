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
          EXEC ITM_SPDMMOutReqListQuery_WEB  
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

    async _SMaterialQRStockOutCheck_WEB(
        xmlDocument: string,
        xmlFlags: number,
        serviceSeq: number,
        workingTag: string,
        languageSeq: number,
        pgmSeq: number,
        decodedToken: any
    ): Promise<SimpleQueryResult> {
        const userCheck = await this.databaseService.findAuthCheckUser(
            decodedToken?.UserId,
            decodedToken?.EmpSeq,
            decodedToken?.UserSeq
        );
        if (!userCheck || userCheck.length === 0) {
            return {
                success: false,
                message: `User with UserId: ${decodedToken?.UserId}, EmpSeq: ${decodedToken?.EmpSeq}, UserSeq: ${decodedToken?.UserSeq} not found.`
            };
        }
        try {
            const escapedXmlDocument = xmlDocument.replace(/'/g, "''");

            const query = `
                EXEC _SMaterialQRStockOutCheck_WEB 
                  @xmlDocument = N'<ROOT>${escapedXmlDocument}</ROOT>',
                  @xmlFlags = ${xmlFlags},
                  @ServiceSeq = ${serviceSeq},
                  @WorkingTag = N'${workingTag}',
                  @CompanySeq = ${decodedToken.CompanySeq},
                  @LanguageSeq = ${languageSeq},
                  @UserSeq = ${decodedToken.UserSeq},
                  @PgmSeq = ${pgmSeq};
            `;

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



    private async _executeProcedure(
        procedureName: string,
        xmlDocument: string,
        xmlFlags: number,
        serviceSeq: number,
        workingTag: string,
        companySeq: number,
        languageSeq: number,
        userSeq: number,
        pgmSeq: number
    ): Promise<any[]> {
        const escapedXmlDocument = xmlDocument.replace(/'/g, "''");

        const query = `
            EXEC ${procedureName} 
                @xmlDocument = N'<ROOT> ${escapedXmlDocument} </ROOT>',
                @xmlFlags = ${xmlFlags},
                @ServiceSeq = ${serviceSeq},
                @WorkingTag = N'${workingTag}',
                @CompanySeq = ${companySeq},
                @LanguageSeq = ${languageSeq},
                @UserSeq = ${userSeq},
                @PgmSeq = ${pgmSeq};
        `;
        return await this.databaseService.executeQuery(query);
    }

    async checkAllProceduresStockOutFiFo(
        procedureData: { name: string; xmlDocument: string; serviceSeq: number }[],
        xmlFlags: number,
        workingTag: string,
        languageSeq: number,
        pgmSeq: number,
        dataSave: any[],
        decodedToken: any
    ): Promise<SimpleQueryResult> {
        // Kiểm tra quyền người dùng
        const userCheck = await this.databaseService.findAuthCheckUser(
            decodedToken?.UserId,
            decodedToken?.EmpSeq,
            decodedToken?.UserSeq
        );

        if (!userCheck || userCheck.length === 0) {
            return {
                success: false,
                message: `User not found.`
            };
        }

        const errors: string[] = [];
        const data: any[] = [];
        let masterCheckResult: any[] | null = null;

        // Hàm thực thi thủ tục
        const executeProcedure = async (
            name: string,
            xmlDocument: string,
            serviceSeq: number
        ): Promise<any> => {
            try {
                const result = await this._executeProcedure(
                    name,
                    xmlDocument,
                    xmlFlags,
                    serviceSeq,
                    workingTag,
                    decodedToken.CompanySeq,
                    languageSeq,
                    decodedToken.UserSeq,
                    pgmSeq
                );

                if (result.some((item: any) => item.Status !== 0)) {
                    errors.push(result.map((item: any) => `${item.Result}`).join('; '));
                }
                return result;
            } catch (err) {
                errors.push(`Error executing procedure ${name}: ${err.message}`);
                throw err; // Để tiếp tục xử lý phía trên
            }
        };

        // Vòng lặp xử lý các thủ tục
        for (const { name, xmlDocument, serviceSeq } of procedureData) {
            try {
                let result: any;

                if (name === '_SPDMMOutProcCheck_WEB') {
                    result = await executeProcedure(name, xmlDocument, serviceSeq);
                    masterCheckResult = result;
                } else if (name === '_SPDMMOutProcItemCheck_WEB' && masterCheckResult) {
                    const MatOutSeq = masterCheckResult[0]?.MatOutSeq;
                    const updatedXmlDocument = xmlDocument.replace(
                        /<DataBlock3>(.*?)<\/DataBlock3>/gs,
                        (match) => match.replace(/<MatOutSeq><\/MatOutSeq>/, `<MatOutSeq>${MatOutSeq}</MatOutSeq>`)
                    );
                    result = await executeProcedure(name, updatedXmlDocument, serviceSeq);
                } else {
                    result = await executeProcedure(name, xmlDocument, serviceSeq);
                }

                data.push({ name, result });
            } catch (err) {
                console.error(`Failed to process procedure ${name}: ${err.message}`);
            }
        }

        // Kiểm tra lỗi
        if (errors.length > 0) {
            return { success: false, message: errors.join('; '), data };
        }

        // Hàm lưu kết quả
        const saveProcedure = async (name: string, result: any) => {

            if (name === '_SPDMMOutProcCheck_WEB') {
                try {
                    return Promise.all([

                        await this._SPDMMOutProcSave_WEB(
                            result,
                            xmlFlags,
                            3033,
                            workingTag,
                            decodedToken.CompanySeq,
                            languageSeq,
                            decodedToken.UserSeq,
                            pgmSeq
                        ),
                        await this._SLGInOutDailyBatch_WEB(
                            result,
                            xmlFlags,
                            3033,
                            workingTag,
                            decodedToken.CompanySeq,
                            languageSeq,
                            decodedToken.UserSeq,
                            pgmSeq,
                            result[0].MatOutSeq,
                            result[0].FactUnit,
                            result[0].MatOutNo
                        )

                    ])

                } catch (err) {
                    return { success: false, message: err.message };
                }
            }
            if (name === '_SPDMMOutProcItemCheck_WEB') {
                try {
                    console.log('_SPDMMOutProcItemCheck_WEB' , result)
                    return Promise.all([

                        await this._SPDMMOutProcItemSave_WEB(
                            result,
                            xmlFlags,
                            3033,
                            workingTag,
                            decodedToken.CompanySeq,
                            languageSeq,
                            decodedToken.UserSeq,
                            pgmSeq,
                            result[0].MatOutSeq
                        ),
                        await this._SCOMSourceDailySave(
                            result,
                            xmlFlags,
                            3033,
                            workingTag,
                            decodedToken.CompanySeq,
                            languageSeq,
                            decodedToken.UserSeq,
                            pgmSeq
                        )

                    ])

                } catch (err) {
                    return { success: false, message: err.message };
                }
            }

            return null;
        };

        // Thực thi và lưu kết quả
        const saveResults = await Promise.all(
            data.map(async ({ name, result }) => {
                const saveResult = await saveProcedure(name, result);
                return saveResult;
            })
        );
        if (saveResults.some((res) => res && !Array.isArray(res) && !res.success)) {
            return { success: false, message: 'Some save procedures failed.', data };
        }

        return { success: true, message: 'All procedures executed successfully.', data };
    }



    /*_SPDMMOutProcSave_WEB  */
    async _SPDMMOutProcSave_WEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMLSPDMMOutProcSaveWEB(result);
        const query = `
      EXEC _SPDMMOutProcSave_WEB
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            /*  const result = await this.databaseService.executeQuery(query);
             return { success: true, data: result }; */
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }

    async _SPDMMOutProcItemSave_WEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, MatOutSeq: any): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMSPDMMOutProcItemSave(result, MatOutSeq);
        const query = `
      EXEC _SPDMMOutProcItemSave_WEB
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            /*  const result = await this.databaseService.executeQuery(query);
             return { success: true, data: result }; */
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }
    async _SLGInOutDailyBatch_WEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, MatOutSeq: any, FactUnit: any, MatOutNo: any): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMLSLGInOutDailyBatchStockoutFiFo(result, MatOutSeq, FactUnit, MatOutNo);
        const query = `
      EXEC _SLGInOutDailyBatch_WEB
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            /*  const result = await this.databaseService.executeQuery(query);
             return { success: true, data: result }; */
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }
    async _SCOMSourceDailySave(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMLSCOMSourceDailySaveFiFo(result);
        const query = `
      EXEC _SCOMSourceDailySave
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = ${serviceSeq},
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            console.log('_SCOMSourceDailySave', query)
            /*  const result = await this.databaseService.executeQuery(query);
             return { success: true, data: result }; */
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }


}
