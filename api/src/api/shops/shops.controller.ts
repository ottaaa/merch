import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { ShopsService } from './shops.service';

import { Body, Controller, Delete, Get, Headers, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { ShopModel } from '../../models/shop.model';

@Controller('shops')
@ApiTags('Shop / 物販')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post('')
  @ApiOperation({
    summary: '物販を作成する',
    description: '物販を作成します。カレントユーザーを物販のオーナー販売者として設定します。',
  })
  @ApiBody({ type: CreateShopDto })
  @ApiCreatedResponse({ type: ShopModel })
  async create(@Headers('x-user-id') uid: number, @Body() body: CreateShopDto) {
    const userId = Number(uid);
    return this.shopsService.create(body, userId);
  }

  @Get('')
  @ApiOperation({
    summary: '物販のリストを取得する',
    description: 'カレントユーザーが販売者として所属する物販のリストを取得します。',
  })
  @ApiOkResponse({ type: ShopModel })
  async findAll(@Headers('x-user-id') uid: number): Promise<ShopModel[] | null> {
    const userId = Number(uid);
    return await this.shopsService.findAll(userId);
  }

  @Get(':id')
  @ApiOperation({
    summary: '物販を取得する',
    description: '物販を1つ取得します。取得できる物販はカレントユーザーが販売者として所属するものに限ります。',
  })
  @ApiParam({ name: 'id', example: 1 })
  @ApiOkResponse({ type: ShopModel })
  async findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: number
  ): Promise<ShopModel | null> {
    return await this.shopsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '物販を更新する',
    description: '物販を更新します。更新できる物販はカレントユーザーが販売者として所属するものに限ります。',
  })
  @ApiParam({ name: 'id', example: 1 })
  @ApiOkResponse({ type: ShopModel })
  async update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: number,
    @Body() body: UpdateShopDto
  ): Promise<ShopModel> {
    return await this.shopsService.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '物販を削除する',
    description:
      '物販を削除します。削除できる物販はカレントユーザーが販売者として所属し、かつオーナー権限を持つものに限ります。',
  })
  @ApiParam({ name: 'id', example: 1 })
  @ApiOkResponse({ type: ShopModel })
  async delete(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) id: number
  ): Promise<ShopModel | null> {
    return await this.shopsService.delete(id);
  }
}
