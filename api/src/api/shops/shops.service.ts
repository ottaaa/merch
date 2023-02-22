import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { PrismaService } from 'nestjs-prisma';

import { Injectable } from '@nestjs/common';

import { ShopModel } from '../../models/shop.model';

@Injectable()
export class ShopsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateShopDto, userId: number): Promise<ShopModel> {
    return await this.prisma.shop.create({
      data: {
        ...body,
        sellers: {
          create: {
            role: 'OWNER',
            user: {
              connect: {
                id: userId,
              },
            },
          },
        },
      },
    });
  }

  async findAll(userId: number): Promise<ShopModel[]> {
    const shops = await this.prisma.shop.findMany({
      where: {
        sellers: {
          some: {
            userId,
          },
        },
      },
    });
    return shops.map((shop) => new ShopModel(shop));
  }

  async findOne(id: number): Promise<ShopModel | null> {
    const shop = await this.prisma.shop.findUnique({
      where: { id },
    });
    return shop && new ShopModel(shop);
  }

  async update(id: number, body: UpdateShopDto): Promise<ShopModel> {
    const shop = await this.prisma.shop.update({
      where: { id },
      data: {
        ...body,
      },
    });
    return shop && new ShopModel(shop);
  }

  async delete(id: number): Promise<ShopModel> {
    const shop = await this.prisma.shop.delete({
      where: {
        id,
      },
    });
    return shop && new ShopModel(shop);
  }
}
