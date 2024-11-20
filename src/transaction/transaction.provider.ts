import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TransactionProvider {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async createTransaction(createTransactionReqDto: CreateTransactionReqDto): Promise<TransactionDocument> {
    const createdTransaction = new this.transactionModel(createTransactionReqDto);
    return await createdTransaction.save();
  }
}
