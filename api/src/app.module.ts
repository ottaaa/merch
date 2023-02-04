import { Module } from '@nestjs/common';

import { ItemsModule } from '#/src/items/items.module';

@Module({
  imports: [ItemsModule],
})
export class AppModule {}
