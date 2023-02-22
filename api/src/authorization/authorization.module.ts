import { SellersModule } from '../api/seller/sellers.module';

import { Global, Module } from '@nestjs/common';

import { SellerRolesGuard } from './seller-roles.guard';

@Global()
@Module({
  imports: [SellersModule],
  providers: [SellerRolesGuard],
  exports: [SellersModule],
})
export class AuthorizationModule {}
