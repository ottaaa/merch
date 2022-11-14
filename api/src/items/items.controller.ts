import { Body, Controller, Get, Post } from '@nestjs/common';
import { Item as ItemModel } from '@prisma/client';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('')
  getHello(): Promise<ItemModel[]> {
    return this.itemsService.items({});
  }

  @Post('')
  async makeItem(
    @Body() itemData: { name: string; price: number },
  ): Promise<ItemModel> {
    console.log(itemData);
    return this.itemsService.createItem(itemData);
  }
}
