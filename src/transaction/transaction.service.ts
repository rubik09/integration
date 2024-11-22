import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionProvider } from './transaction.provider';
import proccesedActionType from '../utils/proccesedActionType';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);

  constructor(private readonly transactionProvider: TransactionProvider) {}

  async create(createTransactionReqDto: CreateTransactionReqDto) {
    this.logger.log(`Trying to create new transaction`);

    proccesedActionType(createTransactionReqDto);

    const createdTransaction = await this.transactionProvider.create(createTransactionReqDto);

    this.logger.log(`Transaction successfully created with _id ${createdTransaction._id}`);
  }
}
