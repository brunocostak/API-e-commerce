import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll() {
    return await this.categoriesService.findAll();
  }

  @Post('create')
  async create(
    @Body() createCategorie: CreateCategorieDto,
  ): Promise<Categories> {
    return await this.categoriesService.create(createCategorie);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<Categories> {
    const idNumber = Number(id);
    return await this.categoriesService.delete(idNumber);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCategorie: UpdateCategorieDto,
  ): Promise<Categories> {
    const idNumber = Number(id);
    return await this.categoriesService.update(idNumber, updateCategorie);
  }
}
//
