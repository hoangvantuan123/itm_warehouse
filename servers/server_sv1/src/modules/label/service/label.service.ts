// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/common/database/sqlServer/ITMBARCODE/database.service';
import { LabelDto } from '../model/labelDto';

@Injectable()
export class LabelService {
  constructor(
    private readonly mySqlService: DatabaseService,
    
  ) { }

   async Label(): Promise<LabelDto> {

    try {
      const templateZpl = `

              ^XA
              ^PW1100                ; Đặt chiều rộng tem (600 dots)
              ^LL500                ; Đặt chiều cao tem (300 dots)
              ^CF0,30             ; Đặt kích thước font mặc định

              ^FO0,10^BY2,2,30
              ^BCN,50,Y,N,N         ; Barcode với chiều cao 50
              ^FD {BARCODE_DATA}^FS

              ; Cột trái
              ^FO20,90^A0N,20,20^FDCode: {CODE}^FS  ; Đặt ngay dưới barcode
              ^FO20,120^A0N,20,20^FDLot: {LOT}^FS
              ^FO20,150^A0N,20,20^FDReel: {REEL}^FS

              ; Cột phải
              ^FO300,90^A0N,20,20^FDQTY: {QTY}^FS
              ^FO300,120^A0N,20,20^FDDC: {DC}^FS
              ^FO300,150^A0N,20,20^FDUserID: {USER_ID}^FS

              ; QR Code
              ^FO650,0^BQN,2,5     ; QR code nhỏ hơn
              ^FDQA,{QR_DATA}^FS
              ^XZ

      `;

      const resultData = {
        zplCode: templateZpl,
      }

      return resultData;
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
    return result[0];
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

