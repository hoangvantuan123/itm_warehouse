// user.service.ts
import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TCADictionarysWeb } from '../entities/dictionary.entity';
import { TCALanguageWeb } from '../entities/language.entity';

@Injectable()
export class LanguageService {
    constructor(
        @InjectRepository(TCADictionarysWeb)
        private readonly TCADictionarysWebRepository: Repository<TCADictionarysWeb>,
        @InjectRepository(TCALanguageWeb)
        private readonly TCALanguageWebRepository: Repository<TCALanguageWeb>,
    ) { }


}
