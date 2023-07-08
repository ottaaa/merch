import { AuthorizationModule } from '#/src/authorization/authorization.module';

import { MerchsController } from './merchs.controller';

import { Module } from '@nestjs/common';

@Module({
  imports: [AuthorizationModule],
  controllers: [MerchsController],
})
export class MerchsModule {}
