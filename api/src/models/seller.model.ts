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
  /**
   * 販売者に権限があるか判定する
   * @param requiredRole 必要なロール
   * @returns boolean
   */
  hasPermission(requiredRole: Role): boolean {
    if (requiredRole === Role.OWNER) {
      return this.role === Role.OWNER;
    }

    return true;
  }
}
