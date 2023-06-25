import { ApiProperty } from '@nestjs/swagger';

import { Fields } from './types/model.type';

export class ShopModel {
  @ApiProperty({ example: 1 })
  readonly id?: number;

  @ApiProperty({ example: '結束バンド' })
  readonly name!: string;

  constructor(props: Fields<ShopModel>) {
    Object.assign(this, props);
  }
}
