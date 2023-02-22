import { SellersService } from '../api/seller/seller.service';

import { Role } from '@prisma/client';

import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Request } from 'express';

@Injectable()
export class SellerRolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private readonly sellersService: SellersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRole = this.reflector.getAllAndOverride<Role>('role', [context.getHandler(), context.getClass()]);
    if (!requiredRole) {
      return true;
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
