import { MerchsController } from './merchs.controller';

import { Module } from '@nestjs/common';

@Module({
  controllers: [MerchsController],
})
export class MerchsModule {}
