import { Module } from '@nestjs/common';
import { MerchsController } from './merchs.controller';

@Module({
  controllers: [MerchsController]
})
export class MerchsModule {}
