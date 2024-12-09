import { Types } from 'mongoose';

import { Transaction } from '../schemas/transaction.schema';

export class TransactionResDto implements Transaction {
  _id: Types.ObjectId;
  actionType: string;
  currency: string;
  geo: string;
  clickId: string;
  platformType: string;
  platformId: string;
  password: string;
  amount: number;
  isSended: boolean;
  createdAt: Date;
  updatedAt: Date;
}
