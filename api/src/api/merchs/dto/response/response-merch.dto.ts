import { MerchModel } from '#/src/models/merch.model';

import { ApiProperty } from '@nestjs/swagger';

import { Fields } from '#/src/models/types/model.type';

export class ResponseMerchDto {
  @ApiProperty({
    type: MerchModel,
  })
  merch!: MerchModel;

  constructor(props: Fields<ResponseMerchDto>) {
    Object.assign(this, props);
  }
}
