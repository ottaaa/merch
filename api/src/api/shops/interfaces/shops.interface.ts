import { ShopModel } from '#/src/models/shop.model';

import { Prisma } from '@prisma/client';

export abstract class IShopsRepository {
  abstract createWithOwner({ name, userId }: Prisma.ShopCreateInput & { userId: number }): Promise<ShopModel>;
  abstract findOne(id: number): Promise<ShopModel | null>;
  abstract findAll(userId: number): Promise<ShopModel[]>;
  abstract update({ name, id }: Prisma.ShopUpdateInput & { id: number }): Promise<ShopModel>;
  abstract delete(id: number): Promise<ShopModel>;
}
