import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined,
    };
  }
}
