import { ApiProperty } from '@nestjs/swagger';

export class ResponsePaginationDto {
  @ApiProperty({
    description: 'ページネーションのカーソル',
    example: 34,
  })
  cursor!: number;
}
