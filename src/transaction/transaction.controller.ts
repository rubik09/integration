import { Controller, Get, Query } from '@nestjs/common';

import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async createTransaction(
    @Query() { actionType, currency, amount, platformId, geo, platformType }: Required<CreateTransactionReqDto>,
  ) {
    await this.transactionService.proccesedActionType({ actionType, currency, amount, platformId, geo, platformType });
  }
}
