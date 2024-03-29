import { SellerModel } from './seller.model';

import { Role } from '@prisma/client';

describe('SellerModel', () => {
  describe('hasPermission', () => {
    const ownerSeller = new SellerModel({
      role: 'OWNER',
      userId: 1,
      shopId: 1,
    });

    const userSeller = new SellerModel({
      role: 'USER',
      userId: 1,
      shopId: 1,
    });

    it('必要なロールがオーナーの場合、適切な権限の判定が行われる', () => {
      const requiredRole: Role = 'OWNER';

      expect(ownerSeller.hasPermission(requiredRole)).toBe(true);
    });

    it('必要なロールが一般ユーザーの場合、適切な権限の判定が行われる', () => {
      const requiredRole: Role = 'USER';

      expect(userSeller.hasPermission(requiredRole)).toBe(true);
    });
  });
});
