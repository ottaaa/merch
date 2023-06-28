import { ShopModel } from '#/src/models/shop.model';

import { ApiProperty } from '@nestjs/swagger';

import { Fields } from '#/src/models/types/model.type';

export class ResponseShopDto {
  @ApiProperty({
    type: ShopModel,
  })
  shop!: ShopModel;

  constructor(props: Fields<ResponseShopDto>) {
    Object.assign(this, props);
  }
}
