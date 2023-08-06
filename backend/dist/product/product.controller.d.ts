import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { Request } from 'express';
import { Product } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(_req: Request): Promise<Product[] | IErrorReturn>;
    createProduct(createProduct: CreateProductDto): Promise<Product | IErrorReturn>;
    deleteProduct(req: Request): Promise<Product | IErrorReturn>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product | IErrorReturn>;
    findProductByNameOrCategory(name: string, category: string): Promise<Product[] | IErrorReturn>;
}
