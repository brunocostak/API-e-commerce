import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { Request } from 'express';
import { Product } from '@prisma/client';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(_req: Request): Promise<Product[] | void>;
    createProduct(createProduct: CreateProductDto): Promise<Product | void>;
    deleteProduct(req: Request): Promise<Product | void>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product | void>;
}
