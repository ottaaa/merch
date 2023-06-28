import { ShopModel } from '#/src/models/shop.model';

import { ApiProperty } from '@nestjs/swagger';

import { Fields } from '#/src/models/types/model.type';

export class ResponseShopListDto {
  @ApiProperty({
    type: [ShopModel],
  })
  shops!: ShopModel[];

  constructor(props: Fields<ResponseShopListDto>) {
    Object.assign(this, props);
  }
}
