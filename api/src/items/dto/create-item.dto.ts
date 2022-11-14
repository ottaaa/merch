import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    example: 'バイサマ CD',
  })
  name: string;

  @ApiProperty({
    example: 800,
  })
  price: number;
}
