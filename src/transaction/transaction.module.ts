import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './schemas/transaction.schema';

import { TransactionService } from './transaction.service';
import { TransactionProvider } from './transaction.provider';

@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  controllers: [],
  providers: [TransactionService, TransactionProvider],
})
export class TransactionsModule {}
