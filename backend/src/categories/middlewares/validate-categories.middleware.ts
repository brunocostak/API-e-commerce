import { Injectable, NestMiddleware } from '@nestjs/common';
import { CategoriesService } from '../categories.service';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateCategoryMiddleware implements NestMiddleware {
  constructor(private categoriesService: CategoriesService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    const category = await this.categoriesService.findCategoryByName(name);
    if (category) {
      return res
        .status(400)
        .json({ message: `Category with name ${name} already exists` });
    }
    next();
  }
}
