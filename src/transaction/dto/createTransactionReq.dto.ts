import { PickType } from '@nestjs/mapped-types';

import { TransactionDto } from './trasnsaction.dto';

export class CreateTransactionReqDto extends PickType(TransactionDto, [
  'actionType',
  'currency',
  'amount',
  'platformId',
  'platformType',
  'geo',
  'password',
  'clickId',
]) {}
