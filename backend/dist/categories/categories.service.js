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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriesService = exports.CategoriesService = class CategoriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const result = await this.prisma.categories.findMany();
        if (result.length === 0) {
            return {
                statusCode: 404,
                message: 'Categories not found',
                error: 'Not Found',
            };
        }
        return result;
    }
    async findCategoryByName(name) {
        const result = await this.prisma.categories.findUnique({
            where: { name },
        });
        if (!result) {
            return {
                statusCode: 404,
                message: 'Category not found',
                error: 'Not Found',
            };
        }
        return result;
    }
    async create(data) {
        const result = await this.prisma.categories.create({
            data,
        });
        if (!result) {
            return {
                statusCode: 404,
                message: 'Category not created',
                error: 'Not Found',
            };
        }
        return result;
    }
    async delete(id) {
        const result = await this.prisma.categories.delete({
            where: { id },
        });
        if (!result) {
            return {
                statusCode: 404,
                message: 'Category not deleted',
                error: 'Not Found',
            };
        }
        return result;
    }
    async update(id, data) {
        const result = await this.prisma.categories.update({
            where: { id },
            data,
        });
        if (!result) {
            return {
                statusCode: 404,
                message: 'Category not updated',
                error: 'Not Found',
            };
        }
        return result;
    }
    async findOne(id) {
        const result = await this.prisma.categories.findUnique({
            where: { id },
        });
        if (!result) {
            return {
                statusCode: 404,
                message: 'Category not found',
                error: 'Not Found',
            };
        }
        return result;
    }
};
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map