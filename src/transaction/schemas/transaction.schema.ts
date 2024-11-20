import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true, versionKey: false, collection: 'transactions' })
export class Transaction {
  _id: Types.ObjectId;

  @Prop({ required: true })
  actionType: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  platformType: string;

  @Prop({ required: true })
  geo: string;

  @Prop({ default: false })
  isSended: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
export type TransactionDocument = Transaction & Document;
