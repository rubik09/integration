import { Injectable, Logger } from '@nestjs/common';

import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionProvider } from './transaction.provider';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);

  constructor(private readonly transactionProvider: TransactionProvider) {}

  async create(createTransactionReqDto: CreateTransactionReqDto) {
    this.logger.log(`Trying to create new transaction`);

    const createdTransaction = await this.transactionProvider.create(createTransactionReqDto);

    this.logger.log(`Transaction successfully created with _id ${JSON.stringify(createdTransaction._id)}`);
  }

  async proccesedActionType(createTransactionReqDto: CreateTransactionReqDto) {
    this.logger.log(`Starting to proccese createTransactionReqDto ${JSON.stringify(createTransactionReqDto)}`);
    if (createTransactionReqDto.actionType === 'reg') {
      this.logger.debug(`actionType registration`);
      const password = this.generatePassword();
      createTransactionReqDto.password = password;
    }
    await this.create(createTransactionReqDto);
  }

  private generatePassword(): string {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 10).toString()).join('');
  }
}
