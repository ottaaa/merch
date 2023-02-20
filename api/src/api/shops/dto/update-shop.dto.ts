import { ApiProperty } from '@nestjs/swagger';

import { Min, Max } from 'class-validator';

export class UpdateShopDto {
  @Min(1)
  @Max(128)
  @ApiProperty({ required: false, minLength: 1, maxLength: 128, example: '放課後ティータイム' })
  name?: string;
}
