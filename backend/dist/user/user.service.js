"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const cryptoPassword_1 = require("../utils/cryptoPassword");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUser(id) {
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
    async createUser(user) {
        user.password = await (0, cryptoPassword_1.cryptoPassword)(user.password);
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
    async loginUser(user) {
        console.log(user.email);
        const loginUser = await this.prisma.user.findUnique({
            where: { email: user.email },
        });
        console.log(loginUser);
        const passwordMatch = await (0, cryptoPassword_1.comparePassword)(user.password, loginUser.password);
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
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map