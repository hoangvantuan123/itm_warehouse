import { Module } from '@nestjs/common';
import { PrinterController } from '../controller/printer.controller';
import { PrinterService } from '../service/printer.service';
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    PrinterService
  ],
  controllers: [PrinterController],
  exports: [],
})
export class PrinterModule { }
