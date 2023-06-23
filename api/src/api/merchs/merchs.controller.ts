import { Controller, Get } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@Controller('shops/:shopId/merchs')
@ApiTags('Merch / マーチ')
@ApiHeader({
  name: 'x-user-id',
  description: '認証モジュールを実装したら代わりにAuthorizationヘッダーにトークンを載せて送ってもらう予定',
  example: 1,
})
export class MerchsController {
  @Get()
  async findAll() {
    return 'test';
  }
}
