import { CategoriesMiddleware } from './middlewares/validate-categories.middleware';

describe('CategoriesMiddleware', () => {
  it('should be defined', () => {
    expect(new CategoriesMiddleware()).toBeDefined();
  });
});
