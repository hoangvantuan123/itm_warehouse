import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TCADictionarysWeb } from '../entities/dictionary.entity';
import { TCALanguageWeb } from '../entities/language.entity';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class LanguageService {
    constructor(
        private readonly databaseService: DatabaseService,
        @InjectRepository(TCADictionarysWeb)
        private readonly TCADictionarysWebRepository: Repository<TCADictionarysWeb>,
        @InjectRepository(TCALanguageWeb)
        private readonly TCALanguageWebRepository: Repository<TCALanguageWeb>,
    ) { }

    async GetLanguageWeb(languageSeq: string): Promise<SimpleQueryResult> {
        try {
            const result = await this.databaseService.findLanguageSeq(languageSeq);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }
}
