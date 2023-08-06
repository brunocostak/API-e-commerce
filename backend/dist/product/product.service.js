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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = exports.ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getProducts() {
        const products = this.prismaService.product.findMany();
        return products;
    }
    findProductByName(name) {
        const product = this.prismaService.product.findUnique({
            where: { name },
        });
        return product;
    }
    createProduct(data) {
        const product = this.prismaService.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                image: data.image,
                categorieName: data.categorieName,
            },
        });
        return product;
    }
    deleteProduct(id) {
        const product = this.prismaService.product.delete({
            where: { id },
        });
        return product;
    }
    updateProduct(id, data) {
        const product = this.prismaService.product.update({
            where: { id },
            data,
        });
        return product;
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map