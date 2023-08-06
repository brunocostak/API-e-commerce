import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Categories[]> {
    return await this.prisma.categories.findMany();
  }

  async findCategoryByName(name: string): Promise<Categories> {
    return await this.prisma.categories.findUnique({
      where: { name },
    });
  }

  async create(data: CreateCategorieDto): Promise<Categories> {
    return await this.prisma.categories.create({
      data,
    });
  }

  async delete(id: number): Promise<Categories> {
    return await this.prisma.categories.delete({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCategorieDto): Promise<Categories> {
    return await this.prisma.categories.update({
      where: { id },
      data,
    });
  }

  async findOne(id: number): Promise<Categories> {
    return await this.prisma.categories.findUnique({
      where: { id },
    });
  }
}
