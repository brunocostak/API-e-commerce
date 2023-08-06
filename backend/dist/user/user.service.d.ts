import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
import { CreateUserDto } from './dto/CreateUser.dto';
import { LoginUserDto } from './dto/LoginUser.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findUser(id: number): Promise<User | IErrorReturn>;
    createUser(user: CreateUserDto): Promise<User | IErrorReturn>;
    loginUser(user: LoginUserDto): Promise<User | IErrorReturn>;
}
