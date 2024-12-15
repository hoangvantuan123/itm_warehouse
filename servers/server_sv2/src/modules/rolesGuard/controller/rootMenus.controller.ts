import {
    Controller,
    Post,
    Body,
    Req,
    UnauthorizedException,
} from '@nestjs/common';
import { RootMenusService } from '../service/rootMenus.service';
import { TCARootMenusWEB } from '../entities/rootMenus.entity';
import { Request } from 'express';
import { jwtConstants } from 'src/config/security.config';
import * as jwt from 'jsonwebtoken';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v2/mssql/system-users')
export class RootMenusController {
    constructor(private readonly rootMenusService: RootMenusService) { }

    @Post('add-root-menus')
    async addBatch(
        @Body() records: TCARootMenusWEB[],
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

            if (
                !decodedToken.EmpSeq ||
                !decodedToken.UserSeq ||
                !decodedToken.CompanySeq
            ) {
                throw new UnauthorizedException(
                    'You do not have permission to access this API.',
                );
            }

            await this.rootMenusService.addMultipleRootMenu(records);

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


    @Post('update-root-menus')
    async updateBatch(
        @Body() records: TCARootMenusWEB[],
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

            if (
                !decodedToken.EmpSeq ||
                !decodedToken.UserSeq ||
                !decodedToken.CompanySeq
            ) {
                throw new UnauthorizedException(
                    'You do not have permission to access this API.',
                );
            }

            await this.rootMenusService.updateMultipleRootMenu(records);
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
