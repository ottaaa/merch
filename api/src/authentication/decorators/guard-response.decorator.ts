import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';

export const UserId = createParamDecorator((property: string, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const userId: number = request.userId;

  if (!userId) new InternalServerErrorException();

  return userId;
});
