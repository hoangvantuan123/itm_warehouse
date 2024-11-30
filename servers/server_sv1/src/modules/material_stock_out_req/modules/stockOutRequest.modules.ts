import { Module } from '@nestjs/common';
import { StockOutRequestService } from '../services/stockOutRequest.services';
import { StockOutRequestController } from '../controllers/stockOutRequest.controller';
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';

@Module({
  imports: [],
  providers: [
    DatabaseService,
    StockOutRequestService
  ],
  controllers: [StockOutRequestController],
  exports: [],
})
export class StockOutRequestModule { }
