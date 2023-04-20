import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { ShopsService } from './shops.service';

import { Role } from '@prisma/client';

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { ShopModel } from '../../models/shop.model';

import { UserId } from '#/src/authentication/decorators/guard-response.decorator';
import { UserIdGuard } from '#/src/authentication/guards/user-id.guard';
import { SellerRole } from '#/src/authorization/decorators/seller-role.decorator';
import { SellerRolesGuard } from '#/src/authorization/guards/seller-roles.guard';

@Controller('shops')
@ApiTags('Shop / 物販')
@ApiHeader({
  name: 'x-user-id',
  description: '認証モジュールを実装したら代わりにAuthorizationヘッダーにトークンを載せて送ってもらう予定',
  example: 1,
})
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post('')
  @UseGuards(UserIdGuard)
  @HttpCode(201)
  @ApiOperation({
    summary: '物販を作成する',
    description: '物販を作成します。カレントユーザーを物販のオーナー販売者として設定します。',
  })
  @ApiBody({ type: CreateShopDto })
  @ApiCreatedResponse({ type: ShopModel })
  @ApiBadRequestResponse()
  async create(@UserId() userId: number, @Body() body: CreateShopDto): Promise<ShopModel> {
    return this.shopsService.create(body, userId);
  }

  @Get('')
  @UseGuards(UserIdGuard)
  @ApiOperation({
    summary: '物販のリストを取得する',
    description: 'カレントユーザーが販売者として所属する物販のリストを取得します。',
  })
  @ApiOkResponse({ type: ShopModel })
  @ApiBadRequestResponse()
  async findAll(@UserId() userId: number): Promise<ShopModel[] | null> {
    return await this.shopsService.findAll(userId);
  }

  @Get(':shopId')
  @SellerRole(Role.USER)
  @UseGuards(SellerRolesGuard)
  @ApiOperation({
    summary: '物販を取得する',
    description: '物販を1つ取得します。取得できる物販はカレントユーザーが販売者として所属するものに限ります。',
  })
  @ApiParam({ name: 'shopId', example: 1 })
  @ApiOkResponse({ type: ShopModel })
  @ApiBadRequestResponse()
  async findOne(
    @Param('shopId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: number
  ): Promise<ShopModel | null> {
    return await this.shopsService.findOne(id);
  }

  @Patch(':shopId')
  @SellerRole(Role.USER)
  @UseGuards(SellerRolesGuard)
  @ApiOperation({
    summary: '物販を更新する',
    description: '物販を更新します。更新できる物販はカレントユーザーが販売者として所属するものに限ります。',
  })
  @ApiParam({ name: 'shopId', example: 2 })
  @ApiBody({ type: UpdateShopDto })
  @ApiOkResponse({ type: ShopModel })
  @ApiBadRequestResponse()
  async update(
    @Param('shopId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: number,
    @Body() body: UpdateShopDto
  ): Promise<ShopModel> {
    return await this.shopsService.update(id, body);
  }

  @Delete(':shopId')
  @SellerRole(Role.OWNER)
  @UseGuards(SellerRolesGuard)
  @HttpCode(204)
  @ApiOperation({
    summary: '物販を削除する',
    description:
      '物販を削除します。削除できる物販はカレントユーザーが販売者として所属し、かつオーナー権限を持つものに限ります。',
  })
  @ApiParam({ name: 'shopId', example: 1 })
  @ApiNoContentResponse()
  @ApiBadRequestResponse()
  async delete(
    @Param('shopId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: number
  ): Promise<void> {
    await this.shopsService.delete(id);
  }
}
