import { TCategory } from './category.interface';
import { Category } from './category.model';

const getAllCategory = async () => {
  const result = await Category.find();
  console.log(result);
  return result;
};

const addCategory = async (payload: TCategory) => {
  const result = await Category.create(payload);
  console.log(result);
  return result;
};

export const CategoryService = {
  getAllCategory,
  addCategory,
};
