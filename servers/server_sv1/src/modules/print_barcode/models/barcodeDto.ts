import { ItemLabelDto } from "./itemLabelDto";

export class BarcodeDto {
    ip? : string ;
    port?: number;
    data?: any[];
    newlabel?: ItemLabelDto;
  }