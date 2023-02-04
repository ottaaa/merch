import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ItemsService } from '#/src/items/items.service';

import { CreateItemDto } from '#/src/items/dto/create-item.dto';
import { ResponseItemDto, ResponseItemsDto } from '#/src/items/dto/response-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('')
  @ApiTags('items')
  @ApiOkResponse({
    type: ResponseItemsDto,
  })
  async findAll(): Promise<ResponseItemsDto> {
    const items = await this.itemsService.items({});
    const response = new ResponseItemsDto(items);
    return response;
  }

  @Post('')
  @ApiTags('items')
  @ApiCreatedResponse({
    type: ResponseItemDto,
  })
  async makeItem(@Body() createItemDto: CreateItemDto): Promise<ResponseItemDto> {
    const item = await this.itemsService.createItem(createItemDto);
    const response = new ResponseItemDto(item);
    return response;
  }
}
