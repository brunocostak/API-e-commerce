import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Param,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { Request } from 'express';
import { Product } from '@prisma/client';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Req() _req: Request): Promise<Product[] | void> {
    console.log(_req.body);
    const products = await this.productService.getProducts();
    return products;
  }

  @Post('create')
  async createProduct(
    @Body() createProduct: CreateProductDto,
  ): Promise<Product | void> {
    const createdProduct = await this.productService.createProduct(
      createProduct,
    );
    return createdProduct;
  }

  @Delete('delete/:id')
  async deleteProduct(@Req() req: Request): Promise<Product | void> {
    const product = await this.productService.deleteProduct(
      Number(req.params.id),
    );
    return product;
  }

  @Put('update/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product | void> {
    const idNumber = Number(id);
    const updatedProduct = await this.productService.updateProduct(
      idNumber,
      updateProductDto,
    );
    return updatedProduct;
  }
}
