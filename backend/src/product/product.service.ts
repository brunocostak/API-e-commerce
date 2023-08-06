import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  getProducts(): Promise<Product[] | void> {
    const products = this.prismaService.product.findMany();
    return products;
  }

  findProductByName(name: string): Promise<Product | void> {
    const product = this.prismaService.product.findUnique({
      where: { name },
    });
    return product;
  }

  createProduct(data: CreateProductDto): Promise<Product | void> {
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

  deleteProduct(id: number): Promise<Product | void> {
    const product = this.prismaService.product.delete({
      where: { id },
    });
    return product;
  }

  updateProduct(id: number, data: UpdateProductDto): Promise<Product | void> {
    const product = this.prismaService.product.update({
      where: { id },
      data,
    });
    return product;
  }
}
