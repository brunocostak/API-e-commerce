import { ValidateProductMiddleware } from './validate-product.middleware';

describe('ValidateProductMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidateProductMiddleware()).toBeDefined();
  });
});
