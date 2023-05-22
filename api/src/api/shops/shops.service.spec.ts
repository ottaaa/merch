import { ShopsService } from './shops.service';

import { PrismaService } from 'nestjs-prisma';

import { Test, TestingModule } from '@nestjs/testing';

describe('ShopsService', () => {
  let service: ShopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopsService, PrismaService],
    }).compile();

    service = module.get<ShopsService>(ShopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
