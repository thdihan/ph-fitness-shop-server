import { Types } from 'mongoose';

export type TOrder = {
  name: string;
  email: string;
  contact: string;
  address: string;
  payment: TPayment;
  items: TItem[];
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
