import { Module } from '@nestjs/common';

import { UserIdGuard } from './guards/user-id.guard';

@Module({ providers: [UserIdGuard] })
export class AuthenticationModule {}
