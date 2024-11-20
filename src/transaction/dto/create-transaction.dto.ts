import { PickType } from '@nestjs/mapped-types';

import { TransactionDto } from './trsnsaction.dto';

export class CreateTransactionDto extends PickType(TransactionDto, [
  'actionType',
  'currency',
  'amount',
  'platformType',
  'geo',
  'isSended',
]) {}
