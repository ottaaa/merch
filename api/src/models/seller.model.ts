import { Role, Seller } from '@prisma/client';

import { PrismaObjectToEntity, Fields } from './types/model.type';

export class SellerModel implements PrismaObjectToEntity<Seller> {
  id?: number;
  role!: Role;
  userId!: number;
  shopId!: number;

  constructor(props: Fields<SellerModel>) {
    Object.assign(this, props);
  }

  // NOTE 認可周りが複雑になってきたら認可モデルに切り出す
  hasPermission(requiredRole: Role): boolean {
    if (requiredRole === Role.OWNER) {
      return this.role === Role.OWNER;
    }

    if (requiredRole === Role.ADMIN) {
      return this.role === Role.OWNER || this.role === Role.ADMIN;
    }

    return true;
  }
}
