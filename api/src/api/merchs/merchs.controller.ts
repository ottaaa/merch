import { ShopModel } from '#/src/models/shop.model';

import { CreateShopDto } from '../shops/dto/create-shop.dto';

import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';

import { UserIdGuard } from '#/src/authentication/guards/user-id.guard';

@Controller('shops/:shopId/merchs')
@ApiTags('Merch / マーチ')
@ApiHeader({
  name: 'x-user-id',
  description: '認証モジュールを実装したら代わりにAuthorizationヘッダーにトークンを載せて送ってもらう予定',
  example: 1,
})
export class MerchsController {
  @Post('')
  @UseGuards(UserIdGuard)
  @ApiOperation({
    summary: 'マーチを作成する',
    description: 'マーチを作成します。',
  })
  @ApiBody({ type: CreateShopDto })
  @ApiCreatedResponse({ type: ShopModel })
  @ApiBadRequestResponse()
  async create() {
    return 'create';
  }

  @Get('')
  async findAll() {
    return 'findAll';
  }
}
