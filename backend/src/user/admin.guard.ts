import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    const payload = await this.jwtService.verifyAsync(token, {
      secret: process.env.SECRET_KEY,
    });

    const user = await this.userService.findByEmail(payload.email);

    // Verificar se o objeto "user" é do tipo "User" antes de acessar a propriedade "role"
    if (user && 'role' in user && user.role === 'ADMIN') {
      return true;
    }

    throw new UnauthorizedException('You are not admin');
  }
}
