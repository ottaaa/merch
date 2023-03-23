import { Role } from '@prisma/client';

import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Request } from 'express';

import { SellersService } from '../../api/seller/seller.service';

/**
 * 販売者ロールのガード
 */
@Injectable()
export class SellerRolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private readonly sellersService: SellersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRole = this.reflector.getAllAndOverride<Role>('role', [context.getHandler(), context.getClass()]);
    // @SellerRole が設定されてないのにガードが呼び出されちゃってるパターン
    // TODO 500以外で検討
    if (!requiredRole) {
      throw new InternalServerErrorException();
    }

    const request = context.switchToHttp().getRequest<Request>();
    const userId = Number(request.headers['x-user-id']);
    const shopId = Number(request.params.shopId);

    if (isNaN(userId) || isNaN(shopId)) throw new BadRequestException();

    const seller = await this.sellersService.findByUserAndShop({ userId, shopId });

    if (!seller) return false;

    return seller.hasPermission(requiredRole);
  }
}
