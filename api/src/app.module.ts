import { MerchsModule } from './api/merchs/merchs.module';
import { ShopsModule } from './api/shops/shops.module';

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
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
