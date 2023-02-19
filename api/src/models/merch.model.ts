import { Merch } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

import { PrismaToModelWithout, Properties } from './types/model.type';

export class MerchModel implements PrismaToModelWithout<Merch, 'uuid'> {
  @ApiProperty({ example: 1 })
  readonly id?: number;

  @ApiProperty({ example: '06d65bdc-5cad-45b5-8745-d52a2254773e' })
  readonly uuid?: string;

  @ApiProperty({ example: 'Tシャツ2023' })
  readonly name: string;

  @ApiProperty({ example: '2023年ツアーTシャツ' })
  readonly description: string;

  @ApiProperty({ example: 'path to bucket' })
  readonly image: string;

  @ApiProperty({ example: 1 })
  readonly shopId: number;

  constructor({ id, name, description, image, shopId, uuid }: Properties<MerchModel>) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.uuid = uuid;
    this.shopId = shopId;
  }
}
