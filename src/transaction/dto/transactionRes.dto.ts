import { Types } from 'mongoose';

import { Transaction } from '../schemas/transaction.schema';

export class TransactionResDto implements Transaction {
  _id: Types.ObjectId;
  actionType: string;
  currency: string;
  geo: string;
  platformType: string;
  platformId: string;
  amount: number;
  isSended: boolean;
  createdAt: Date;
  updatedAt: Date;
}
