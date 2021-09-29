import { Post, Body, Controller, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationPipe } from './help/validation.pipe';
import { CreateUserDto, LoginUserDto } from './help/dto';
import { UserRO } from './help/user.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @Post('users')
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @UsePipes(new ValidationPipe())
  @Post('users/login')
  async login(@Body('user') loginUserDto: LoginUserDto): Promise<UserRO> {
    return await this.userService.login(loginUserDto);
  }
}
