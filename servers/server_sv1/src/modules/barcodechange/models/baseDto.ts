import { BarcodeChangeDto } from "./barcodeChangeDto";

export class BaseDto {
    ip? : string ;
    port?: number;
    data?: any[];
    barcode?: BarcodeChangeDto;
  }