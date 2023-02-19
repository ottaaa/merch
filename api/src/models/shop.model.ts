import { Shop } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

import { Exclude } from 'class-transformer';

import { PrismaToModel, Properties } from './types/model.type';

export class ShopModel implements PrismaToModel<Shop> {
  @ApiProperty({ type: Number, example: 1 })
  @Exclude({ toPlainOnly: true })
  readonly id?: number;

  @ApiProperty({ type: String, example: '結束バンド' })
  readonly name: string;

  constructor({ id, name }: Properties<ShopModel>) {
    this.id = id;
    this.name = name;
  }
}
