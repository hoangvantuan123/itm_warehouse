import {
    Controller,
    Post,
    Body,
    Req,
    UnauthorizedException,
} from '@nestjs/common';
import { MenusService } from '../service/menu.service';
import { TCAMenusWEB } from '../entities/menus.entity';
import { Request } from 'express';
import { jwtConstants } from 'src/config/security.config';
import * as jwt from 'jsonwebtoken';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v2/mssql/system-users')
export class MenusController {
    constructor(private readonly menusService: MenusService) { }

    @Post('add-menus')
    async addBatch(
        @Body() records: TCAMenusWEB[],
        @Req() req: Request,
    ): Promise<SimpleQueryResult> {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException(
                'You do not have permission to access this API.',
            );
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException(
                'You do not have permission to access this API.',
            );
        }

        try {
            const decodedToken = jwt.verify(token, jwtConstants.secret) as {
                UserId: any;
                EmpSeq: any;
                UserSeq: any;
                CompanySeq: any;
            };


            await this.menusService.addMultipleMenu(records);

            return {
                success: true,
                message: 'Insert successful',
            };
        } catch (error) {
            throw new UnauthorizedException(
                'You do not have permission to access this API.',
            );
        }
    }


    @Post('update-menus')
    async updateBatch(
        @Body() records: TCAMenusWEB[],
        @Req() req: Request,
    ): Promise<SimpleQueryResult> {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException(
                'You do not have permission to access this API.',
            );
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException(
                'You do not have permission to access this API.',
            );
        }

        try {
            const decodedToken = jwt.verify(token, jwtConstants.secret) as {
                UserId: any;
                EmpSeq: any;
                UserSeq: any;
                CompanySeq: any;
            };

          
            await this.menusService.updateMultipleMenu(records);
            return {
                success: true,
                message: 'Batch update successful',
            };
        } catch (error) {
            throw new UnauthorizedException(
                'You do not have permission to access this API.',
            );
        }
    }
}
