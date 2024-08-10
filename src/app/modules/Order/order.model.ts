import { Schema, model } from 'mongoose';
import { TItem, TOrder, TPayment } from './order.interface';

const PaymentSchema = new Schema<TPayment>({
  method: {
    type: String,
    required: [true, 'Payment method is required'],
  },
  status: {
    type: String,
    enum: ['done', 'pending'],
    default: 'pending',
  },
});

const ItemsSchema = new Schema<TItem>({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  qty: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
});

const OrderSchema = new Schema<TOrder>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    contact: {
      type: String,
      required: [true, 'Contact is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    total: {
      type: Number,
      required: [true, 'Total is required'],
    },
    payment: {
      type: PaymentSchema,
      required: [true, 'Payment is required'],
    },
    products: [ItemsSchema],
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', OrderSchema);
