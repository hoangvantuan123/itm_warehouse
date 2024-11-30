import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';
import { TCAGroupsWEB } from '../entities/groups.entity';

@Injectable()
export class SystemUsersService {
    constructor(@InjectRepository(TCAGroupsWEB)
    private readonly resTCAGroupsWEBRepository: Repository<TCAGroupsWEB>, private readonly databaseService: DatabaseService) { }

    async GetFilteredTCAUserWEB(userId: string, userName: string): Promise<SimpleQueryResult> {
        const query = `
      EXEC GetFilteredTCAUserWEB 
        @UserId = N'${userId}',
        @UserName = N'${userName}';
    `;

        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }

    async createTCAGroupsWEB(
        userId: string,
        createResGroupsDto: Partial<TCAGroupsWEB>,
    ): Promise<{ success: boolean; message: string; data?: any }> {
        try {
            const user = await this.databaseService.findAuthByEmpID(userId);
            if (!user) {
                throw new NotFoundException('NULL_DATA_USER_SOS');
            }
            const newGroup = this.resTCAGroupsWEBRepository.create(createResGroupsDto);
            const savedGroup = await this.resTCAGroupsWEBRepository.save(newGroup);
            return {
                success: true,
                message: SUCCESS_MESSAGES.RECORD_CREATED,
                data: savedGroup,
            };
        } catch (error) {
            throw new InternalServerErrorException(`Error creating group: ${error.message}`);
        }
    }



}
