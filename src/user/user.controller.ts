import { Post, Body, Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './help/dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
