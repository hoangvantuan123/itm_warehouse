import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV/database.service';
import { UserAuthService } from '../service/user.service';
import { AuthService } from '../service/auths.service';
import { TCAUserWEB } from '../entities/auths.entity';
import { sqlServerITMV } from 'src/config/database.config';
import { AuthController } from '../controller/auths.controller';
@Module({
    imports: [TypeOrmModule.forFeature([TCAUserWEB]), TypeOrmModule.forRoot(sqlServerITMV),],
    providers: [
        DatabaseService,
        AuthService,
        UserAuthService
    ],
    controllers: [AuthController],
    exports: [],
})
export class AuthsModule { }
