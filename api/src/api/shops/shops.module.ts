import { IShopsRepository } from './interfaces/shops.interface';

import { MerchsModule } from '../merchs/merchs.module';

import { ShopsRepository } from './infra/shops.repository';

import { ShopsService } from './shops.service';

import { ShopsController } from './shops.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [MerchsModule],
  controllers: [ShopsController],
  providers: [
    ShopsService,
    {
      provide: IShopsRepository,
      useClass: ShopsRepository,
    },
  ],
})
export class ShopsModule {}