import { Controller, Post, Body, Get, Header, StreamableFile, Query } from '@nestjs/common';
import { PrinterService } from '../service/printer.service';

@Controller('v1/print')
export class PrinterController {
    constructor(private readonly printerService: PrinterService) { }

    @Get('test')
    @Header('Content-Disposition', 'attachment; filename="SheetJSNest.xlsx"')
    async processPrinter(
        @Query('matID') matID: string,
        @Query('lotNo') lotNo: string, 
        ) : Promise<StreamableFile> {
        try{
            return this.printerService.Printer(matID, lotNo);
        }catch(error){
            console.error('Error generating QR code:', error);
        }
    }

}
