import { IShopsRepository } from '../interfaces/shops.interface';

import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

import { Injectable } from '@nestjs/common';

import { ShopModel } from '../../../models/shop.model';

@Injectable()
export class ShopsRepository implements IShopsRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * 物販を作成する。作成したユーザーをオーナーとして販売者登録する。
   * @param name
   * @returns
   */
  async createWithOwner({ name, userId }: Prisma.ShopCreateInput & { userId: number }): Promise<ShopModel> {
    return await this.prisma.shop.create({
      data: {
        name,
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
          every: {
            userId,
          },
        },
      },
    });
    return shops.map((shop) => new ShopModel(shop));
  }

  async findOne(id: number) {
    const shop = await this.prisma.shop.findUnique({
      where: { id },
    });
    return shop && new ShopModel(shop);
  }

  async update({ name, id }: Prisma.ShopUpdateInput & { id: number }): Promise<ShopModel> {
    const shop = await this.prisma.shop.update({
      where: { id },
      data: {
        name,
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
