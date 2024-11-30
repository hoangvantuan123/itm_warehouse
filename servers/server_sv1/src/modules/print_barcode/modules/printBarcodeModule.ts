import { Module } from '@nestjs/common';

import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';
import { PrintBarcodeService } from '../services/printBarcodeService';
import { PrintBarcodeController } from '../controllers/printBarcodeController';

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
