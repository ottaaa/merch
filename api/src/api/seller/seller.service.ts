import { SellersRepository } from './infra/sellers.repository';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SellersService {
  constructor(private readonly sellersRepo: SellersRepository) {}

  async findByUserAndShop({ userId, shopId }: { userId: number; shopId: number }) {
    return await this.sellersRepo.findByUserAndShop({ userId, shopId });
  }
}
