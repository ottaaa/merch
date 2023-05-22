import { ExecutionContext } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';

import { createMock } from '@golevelup/ts-jest';

import { UserIdGuard } from './user-id.guard';

describe('UserIdGuard', () => {
  let guard: UserIdGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserIdGuard],
    }).compile();

    guard = module.get<UserIdGuard>(UserIdGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('canActivate', () => {
    it('ユーザーIDが有効値（自然数）の場合、trueを返す', () => {
      const mockExecutionContext = createMock<ExecutionContext>();
      mockExecutionContext.switchToHttp().getRequest.mockReturnValue({
        headers: {
          'x-user-id': '1',
        },
      });

      const actual = guard.canActivate(mockExecutionContext);

      expect(actual).toBe(true);
    });

    it('ユーザーIDが無効値（自然数以外）の場合、BadRequestExceptionを返す', () => {
      const mockExecutionContext = createMock<ExecutionContext>();
      mockExecutionContext.switchToHttp().getRequest.mockReturnValue({
        headers: {
          'x-user-id': 'NotNumber',
        },
      });

      const actual = guard.canActivate(mockExecutionContext);

      expect(actual).toBe(false);
    });
  });
});
