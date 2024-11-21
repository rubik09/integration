import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';
import { TransactionResDto } from './dto/transactionRes.dto';

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
