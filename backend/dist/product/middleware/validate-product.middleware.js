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
exports.ValidateProductMiddleware = void 0;
const product_service_1 = require("../product.service");
const common_1 = require("@nestjs/common");
let ValidateProductMiddleware = exports.ValidateProductMiddleware = class ValidateProductMiddleware {
    constructor(productService) {
        this.productService = productService;
    }
    async use(req, res, next) {
        const { name } = req.body;
        const product = await this.productService.findProductByName(name);
        if (product) {
            return res
                .status(400)
                .json({ message: `Product with name ${name} already exists` });
        }
        next();
    }
};
exports.ValidateProductMiddleware = ValidateProductMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ValidateProductMiddleware);
//# sourceMappingURL=validate-product.middleware.js.map