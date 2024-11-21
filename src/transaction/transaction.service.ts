import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionProvider } from './transaction.provider';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);

  constructor(private readonly transactionRepository: TransactionProvider) {}

  async create(createTransactionReqDto: CreateTransactionReqDto) {
    this.logger.log(`Trying to create new transaction`);

    const createdTransaction = await this.transactionRepository.create(createTransactionReqDto);

    this.logger.log(`transaction successfully created with _id ${createdTransaction._id}`);
  }
}
