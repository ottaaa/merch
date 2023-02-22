import { SellersRepository } from './infra/sellers.repository';

import { SellersService } from './seller.service';

import { Module } from '@nestjs/common';

@Module({
  providers: [SellersService, SellersRepository],
  exports: [SellersService],
})
export class SellersModule {}
