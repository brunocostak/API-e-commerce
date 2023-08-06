import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Categories[]>;
    findCategoryByName(name: string): Promise<Categories>;
    create(data: CreateCategorieDto): Promise<Categories>;
    delete(id: number): Promise<Categories>;
    update(id: number, data: UpdateCategorieDto): Promise<Categories>;
    findOne(id: number): Promise<Categories>;
}
