import { Injectable } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionRepository } from './transaction.repository';
import { TransactionDocument } from './schemas/transaction.schema';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async createTransaction(createTransactionReqDto: CreateTransactionReqDto): Promise<TransactionDocument> {
    return this.transactionRepository.createTransaction(createTransactionReqDto);
  }
}
