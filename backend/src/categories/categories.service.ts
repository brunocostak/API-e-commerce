import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Categories[] | IErrorReturn> {
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

  async findCategoryByName(name: string): Promise<Categories | IErrorReturn> {
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

  async create(data: CreateCategorieDto): Promise<Categories | IErrorReturn> {
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

  async delete(id: number): Promise<Categories | IErrorReturn> {
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

  async update(
    id: number,
    data: UpdateCategorieDto,
  ): Promise<Categories | IErrorReturn> {
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

  async findOne(id: number): Promise<Categories | IErrorReturn> {
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
}
