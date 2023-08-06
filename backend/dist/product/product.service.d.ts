import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
export declare class ProductService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getProducts(): Promise<Product[] | void>;
    findProductByName(name: string): Promise<Product | void>;
    createProduct(data: CreateProductDto): Promise<Product | void>;
    deleteProduct(id: number): Promise<Product | void>;
    updateProduct(id: number, data: UpdateProductDto): Promise<Product | void>;
}
