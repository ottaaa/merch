import { SellersModule } from '../api/seller/sellers.module';

import { Module } from '@nestjs/common';

import { SellerRolesGuard } from './guards/seller-roles.guard';

@Module({
  imports: [SellersModule],
  providers: [SellerRolesGuard],
  exports: [SellersModule],
})
export class AuthorizationModule {}
