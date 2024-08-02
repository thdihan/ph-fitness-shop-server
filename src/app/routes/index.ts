import { Router } from 'express';
import { ProductRoutes } from '../modules/Product/product.route';
import { CategoryRoutes } from '../modules/Category/category.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
