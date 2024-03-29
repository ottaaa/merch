import { Shop } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

import { PrismaObjectToEntity, Fields } from './types/model.type';

export class ShopModel implements PrismaObjectToEntity<Shop> {
  @ApiProperty({ example: 1 })
  readonly id?: number;

  @ApiProperty({ example: '結束バンド' })
  readonly name!: string;

  constructor(props: Fields<ShopModel>) {
    Object.assign(this, props);
  }
}
