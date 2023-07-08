import { ToBoolean } from '#/src/transformers/to-boolean';
import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class QueryMerchListDto {
  @ApiProperty({
    description: 'trueの場合、表示設定がされているマーチのみを返します。',
    default: false,
    example: false,
    required: false,
  })
  @ToBoolean(false)
  @IsBoolean()
  isDisplay!: boolean;
}
