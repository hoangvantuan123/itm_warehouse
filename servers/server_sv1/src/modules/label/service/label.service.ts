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

              ^FO60,30^BY2,4,20
              ^BCN,80,Y,N,N         ; Barcode với chiều cao 50
              ^FD {BARCODE_DATA}^FS

              ; Cột trái
              ^FO60,140^A0N,30,40^FDCode: {CODE}^FS  ; Đặt ngay dưới barcode
              ^FO60,180^A0N,30,40^FDLot: {LOT}^FS
              ^FO60,210^A0N,30,40^FDReel: {REEL}^FS

              ; Cột phải
              ^FO460,140^A0N,30,40^FDQTY: {QTY}^FS
              ^FO460,180^A0N,30,40^FDDC: {DC}^FS
              ^FO460,210^A0N,30,40^FDUserID: {USER_ID}^FS

              ; QR Code
              ^FO1100,0^BQN,8,8     ; QR code nhỏ hơn
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

