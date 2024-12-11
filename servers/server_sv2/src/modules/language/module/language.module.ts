import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { sqlServerITMV20240117 } from 'src/config/database.config';
import { TCADictionarysWeb } from '../entities/dictionary.entity';
import { TCALanguageWeb } from '../entities/language.entity';
import { LanguageService } from '../service/language.service';
@Module({
    imports: [TypeOrmModule.forFeature([TCADictionarysWeb, TCALanguageWeb]), TypeOrmModule.forRoot(sqlServerITMV20240117),],
    providers: [
        DatabaseService,
        LanguageService
    ],
    controllers: [],
    exports: [],
})
export class LanguageModule { }
