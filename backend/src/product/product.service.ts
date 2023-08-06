import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async getProducts(): Promise<Product[] | IErrorReturn> {
    const products = await this.prismaService.product.findMany();
    if (products.length === 0) {
      return {
        statusCode: 404,
        message: 'No products found',
        error: 'Not Found',
      };
    }
    return products;
  }

  async findProductByName(name: string): Promise<Product | IErrorReturn> {
    const product = await this.prismaService.product.findUnique({
      where: { name },
    });
    if (!product) {
      return {
        statusCode: 404,
        message: 'No product found',
        error: 'Not Found',
      };
    }
    return product;
  }

  async findProductByNameOrCategory(
    name: string,
    categoryName: string,
  ): Promise<Product[] | IErrorReturn> {
    console.log(name, categoryName);

    if (!name) {
      name = '';
    }

    if (!categoryName) {
      categoryName = '';
    }

    const products = await this.prismaService.product.findMany({
      where: {
        AND: [
          {
            name: {
              contains: name,
            },
          },
          {
            categorieName: {
              contains: categoryName,
            },
          },
        ],
      },
    });

    if (products.length === 0) {
      return {
        statusCode: 404,
        message: 'No products found',
        error: 'Not Found',
      };
    }

    return products;
  }

  async createProduct(data: CreateProductDto): Promise<Product | IErrorReturn> {
    const product = await this.prismaService.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        categorieName: data.categorieName,
      },
    });
    if (!product) {
      return {
        statusCode: 404,
        message: 'No product found',
        error: 'Not Found',
      };
    }
    return product;
  }

  async deleteProduct(id: number): Promise<Product | IErrorReturn> {
    const product = await this.prismaService.product.delete({
      where: { id },
    });
    if (!product) {
      return {
        statusCode: 404,
        message: 'No product found',
        error: 'Not Found',
      };
    }
    return product;
  }

  async updateProduct(
    id: number,
    data: UpdateProductDto,
  ): Promise<Product | IErrorReturn> {
    const product = await this.prismaService.product.update({
      where: { id },
      data,
    });
    if (!product) {
      return {
        statusCode: 404,
        message: 'No product found',
        error: 'Not Found',
      };
    }
    return product;
  }
}
