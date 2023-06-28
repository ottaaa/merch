import { CreateShopDto } from './dto/request/create-shop.dto';
import { UpdateShopDto } from './dto/request/update-shop.dto';

import { PrismaService } from 'nestjs-prisma';

import { Injectable } from '@nestjs/common';

import { ShopModel } from '../../models/shop.model';

@Injectable()
export class ShopsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ショップを作成する。
   * ショップを作成したユーザーは同時にオーナー権限を持つ販売者に紐付けられる。
   * @param body
   * @param userId
   * @returns
   */
  async create(body: CreateShopDto, userId: number): Promise<ShopModel> {
    const shop = await this.prisma.shop.create({
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
    return new ShopModel(shop);
  }

  /**
   * ユーザーが販売者として所属するショップを取得する
   * @param userId
   * @returns
   */
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

  /**
   * 指定のショップを取得する。
   * @param id
   * @returns
   */
  async findOne(id: number): Promise<ShopModel | null> {
    const shop = await this.prisma.shop.findUnique({
      where: { id },
    });
    return shop && new ShopModel(shop);
  }

  /**
   * ショップを更新する。
   * @param id
   * @param body
   * @returns
   */
  async update(id: number, body: UpdateShopDto): Promise<ShopModel> {
    const shop = await this.prisma.shop.update({
      where: { id },
      data: {
        ...body,
      },
    });
    return shop && new ShopModel(shop);
  }

  /**
   * ショップを削除する。
   * @param id
   * @returns
   */
  async delete(id: number): Promise<ShopModel> {
    const shop = await this.prisma.shop.delete({
      where: {
        id,
      },
    });
    return shop && new ShopModel(shop);
  }
}
