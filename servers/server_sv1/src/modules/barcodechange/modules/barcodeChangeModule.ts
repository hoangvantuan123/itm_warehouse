import { Module } from '@nestjs/common';

import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { BarcodeChangeService } from '../services/barcodeChangeService';
import { BarcodeChangeController } from '../controllers/barcodeChangeController';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    BarcodeChangeService
  ],
  controllers: [BarcodeChangeController],
  exports: [],
})
export class BarcodeChangeModule { }
