import { Types } from 'mongoose';

export type TOrder = {
  name: string;
  email: string;
  contact: string;
  address: string;
  total: number;
  payment: TPayment;
  products: TItem[];
};

export type TPayment = {
  method: string;
  status: 'done' | 'pending';
};

export type TItem = {
  _id: Types.ObjectId;
  qty: number;
  price: number;
};
