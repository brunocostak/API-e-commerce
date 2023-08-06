import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
import { CreateUserDto } from './dto/CreateUser.dto';
import { LoginUserDto } from './dto/LoginUser.dto';
import { JwtService } from '@nestjs/jwt';
import IToken from './interface/IToken';
// import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @UseGuards(AdminGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | IErrorReturn> {
    const idNumber = Number(id);
    return await this.userService.findUser(idNumber);
  }

  @Post('create')
  async create(
    @Body() createUser: CreateUserDto,
  ): Promise<User | IErrorReturn> {
    return await this.userService.createUser(createUser);
  }

  @Post('login')
  async login(
    @Body() loginData: LoginUserDto,
  ): Promise<IToken | IErrorReturn | string> {
    const result = await this.userService.loginUser(loginData);
    if ('id' in result && 'email' in result) {
      const payload = { sub: result.id, email: result.email };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return result;
  }
}
