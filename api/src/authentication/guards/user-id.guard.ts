import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Request } from 'express';

// TODO Firebase認証を実装したら入れ替え
@Injectable()
export class UserIdGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const { headers } = context.switchToHttp().getRequest<Request>();
    const { 'x-user-id': userIdStr } = headers;
    const userId = Number(userIdStr);

    return Number.isSafeInteger(userId) && userId > 0;
  }
}
