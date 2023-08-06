import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ValidateProductMiddleware } from './middleware/validate-product.middleware';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, PrismaService],
})
export class ProductModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateProductMiddleware).forRoutes({
      path: 'product/create',
      method: RequestMethod.POST,
    });
  }
}
