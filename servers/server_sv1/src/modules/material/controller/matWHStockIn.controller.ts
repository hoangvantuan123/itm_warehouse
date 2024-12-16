import { Controller, Get, Query, Post, Body, Req, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { MatWHStockInService } from '../service/matWHStockIn.service';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { jwtConstants } from 'src/config/security.config';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

@Controller('v1/mssql/stock-in')
export class MatWHStockInController {
    constructor(private readonly matWHStockInService: MatWHStockInService) { }


    @Get('itm-spd-mat-wh-stockin-list')
    async processITMSPDMatWHStockInList(
        @Query('blSeq') blSeq: number,
        @Query('blSerl') blSerl: number,
    ): Promise<SimpleQueryResult> {
        const result = await this.matWHStockInService.ITM_SPDMatWHStockInList_WEB(blSeq, blSerl);
        return result;
    }

    /* CHECK ALL STOCKIN */

    @Post('check-all-procedures-mat-wh-stock-in')
    async checkAllProceduresMatWHStockIn(@Body() body: any, @Req() req: Request) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }
        try {
            const decodedToken = jwt.verify(token, jwtConstants.secret) as { UserId: any, EmpSeq: any, UserSeq: any, CompanySeq: any };
            
            const { dataSave, xmlDocument, ...otherParams } = body;
            const procedureData = [
                { name: '_SCOMCloseCheck_WEB', xmlDocument: xmlDocument.xmlSCOMCloseCheckWEB, serviceSeq: 2639 },
                { name: '_SCOMCloseItemCheck_WEB', xmlDocument: xmlDocument.xmlSCOMCloseItemCheckWEB, serviceSeq: 2639 },
                { name: '_SLGInOutDailyCheck_WEB', xmlDocument: xmlDocument.xmlInOutDailyCheckWEB, serviceSeq: 2619 },
                { name: '_SLGInOutDailyItemCheck_WEB', xmlDocument: xmlDocument.xmlInOutDailyItemCheckWEB, serviceSeq: 2619 },
            ];

            const result = await this.matWHStockInService.checkAllProceduresMatWHStockIn(
                procedureData,
                otherParams.xmlFlags,
                otherParams.workingTag,
                otherParams.languageSeq,
                otherParams.pgmSeq, 
                dataSave,
                decodedToken
            );
            return result;
        } catch (error) {
            throw new HttpException(
                { message: error.message || 'Internal Server Error' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
    

}
