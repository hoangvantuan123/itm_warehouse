import {
    Controller,
    Get,
    Post,
    HttpStatus,
    Body,
    Param,
    Put,
    Delete,
    Query,
    Req,
    Res,
    UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { SystemUsersService } from '../service/systemUsers.service';
import { CreateResGroupsDto } from '../dto/groups.dto';
import { Request, Response } from 'express';
import { jwtConstants } from 'src/config/security.config';


@Controller('v1/mssql/system-users')
export class SystemUsersController {
    constructor(private readonly systemUsersService: SystemUsersService) { }

    @Get('itm-roles-data-users-web')
    async convertDC(
        @Query('userId') userId: string,
        @Query('userName') userName: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.systemUsersService.GetFilteredTCAUserWEB(userId, userName);
        return result;
    }

    @Get('itm-group-roles')
    async groupRoles(
        @Req() req: Request,
        @Body() createResGroupsDto: Partial<CreateResGroupsDto>,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createTCAGroupsWEB(
                userId,
                createResGroupsDto
            );
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }




}
