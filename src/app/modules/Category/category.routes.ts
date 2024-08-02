import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/', CategoryController.getCategories);
router.post('/', CategoryController.addCategory);

export const CategoryRoutes = router;
