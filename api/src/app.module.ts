import { MerchsModule } from './api/merchs/merchs.module';
import { SellersModule } from './api/sellers/sellers.module';
import { ShopsModule } from './api/shops/shops.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthorizationModule } from './authorization/authorization.module';

import { PrismaModule } from 'nestjs-prisma';

import { ClassSerializerInterceptor, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { HttpLoggerMiddleware } from './infra/middleware/http-logger.middleware';

@Module({
  imports: [
    PrismaModule.forRoot(),
    ShopsModule,
    SellersModule,
    AuthorizationModule,
    AuthenticationModule,
    MerchsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
