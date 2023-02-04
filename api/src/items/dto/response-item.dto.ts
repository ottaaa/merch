import { ApiProperty } from '@nestjs/swagger';

import { Item as ItemModel } from '@prisma/client';

import { ItemEntity } from '#/src/items/entities/item.entity';

export class ResponseItemDto {
  @ApiProperty({
    type: ItemEntity,
    example: {
      id: 1,
      name: 'Tシャツ',
      price: 2500,
      createdAt: '2022-11-14T14:04:02.063Z',
      updatedAt: '2022-11-14T14:04:02.063Z',
    },
  })
  item: ItemModel;

  constructor(item: ItemModel) {
    this.item = item;
  }
}

export class ResponseItemsDto {
  @ApiProperty({
    type: [ItemEntity],
    example: [
      {
        id: 1,
        name: 'Tシャツ',
        price: 3000,
        createdAt: '2022-11-14T14:04:02.063Z',
        updatedAt: '2022-11-14T14:04:02.063Z',
      },
    ],
  })
  items: ItemModel[] = [];

  constructor(items: ItemModel[]) {
    this.items.push(...items);
  }
}
