import { Module } from '@nestjs/common';

import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { BarcodeChangeService } from '../services/barcodeChangeService';
import { BarcodeChangeController } from '../controllers/barcodeChangeController';
import { PrintBarcodeService } from 'src/modules/print_barcode/services/printBarcodeService';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    BarcodeChangeService,
    PrintBarcodeService
  ],
  controllers: [BarcodeChangeController],
  exports: [],
})
export class BarcodeChangeModule { }
