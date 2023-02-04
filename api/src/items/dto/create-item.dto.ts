import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({
    example: 'CD',
  })
    name: string;

  @ApiProperty({
    example: 1000,
  })
    price: number;
}
