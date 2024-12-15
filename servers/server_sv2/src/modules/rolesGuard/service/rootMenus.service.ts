import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TCARootMenusWEB } from '../entities/rootMenus.entity';

@Injectable()
export class RootMenusService {
    constructor(
        @InjectRepository(TCARootMenusWEB)
        private readonly rootMenusRepository: Repository<TCARootMenusWEB>,
    ) { }

    private chunkArray<T>(array: T[], size: number): T[][] {
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

   async addMultipleRootMenu(records: TCARootMenusWEB[]): Promise<any> {
    if (!records || records.length === 0) {
      throw new Error('No records provided for insertion');
    }

    const batchSize = 1000; 
    const batches = this.chunkArray(records, batchSize);

    let affectedRows = 0;
    for (const batch of batches) {
      const result = await this.rootMenusRepository.insert(batch);
      affectedRows += result.identifiers.length;
    }

    return { affectedRows };
  }
  async updateMultipleRootMenu(records: TCARootMenusWEB[]): Promise<any> {
    if (!records || records.length === 0) {
      throw new Error('No records provided for update');
    }

    const batchSize = 1000;
    const batches = this.chunkArray(records, batchSize);

    let affectedRows = 0;

    for (const batch of batches) {
      for (const record of batch) {
        const { Id, ...updateData } = record;

        await this.rootMenusRepository.update(Id, updateData);
        affectedRows++;
      }
    }

    return { affectedRows };
}

}
