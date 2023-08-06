import { PrismaService } from '../prisma/prisma.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Categories[] | IErrorReturn>;
    findCategoryByName(name: string): Promise<Categories | IErrorReturn>;
    create(data: CreateCategorieDto): Promise<Categories | IErrorReturn>;
    delete(id: number): Promise<Categories | IErrorReturn>;
    update(id: number, data: UpdateCategorieDto): Promise<Categories | IErrorReturn>;
    findOne(id: number): Promise<Categories | IErrorReturn>;
}
