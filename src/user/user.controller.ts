import { Post, Body, Controller, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationPipe } from './help/validation.pipe';
import { CreateUserDto } from './help/dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @Post('users')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }
}
