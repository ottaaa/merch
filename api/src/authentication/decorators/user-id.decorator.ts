import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';

/**
 * 認証情報からユーザーIDを抽出するデコレーター
 */
export const UserId = createParamDecorator((property: string, context: ExecutionContext) => {
  const { headers } = context.switchToHttp().getRequest<Request>();
  const { 'x-user-id': userIdStr } = headers;
  const userId = Number(userIdStr);

  return userId;
});
