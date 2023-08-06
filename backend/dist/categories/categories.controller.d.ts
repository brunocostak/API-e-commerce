import { CategoriesService } from './categories.service';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categories } from '@prisma/client';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
    }[]>;
    create(createCategorie: CreateCategorieDto): Promise<Categories>;
    delete(id: string): Promise<Categories>;
    update(id: string, updateCategorie: UpdateCategorieDto): Promise<Categories>;
}
