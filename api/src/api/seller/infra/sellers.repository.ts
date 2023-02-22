import { SellerModel } from '#/src/models/seller.model';

import { PrismaService } from 'nestjs-prisma';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SellersRepository /*implements ISellersRepository*/ {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserAndShop({ userId, shopId }: { userId: number; shopId: number }): Promise<SellerModel | null> {
    const seller = await this.prisma.seller.findUnique({
      where: {
        userId_shopId: {
          userId,
          shopId,
        },
      },
    });
    return seller && new SellerModel(seller);
  }
}
