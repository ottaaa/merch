import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, Length } from 'class-validator';

export class CreateShopDto {
  @IsNotEmpty()
  @Length(1, 128)
  @ApiProperty({ minLength: 1, maxLength: 128, example: '結束バンド' })
  name!: string;
}
