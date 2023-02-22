import { Role } from '@prisma/client';

import { SetMetadata } from '@nestjs/common';

export const SellerRole = (role: Role) => SetMetadata('role', role);
