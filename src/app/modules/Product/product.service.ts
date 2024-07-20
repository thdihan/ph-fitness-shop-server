import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = Product.create(payload);

  return result;
};

const getProductsFromDB = async () => {
  const result = Product.find();
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getProductsFromDB,
};
