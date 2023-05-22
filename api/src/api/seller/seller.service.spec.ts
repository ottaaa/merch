import { SellersService } from './seller.service';

import { PrismaService } from 'nestjs-prisma';

import { Test, TestingModule } from '@nestjs/testing';

describe('SellerService', () => {
  let service: SellersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellersService, PrismaService],
    }).compile();

    service = module.get<SellersService>(SellersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
