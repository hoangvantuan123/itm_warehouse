import { Controller, Get, Query, Post, Body, Req, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DeliveryListService } from '../service/deliveryList.service';
import { Request } from 'express';
import { jwtConstants } from 'src/config/security.config';
import * as jwt from 'jsonwebtoken';
@Controller('v1/mssql/deliverry-list')
export class DeliveryListController {
    constructor(private readonly deliverryService: DeliveryListService) { }

    @Get('itm-sug-get-active-delivery-web')
    async convertDC(
        @Query('fromDate') fromDate: string,
        @Query('toDate') toDate: string,
        @Query('deliveryNo') deliveryNo: string,
        @Query('delivbizUniteryNo') bizUnit: number,
        @Req() req: Request
    ): Promise<SimpleQueryResult> {

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

            const result = await this.deliverryService.ITM_SUGGetActiveDelivery_WEB(fromDate, toDate, deliveryNo, bizUnit);
            return result;
        } catch (error) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }
    }

}
