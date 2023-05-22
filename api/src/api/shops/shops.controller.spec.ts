import { ShopModel } from '#/src/models/shop.model';

import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { AuthorizationModule } from '#/src/authorization/authorization.module';

import { ShopsService } from './shops.service';

import { ShopsController } from './shops.controller';

import { Test, TestingModule } from '@nestjs/testing';

const mockShop = new ShopModel({ id: 1, name: '結束バンド' });

const shopsServiceProvider = {
  provide: ShopsService,
  useFactory: () => ({
    create: jest.fn().mockResolvedValue(mockShop),
    findAll: jest.fn().mockResolvedValue([mockShop]),
    findOne: jest.fn().mockResolvedValue(mockShop),
    update: jest.fn().mockResolvedValue(mockShop),
    delete: jest.fn().mockResolvedValue(mockShop),
  }),
};

describe('ShopsController', () => {
  let controller: ShopsController;
  let service: ShopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AuthorizationModule],
      controllers: [ShopsController],
      providers: [shopsServiceProvider],
    }).compile();

    controller = module.get<ShopsController>(ShopsController);
    service = module.get<ShopsService>(ShopsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    const createShopDto: CreateShopDto = {
      name: '結束バンド',
    };

    it('サービスのcreateメソッドが呼ばれること', () => {
      controller.create(1, createShopDto);
      expect(service.create).toHaveBeenCalled();
    });

    it('Shopsモデルを返却する', async () => {
      const expected = mockShop;

      const actual = await controller.create(1, createShopDto);

      expect(actual).toEqual(expected);
    });
  });

  describe('findAll', () => {
    it('サービスのfindAllメソッドが呼ばれること', () => {
      controller.findAll(1);
      expect(service.findAll).toHaveBeenCalled();
    });

    it('Shopsモデルの配列を返却する', async () => {
      const expected = [mockShop];

      const actual = await controller.findAll(1);

      expect(actual).toEqual(expected);
    });
  });

  describe('findOne', () => {
    it('サービスのfindOneメソッドが呼ばれること', () => {
      controller.findOne(1);
      expect(service.findOne).toHaveBeenCalled();
    });

    it('Shopsモデルを返却する', async () => {
      const expected = mockShop;

      const actual = await controller.findOne(1);

      expect(actual).toEqual(expected);
    });
  });

  describe('update', () => {
    const updateShopDto: UpdateShopDto = {
      name: '結束バンド',
    };

    it('サービスのupdateメソッドが呼ばれること', () => {
      controller.update(1, updateShopDto);
      expect(service.update).toHaveBeenCalled();
    });

    it('Shopsモデルを返却する', async () => {
      const expected = mockShop;

      const actual = await controller.update(1, updateShopDto);

      expect(actual).toEqual(expected);
    });
  });

  describe('delete', () => {
    it('サービスのfindAllメソッドが呼ばれること', () => {
      controller.delete(1);
      expect(service.delete).toHaveBeenCalled();
    });
  });
});
