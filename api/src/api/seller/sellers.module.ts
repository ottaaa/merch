import { SellersRepository } from './infra/sellers.repository';

import { SellersService } from './seller.service';

import { PrismaModule } from 'nestjs-prisma';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [SellersService, SellersRepository],
  exports: [SellersService],
})
export class SellersModule {}
