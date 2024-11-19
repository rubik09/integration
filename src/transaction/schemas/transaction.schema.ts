import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ITransaction } from '../../utils/interfaces';

@Schema({ timestamps: true })
export class Transaction extends Document implements ITransaction {
  @Prop({ required: true })
  actionType: string;

  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  platformId: string;

  @Prop({ required: true })
  geo: string;

  @Prop({ default: false })
  isSended: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
