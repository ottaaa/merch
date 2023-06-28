import { ShopModel } from '#/src/models/shop.model';

import { ResponsePaginationDto } from '#/src/api/common/dto/response/response-pagination.dto';

import { ApiProperty } from '@nestjs/swagger';

import { Fields } from '#/src/models/types/model.type';

export class ResponseShopListDto {
  @ApiProperty({
    type: [ShopModel],
  })
  shops!: ShopModel[];

  @ApiProperty({ type: ResponsePaginationDto })
  pagination!: ResponsePaginationDto;

  constructor(props: Fields<ResponseShopListDto>) {
    Object.assign(this, props);
  }
}
