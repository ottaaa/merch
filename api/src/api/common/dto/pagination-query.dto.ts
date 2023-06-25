import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

const sort = ['asc', 'desc'] as const;
type Sort = (typeof sort)[number];

export class PaginationQueryDto {
  @ApiProperty({
    description: 'ページネーションのカーソル。API は cursor で渡された値より後のレコードを返します',
    default: '1',
    example: '2023-06-25T04:04:14.118Z',
  })
  cursor?: string = '1';

  @ApiProperty({
    description: 'カーソルで指定するフィールド',
    default: 'id',
    example: 'createdAt',
  })
  cursorField?: string = 'id';

  @ApiPropertyOptional({
    description: '取得件数',
    default: 20,
    example: 50,
    maximum: 200,
  })
  take?: number = 20;

  @ApiPropertyOptional({
    enum: sort,
    description: 'ソート',
    default: 'asc',
    example: 'asc',
  })
  sortBy?: Sort = 'asc';
}
