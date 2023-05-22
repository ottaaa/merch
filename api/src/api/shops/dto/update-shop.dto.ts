import { ApiProperty } from '@nestjs/swagger';

import { IsString, Length } from 'class-validator';

export class UpdateShopDto {
  @IsString()
  @Length(1, 128)
  @ApiProperty({ required: false, minLength: 1, maxLength: 128, example: '放課後ティータイム' })
  name?: string;
}
