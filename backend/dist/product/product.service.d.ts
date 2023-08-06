import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
export declare class ProductService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getProducts(): Promise<Product[] | IErrorReturn>;
    findProductByName(name: string): Promise<Product | IErrorReturn>;
    findProductByNameOrCategory(name: string, categoryName: string): Promise<Product[] | IErrorReturn>;
    createProduct(data: CreateProductDto): Promise<Product | IErrorReturn>;
    deleteProduct(id: number): Promise<Product | IErrorReturn>;
    updateProduct(id: number, data: UpdateProductDto): Promise<Product | IErrorReturn>;
}
