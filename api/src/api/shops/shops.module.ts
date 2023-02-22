import { IShopsRepository } from './interfaces/shops.interface';

import { AuthorizationModule } from '#/src/authorization/authorization.module';

import { ShopsRepository } from './infra/shops.repository';

import { ShopsService } from './shops.service';

import { ShopsController } from './shops.controller';

import { PrismaModule } from 'nestjs-prisma';

import { Module } from '@nestjs/common';

@Module({
  imports: [AuthorizationModule, PrismaModule],
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
