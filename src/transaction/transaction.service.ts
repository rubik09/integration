import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionProvider } from './transaction.provider';
import generatePassword from 'src/utils/generatePassword';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name);

  constructor(private readonly transactionProvider: TransactionProvider) {}

  async create(createTransactionReqDto: CreateTransactionReqDto): Promise<string | undefined> {
    this.logger.log(`Trying to create new transaction`);

    if (createTransactionReqDto.actionType === 'reg') {
      createTransactionReqDto.password = await generatePassword();
    }

    const createdTransaction = await this.transactionProvider.create(createTransactionReqDto);

    this.logger.log(`transaction successfully created with _id ${createdTransaction._id}`);

    return createTransactionReqDto.actionType === 'reg' ? createdTransaction.password : undefined;
  }
}
