import { UserService } from './user.service';
import { User } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
import { CreateUserDto } from './dto/CreateUser.dto';
import { LoginUserDto } from './dto/LoginUser.dto';
import { JwtService } from '@nestjs/jwt';
import IToken from './interface/IToken';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    findOne(id: string): Promise<User | IErrorReturn>;
    create(createUser: CreateUserDto): Promise<User | IErrorReturn>;
    login(loginData: LoginUserDto): Promise<IToken | IErrorReturn | string>;
}
