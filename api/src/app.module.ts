import { MerchsModule } from './api/merchs/merchs.module';
import { SellersModule } from './api/seller/sellers.module';
import { ShopsModule } from './api/shops/shops.module';
import { AuthorizationModule } from './authorization/authorization.module';

import { PrismaModule } from 'nestjs-prisma';

import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ShopsModule,
    MerchsModule,
    SellersModule,
    AuthorizationModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
