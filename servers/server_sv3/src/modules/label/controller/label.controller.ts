import { Controller, Post, Body, Get, Header, StreamableFile, Query } from '@nestjs/common';
import { LabelService } from '../service/label.service';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { LabelDto } from '../model/labelDto';

@Controller('v1/label')
export class LabelController {
    constructor(private readonly labelService: LabelService) { }

    @Get('test')
    async processPrinter(
    ): Promise<LabelDto> {
        try {
            return this.labelService.Label();
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    }
}
