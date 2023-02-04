import { Module } from '@nestjs/common';

import { ItemsController } from '#/src/items/items.controller';

import { ItemsService } from '#/src/items/items.service';
import { PrismaService } from '#/src/prisma.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, PrismaService],
})
export class ItemsModule {}
