// src/users/users.service.ts

import { Injectable, StreamableFile } from '@nestjs/common';
import { QueryResult } from 'typeorm';
import * as Exceljs from 'exceljs';
import * as QRCode from 'qrcode';
import path from 'path';
import * as fs from 'fs';
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';


@Injectable()
export class PrinterService {
  constructor(private readonly mySqlService: DatabaseService) { }

  async Printer(matID: string, lotNo: string): Promise<StreamableFile> {
    try {


      const templatePath = 'E:/Workspaces/itm_warehouse/servers/server_sv1/resources/SheetJSNest.xlsx';

      const workbook = new Exceljs.Workbook();
      await workbook.xlsx.readFile(templatePath);

      

      const sheet = workbook.getWorksheet(1);
      const data = await this.GetData(matID, lotNo);
      // console.log(data);
      if (Array.isArray(data) && data.length > 0) {
        for (const row of data) {
          const strCodeItem = `${row.ITEMCD}/${row.LOTNO}/${row.QTY}/${row.DATECODE}/${row.REELNO}`;
          const qrItemBuffer = await QRCode.toBuffer(strCodeItem);
          const base64Qr = qrItemBuffer.toString('base64');
          console.log(strCodeItem);



          const itemCodeCell = sheet.getCell('A2');
          itemCodeCell.value = strCodeItem;

          const codeCell = sheet.getCell('A3');
          codeCell.value = 'Code: ' + row.ITEMCD;

          const dateCodeCell = sheet.getCell('A3');
          dateCodeCell.value = 'DC: ' + row.DATECODE;

          const lotCell = sheet.getCell('B3');
          lotCell.value = 'Lot: ' + row.LOTNO;

          const qtyCell = sheet.getCell('C3');
          qtyCell.value = 'Lot: ' + row.QTY;

          const reelCell = sheet.getCell('B4');
          reelCell.value = 'Reel: ' + row.Reel;

          const qrcode = sheet.getCell('D1');
          qrcode.value = ' data:image/png;base64,' + base64Qr + ' ';


        }
      }
      const updatedExcelBuffer = await workbook.xlsx.writeBuffer();

      return new StreamableFile(new Uint8Array(updatedExcelBuffer));
    } catch (error) {
      console.error('Error generating QR code:', error);

    }
  }
  

  async GetData(matID: string, lotNo: string) {
    let query = ` SELECT * FROM EWIPRMTBCI WHERE (1=1) `;
    query += await this.genWhereClause(matID, lotNo);

    const result = await this.mySqlService.executeQuery(
      query
    );
    return result;
  }

  async genWhereClause(matID: string, lotNo: string) {


    let query = ``;

    // if (dateFr != null) {
    //   query += ` AND DATETIME > '` + dateFr + `'`;
    // }
    // if (dateTo != null) {
    //   query += ` AND DATETIME <= '` + dateTo + `'`;
    // }
    // if (vendor != null) {
    //   query += ` AND VENDOR = '` + vendor + `'`;
    // }
    if (matID != '') {
      query += ` AND ITEMCD LIKE '` + matID + `'`;
    }
    if (lotNo != '') {
      query += ` AND LOTNO LIKE '` + lotNo + `'`;
    }

    return query;
  }


}

