import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { AuthorizationModule } from '#/src/authorization/authorization.module';

import { ShopsService } from './shops.service';

import { ShopsController } from './shops.controller';

import { Test, TestingModule } from '@nestjs/testing';

const shopsServiceProvider = {
  provide: ShopsService,
  useFactory: () => ({
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
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
  });

  describe('findAll', () => {
    it('サービスのfindAllメソッドが呼ばれること', () => {
      controller.findAll(1);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('サービスのfindOneメソッドが呼ばれること', () => {
      controller.findOne(1);
      expect(service.findOne).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    const updateShopDto: UpdateShopDto = {
      name: '小田和正',
    };

    it('サービスのupdateメソッドが呼ばれること', () => {
      controller.update(1, updateShopDto);
      expect(service.update).toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('サービスのfindAllメソッドが呼ばれること', () => {
      controller.delete(1);
      expect(service.delete).toHaveBeenCalled();
    });
  });
});
