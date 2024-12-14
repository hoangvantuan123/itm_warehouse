import {
    Controller,
    Get,
    Query,
    BadRequestException,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { LanguageService } from '../service/language.service';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v2')
export class LanguageController {
    constructor(private readonly languageService: LanguageService) { }

    @Get('language')
    async getLanguageData(@Query('languageSeq') languageSeq: string): Promise<any> {
        if (!languageSeq) {
            throw new BadRequestException('Parameter "languageSeq" is required.');
        }

        const result: SimpleQueryResult = await this.languageService.GetLanguageWeb(languageSeq);

        if (result.success) {
            return result.data;
        } else {
            throw new HttpException(
                result.message || 'An error occurred while fetching language data.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
