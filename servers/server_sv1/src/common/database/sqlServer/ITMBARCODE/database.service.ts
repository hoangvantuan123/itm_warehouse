import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, QueryRunner } from 'typeorm';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class DatabaseService {
  private queryRunner: QueryRunner;

  constructor(@InjectConnection('ITMBARCODE') private readonly ITMBARCODE: Connection) {
    this.queryRunner = this.ITMBARCODE.createQueryRunner();
    this.checkConnection();
  }

  private async checkConnection() {
    try {
      if (this.ITMBARCODE.isConnected) {
        console.log(SUCCESS_MESSAGES.SUCCESS_ITMBARCODE);
      } else {
        console.error(ERROR_MESSAGES.ERROR_ITMBARCODE);
      }
    } catch (error) {
      console.error(ERROR_MESSAGES.DATABASE_ERROR, error);
    }
  }

  async executeQuery(query: string): Promise<any> {
    try {
      return await this.queryRunner.query(query);
    } catch (error) {
      throw error;
    }
  }

  async executeQueryTest(query: string): Promise<any> {
    try {
      const result = await this.queryRunner.query(query);

      if (Array.isArray(result)) {
        return result;
      }

      return { message: 'Query executed successfully', result: result };
    } catch (error) {
      throw error;
    }
  }

}
