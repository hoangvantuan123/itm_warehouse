import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV/database.service';
import { sqlServerITMV } from 'src/config/database.config';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAMenusWEB } from '../entities/menus.entity';
import { TCARolesUsersWEB } from '../entities/rolesUsers.entity';
import { SystemUsersService } from '../service/systemUsers.service';
import { SystemUsersController } from '../controller/systemUsers.controller';
import { TCARootMenusWEB } from '../entities/rootMenus.entity';
import { RootMenusService } from '../service/rootMenus.service';
import { RootMenusController } from '../controller/rootMenus.controller';
import { MenusService } from '../service/menu.service';
import { MenusController } from '../controller/menus.controller';
@Module({
    imports: [TypeOrmModule.forFeature([TCAGroupsWEB, TCAMenusWEB, TCARolesUsersWEB, TCARootMenusWEB]), TypeOrmModule.forRoot(sqlServerITMV),],
    providers: [
        DatabaseService,
        SystemUsersService,
        RootMenusService,
        MenusService
    ],
    controllers: [SystemUsersController, RootMenusController, MenusController],
    exports: [],
})
export class SystemUsersModule { }
