import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ITransaction } from '../interfaces';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction implements ITransaction {
  @Prop({ required: true })
  actionType: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  platformType: string;

  @Prop({ required: true })
  geo: string;

  @Prop({ default: false })
  isSended: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
