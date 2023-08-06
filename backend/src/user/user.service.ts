import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
import { CreateUserDto } from './dto/CreateUser.dto';
import { LoginUserDto } from './dto/LoginUser.dto';
import { cryptoPassword, comparePassword } from '../utils/cryptoPassword';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(id: number): Promise<User | IErrorReturn> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      return {
        statusCode: 404,
        message: 'User not found',
        error: 'Not Found',
      };
    }
    return user;
  }

  async createUser(user: CreateUserDto): Promise<User | IErrorReturn> {
    user.password = await cryptoPassword(user.password);
    const createdUser = await this.prisma.user.create({
      data: {
        ...user,
        role: user.role === 'ADMIN' ? 'ADMIN' : 'USER',
      },
    });
    if (!createdUser) {
      return {
        statusCode: 400,
        message: 'User not created',
        error: 'Bad Request',
      };
    }
    return createdUser;
  }

  async loginUser(user: LoginUserDto): Promise<User | IErrorReturn> {
    console.log(user.email);
    const loginUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
    console.log(loginUser);
    const passwordMatch = await comparePassword(
      user.password,
      loginUser.password,
    );
    console.log(passwordMatch);
    if (!loginUser || !passwordMatch) {
      return {
        statusCode: 404,
        message: 'Email or Password incorrect',
        error: 'Not Found',
      };
    }
    return loginUser;
  }
}
