import { SellersService } from './seller.service';

import { PrismaModule } from 'nestjs-prisma';

import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [SellersService],
  exports: [SellersService],
})
export class SellersModule {}
