import { SellerModel } from '#/src/models/seller.model';

import { SellersService } from '#/src/api/seller/seller.service';

import { Role } from '@prisma/client';

import { ExecutionContext, InternalServerErrorException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TestingModule, Test } from '@nestjs/testing';

import { createMock } from '@golevelup/ts-jest';

import { SellerRolesGuard } from './seller-roles.guard';

const mockSellersService = {
  provide: SellersService,
  useFactory: () => ({
    findByUserAndShop: jest.fn(),
  }),
};

// const mockReflector = {
//   provide: SellersService,
//   useFactory: () => ({
//     get: jest.fn(),
//   }),
// };

describe('SellerRolesGuard', () => {
  let guard: SellerRolesGuard;
  let service: SellersService;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerRolesGuard, mockSellersService],
    }).compile();

    guard = module.get<SellerRolesGuard>(SellerRolesGuard);
    service = module.get<SellersService>(SellersService);
    reflector = module.get<Reflector>(Reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('canActivate', () => {
    const mockOwnerSeller = new SellerModel({ id: 1, role: Role.OWNER, userId: 1, shopId: 2 });

    const mockExecutionContext = createMock<ExecutionContext>();
    mockExecutionContext.switchToHttp().getRequest.mockReturnValue({
      headers: {
        'x-user-id': '1',
      },
      params: {
        shopId: '2',
      },
    });

    it('適切なロールが付与されている場合、trueを返す', async () => {
      reflector.get = jest.fn().mockReturnValue(Role.OWNER);
      service.findByUserAndShop = jest.fn().mockResolvedValue(mockOwnerSeller);
      const actual = await guard.canActivate(mockExecutionContext);

      expect(actual).toBe(true);
    });

    it('userId, shopIdで一意な販売者が存在しない場合、falseを返す', async () => {
      reflector.get = jest.fn().mockReturnValue(Role.OWNER);
      service.findByUserAndShop = jest.fn().mockResolvedValue(null);
      const actual = await guard.canActivate(mockExecutionContext);

      expect(actual).toBe(false);
    });

    it('roleのメタデータがundefinedの場合、500を返す', async () => {
      reflector.get = jest.fn().mockReturnValue(undefined);
      // service.findByUserAndShop = jest.fn().mockResolvedValue(null);
      const actual = () => guard.canActivate(mockExecutionContext);

      expect(actual).rejects.toThrow(new InternalServerErrorException());
    });
  });
});
