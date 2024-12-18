import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
