import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

// TODO Firebase認証を実装したら入れ替え
@Injectable()
export class UserIdGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const data = await this.handleRequest(context);

    const request = context.switchToHttp().getRequest();
    request.userId = data;

    return data !== undefined;
  }

  async handleRequest(context: ExecutionContext): Promise<number> {
    const { headers } = context.switchToHttp().getRequest();
    const { 'x-user-id': userIdStr } = headers;
    const userId = Number(userIdStr);

    if (userId < 1 || isNaN(userId)) {
      throw new BadRequestException();
    }

    return userId;
  }
}
