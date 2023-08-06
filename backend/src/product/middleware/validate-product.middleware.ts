import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../product.service';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ValidateProductMiddleware implements NestMiddleware {
  constructor(private productService: ProductService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    const product = await this.productService.findProductByName(name);
    if (product) {
      return res
        .status(400)
        .json({ message: `Product with name ${name} already exists` });
    }
    next();
  }
}
