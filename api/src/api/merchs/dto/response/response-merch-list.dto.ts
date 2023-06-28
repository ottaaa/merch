import { MerchModel } from '#/src/models/merch.model';

import { ResponsePaginationDto } from '#/src/api/common/dto/response/response-pagination.dto';

import { ApiProperty } from '@nestjs/swagger';

import { Fields } from '#/src/models/types/model.type';

export class ResponseMerchListDto {
  @ApiProperty({
    type: [MerchModel],
  })
  merchs!: MerchModel[];

  @ApiProperty({ type: ResponsePaginationDto })
  pagination!: ResponsePaginationDto;

  constructor(props: Fields<ResponseMerchListDto>) {
    Object.assign(this, props);
  }
}
