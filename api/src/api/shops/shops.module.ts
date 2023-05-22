import { AuthorizationModule } from '#/src/authorization/authorization.module';

import { ShopsService } from './shops.service';

import { ShopsController } from './shops.controller';

import { PrismaModule } from 'nestjs-prisma';

import { Module } from '@nestjs/common';

@Module({
  imports: [AuthorizationModule, PrismaModule],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
