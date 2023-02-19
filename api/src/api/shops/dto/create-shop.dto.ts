import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, Max, Min } from 'class-validator';

export class CreateShopDto {
  @ApiProperty({ type: Number, example: '放課後ティータイム' })
  @IsNotEmpty()
  @Min(1)
  @Max(128)
  name!: string;
}
