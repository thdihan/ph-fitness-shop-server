import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = Product.create(payload);

  return result;
};

const getProductsFromDB = async (category: string) => {
  const categoryFilter = category ? { category } : {};
  const result = Product.find(categoryFilter);
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = Product.findById(productId);
  return result;
};

const updateProductIntoDB = async (productId: string, payload: TProduct) => {
  const result = Product.findByIdAndUpdate(productId, payload, { new: true });
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = Product.findByIdAndDelete(productId);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
