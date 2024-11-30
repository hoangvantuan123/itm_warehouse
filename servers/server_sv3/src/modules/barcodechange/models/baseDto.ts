import { BarcodeChangeDto } from "./barcodeChangeDto";

export class BaseDto {
  ip?: string;
  port?: number;
  data?: any[];
  barcode?: BarcodeChangeDto;
}

export class BarcodeChange {
  changeLotId :string;
  dateCode: string;
  itemNo : string;
  lotNo : string;
  oldQty: number;
  newQty : number;
  oldBarcode: string;
  reelNo : string;
  remark : string;
  userID : string;
  isConfirm: boolean;
}

export class BarcodeConfirm {
  oldBarcode :string;
  newBarcode: string;
  isconfirm : boolean;
}