import { Role } from '@prisma/client';

import { SetMetadata } from '@nestjs/common';

/**
 *  販売者ロールのメタデータを付与
 */
export const SellerRole = (role: Role) => SetMetadata('role', role);
