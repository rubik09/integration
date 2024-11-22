import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionResDto } from './dto/transactionRes.dto';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';

@Injectable()
export class TransactionProvider {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async create(createTransactionReqDto: CreateTransactionReqDto): Promise<TransactionResDto> {
    return await this.transactionModel.create(createTransactionReqDto);
  }
}
