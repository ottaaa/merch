import { IShopsRepository } from './interfaces/shops.interface';

import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { Injectable } from '@nestjs/common';

import { ShopModel } from '../../models/shop.model';

@Injectable()
export class ShopsService {
  constructor(private readonly shopsRepo: IShopsRepository) {}

  async create(body: CreateShopDto, userId: number): Promise<ShopModel> {
    return await this.shopsRepo.createWithOwner({ ...body, userId });
  }

  async findAll(userId: number): Promise<ShopModel[]> {
    return this.shopsRepo.findAll(userId);
  }

  async findOne(id: number): Promise<ShopModel | null> {
    return await this.shopsRepo.findOne(id);
  }

  async update(id: number, body: UpdateShopDto): Promise<ShopModel> {
    return await this.shopsRepo.update({ ...body, id });
  }

  async delete(id: number): Promise<ShopModel> {
    return await this.shopsRepo.delete(id);
  }
}
