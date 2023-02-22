import { Merch } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

import { PrismaObjectToEntityWithout, Fields } from './types/model.type';

export class MerchModel implements PrismaObjectToEntityWithout<Merch, 'uuid'> {
  @ApiProperty({ example: 1 })
  readonly id?: number;

  @ApiProperty({ example: '06d65bdc-5cad-45b5-8745-d52a2254773e' })
  readonly uuid?: string;

  @ApiProperty({ example: 'Tシャツ2023' })
  readonly name!: string;

  @ApiProperty({ example: '2023年ツアーTシャツ' })
  readonly description!: string;

  @ApiProperty({ example: 'path to bucket' })
  readonly image!: string;

  @ApiProperty({ example: 1 })
  readonly shopId!: number;

  constructor(props: Fields<MerchModel>) {
    Object.assign(this, props);
  }
}
