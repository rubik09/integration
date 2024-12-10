import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { ITransaction } from '../interfaces/interfaces';

@Schema({ timestamps: true, versionKey: false, collection: 'transactions' })
export class Transaction implements ITransaction {
  _id: Types.ObjectId;

  @Prop({ required: true })
  actionType: string;

  @Prop({ required: false, default: null, set: (value: string) => (value === '' ? null : value) })
  currency: string;

  @Prop({ required: false, default: null, set: (value: string) => (value === '' ? null : value) })
  amount: number;

  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  platformType: string;

  @Prop({ required: false })
  password: string;

  @Prop({ required: true })
  geo: string;

  @Prop({ required: false, default: null, set: (value: string) => (value === '' ? null : value) })
  clickId: string;

  @Prop({ default: false })
  isSended: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
export type TransactionDocument = Transaction & Document;
