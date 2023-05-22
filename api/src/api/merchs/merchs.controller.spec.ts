import { Test, TestingModule } from '@nestjs/testing';
import { MerchsController } from './merchs.controller';

describe('MerchsController', () => {
  let controller: MerchsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchsController],
    }).compile();

    controller = module.get<MerchsController>(MerchsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
