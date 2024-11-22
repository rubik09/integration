import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './schemas/transaction.schema';

import { TransactionService } from './transaction.service';
import { TransactionProvider } from './transaction.provider';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionProvider],
})
export class TransactionsModule {}
