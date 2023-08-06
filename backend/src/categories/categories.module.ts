import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ValidateCategoryMiddleware } from './middlewares/validate-categories.middleware';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService],
})
export class CategoriesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCategoryMiddleware).forRoutes({
      path: 'categories/create',
      method: RequestMethod.POST,
    });
  }
}
