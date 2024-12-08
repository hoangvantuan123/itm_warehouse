import { Module } from '@nestjs/common';

import { PrintBarcodeService } from '../services/printBarcodeService';
import { PrintBarcodeController } from '../controllers/printBarcodeController';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    PrintBarcodeService
  ],
  controllers: [PrintBarcodeController],
  exports: [],
})
export class PrintBarcodeModule { }
