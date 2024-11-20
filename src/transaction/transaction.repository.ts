import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,
  ) {}

  async createTransaction(createTransactionReqDto: CreateTransactionReqDto): Promise<TransactionDocument> {
    const createdCat = new this.transactionModel(createTransactionReqDto);
    return createdCat.save();
  }
}
