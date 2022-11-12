import {
  Controller,
  Get,
  // Param,
  Post,
  Body,
  // Put,
  // Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ItemService } from './item.service';
import { Item as ItemModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly itemService: ItemService,
  ) {}

  @Get('item')
  getHello(): Promise<ItemModel[]> {
    return this.itemService.items({});
  }

  @Post('item')
  async makeItem(
    @Body() itemData: { name: string; price: number },
  ): Promise<ItemModel> {
    return this.itemService.createItem(itemData);
  }
}
