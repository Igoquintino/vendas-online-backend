import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
