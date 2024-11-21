import { Controller, Get, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('transaction')
  async createTransaction(
    @Query() { actionType, currency, amount, platformId, geo, platformType }: Required<CreateTransactionReqDto>,
  ) {
    const createTransactionReqDto: CreateTransactionReqDto = {
      actionType,
      currency,
      amount: Number(amount),
      platformId,
      platformType,
      geo,
    };

    await this.transactionService.create(createTransactionReqDto);
  }
}
