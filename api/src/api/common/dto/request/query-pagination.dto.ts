import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsIn, IsInt, Max, Min } from 'class-validator';

const sort = ['asc', 'desc'] as const;
type Sort = (typeof sort)[number];

const DEFAULT_PARAMS: {
  CURSOR: number;
  TAKE: number;
  SORT_BY: Sort;
} = {
  CURSOR: 1,
  TAKE: 200,
  SORT_BY: 'asc',
};

export class QueryPaginationDto {
  @ApiProperty({
    description: 'ページネーションのカーソル。API は cursor で渡されたidより後のレコードを返します',
    default: DEFAULT_PARAMS.CURSOR,
    example: 34,
    required: false,
  })
  @Type(() => Number)
  @IsInt()
  cursor?: number;

  @ApiPropertyOptional({
    description: '取得件数',
    default: DEFAULT_PARAMS.TAKE,
    example: 50,
    maximum: 1000,
    required: false,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(DEFAULT_PARAMS.TAKE)
  take: number = DEFAULT_PARAMS.TAKE;

  @ApiPropertyOptional({
    enum: sort,
    description: 'ソート',
    default: DEFAULT_PARAMS.SORT_BY,
    example: 'asc',
    required: false,
  })
  @IsIn(sort)
  sortBy: Sort = DEFAULT_PARAMS.SORT_BY;
}
