import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './category.service';

const getCategories = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategory();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrived successfully.',
    data: result,
  });
});

const addCategory = catchAsync(async (req, res) => {
  // console.log(req.body);
  const { category, image } = req.body;
  const result = await CategoryService.addCategory({ name: category, image });

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category added successfully.',
    data: result,
  });
});

export const CategoryController = {
  getCategories,
  addCategory,
};
