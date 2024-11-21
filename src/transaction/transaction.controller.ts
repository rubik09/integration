import { Controller, Get, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionReqDto } from './dto/createTransactionReq.dto';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async fetchAll(
    @Query('actionType') actionType: string,
    @Query('currency') currency: string,
    @Query('amount') amount: number,
    @Query('platformId') platformId: string,
    @Query('platformType') platformType: string,
    @Query('geo') geo: string,
  ) {
    const createTransactionReqDto: CreateTransactionReqDto = {
      actionType,
      currency,
      amount,
      platformId,
      platformType,
      geo,
    };

    await this.transactionService.create(createTransactionReqDto);
  }
}
