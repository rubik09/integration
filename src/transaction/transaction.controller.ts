import { Controller, Get, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async createTransaction(
    @Query() { actionType, currency, amount, platformId, geo, platformType }: Required<CreateTransactionReqDto>,
  ) {
    await this.transactionService.create({ actionType, currency, amount, platformId, geo, platformType });
  }
}
