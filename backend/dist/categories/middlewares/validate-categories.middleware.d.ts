import { NestMiddleware } from '@nestjs/common';
import { CategoriesService } from '../categories.service';
import { Request, Response, NextFunction } from 'express';
export declare class ValidateCategoryMiddleware implements NestMiddleware {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
