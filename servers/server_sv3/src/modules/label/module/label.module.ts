import { Module } from '@nestjs/common';
import { LabelService } from '../service/label.service';
import { LabelController } from '../controller/label.controller';
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';

@Module({
  imports: [

  ],
  providers: [
    LabelService,
    DatabaseService
  ],
  controllers: [LabelController],
  exports: [],
})
export class LabelModule { }
