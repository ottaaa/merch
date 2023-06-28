import { ResponseMerchListDto } from './dto/response/response-merch-list.dto';
import { ResponseMerchDto } from './dto/response/response-merch.dto';
import { QueryPaginationDto } from '../common/dto/request/query-pagination.dto';

import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { Role } from '.prisma/client';

import { UserIdGuard } from '#/src/authentication/guards/user-id.guard';
import { SellerRole } from '#/src/authorization/decorators/seller-role.decorator';
import { SellerRolesGuard } from '#/src/authorization/guards/seller-roles.guard';

@Controller('shops/:shopId/merchs')
@ApiTags('Merch / マーチ')
@ApiHeader({
  name: 'x-user-id',
  description: '認証モジュールを実装したら代わりにAuthorizationヘッダーにトークンを載せて送ってもらう予定',
  example: 1,
})
export class MerchsController {
  @Get('')
  @SellerRole(Role.USER)
  @UseGuards(SellerRolesGuard)
  @UseGuards(UserIdGuard)
  @ApiOperation({
    summary: 'マーチのリストを取得する',
    description: 'マーチのリストを取得します。',
  })
  @ApiOkResponse({ type: ResponseMerchListDto })
  @ApiBadRequestResponse()
  async findAll(@Query() pagination: QueryPaginationDto) {
    return pagination;
  }

  @Get(':merchId')
  @SellerRole(Role.USER)
  @UseGuards(SellerRolesGuard)
  @UseGuards(UserIdGuard)
  @ApiOperation({
    summary: '指定のマーチを取得する',
    description: '指定のマーチを1つ取得します。',
  })
  @ApiOkResponse({ type: ResponseMerchDto })
  @ApiBadRequestResponse()
  async findOne() {
    return 'findAll';
  }
}
