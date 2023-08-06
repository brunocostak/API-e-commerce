import { CategoriesService } from './categories.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';
import IErrorReturn from './interface/IErrorReturn';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<Categories[] | IErrorReturn>;
    create(createCategorie: CreateCategorieDto): Promise<Categories | IErrorReturn>;
    delete(id: string): Promise<Categories | IErrorReturn>;
    update(id: string, updateCategorie: UpdateCategorieDto): Promise<Categories | IErrorReturn>;
}
