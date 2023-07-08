import { AuthorizationModule } from '#/src/authorization/authorization.module';

import { MerchsController } from './merchs.controller';

import { Test, TestingModule } from '@nestjs/testing';

describe('MerchsController', () => {
  let controller: MerchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthorizationModule],
      controllers: [MerchsController],
    }).compile();

    controller = module.get<MerchsController>(MerchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
