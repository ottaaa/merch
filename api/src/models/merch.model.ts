import { ShopModel } from './shop.model';

import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';

import { Fields } from './types/model.type';

export class MerchModel {
  @ApiProperty({ example: 'Tシャツ2023' })
  name!: string;

  @ApiProperty({ example: '2023年のTシャツ' })
  description!: string;

  @ApiProperty({ example: 2500 })
  price!: number;

  @ApiProperty({ example: 'https://static.bucket/path' })
  image!: string;

  @ApiProperty({ example: true })
  isPinning!: boolean;

  @ApiProperty({ example: 1 })
  shopId!: number;

  @ApiProperty({ example: 1 })
  salesTaxRateId!: number;

  @Exclude()
  shop!: ShopModel;

  constructor(props: Fields<MerchModel>) {
    Object.assign(this, props);
  }
}
