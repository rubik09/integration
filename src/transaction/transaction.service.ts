import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionProvider } from './transaction.provider';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);

  constructor(private readonly transactionRepository: TransactionProvider) {}

  async createTransaction(createTransactionReqDto: CreateTransactionReqDto) {
    this.logger.log(`Trying to create new transaction`);

    const createdTransaction = await this.transactionRepository.createTransaction(createTransactionReqDto);

    if (!createdTransaction) {
      this.logger.error(`Failed to create transaction ${createTransactionReqDto} `);
      throw new InternalServerErrorException(`Failed to create transaction ${createTransactionReqDto}`);
    }

    this.logger.debug(`transaction successfully created with _id ${createdTransaction._id}`);
  }
}
