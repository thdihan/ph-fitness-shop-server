import { Product } from '../Product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  // reduce product stock
  payload.products.forEach(async (product) => {
    const productDoc = await Product.findById(product._id);
    if (productDoc) {
      productDoc.stock -= product.qty;
      await productDoc.save();
    }
  });

  const result = await Order.create(payload);
  return result;
};

export const OrderService = {
  createOrderIntoDB,
};
