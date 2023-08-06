import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../product.service';
import { NestMiddleware } from '@nestjs/common';
export declare class ValidateProductMiddleware implements NestMiddleware {
    private productService;
    constructor(productService: ProductService);
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
