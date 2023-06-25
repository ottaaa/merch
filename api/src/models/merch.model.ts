import { ShopModel } from './shop.model';

import { ApiProperty } from '@nestjs/swagger';

import { Fields } from './types/model.type';

export class MerchModel {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  price!: number;

  @ApiProperty()
  image!: string;

  @ApiProperty()
  isPinning!: boolean;

  @ApiProperty()
  shopId!: number;

  @ApiProperty()
  salesTaxRateId!: number;

  @ApiProperty()
  shop!: ShopModel;

  constructor(props: Fields<MerchModel>) {
    Object.assign(this, props);
  }
}
