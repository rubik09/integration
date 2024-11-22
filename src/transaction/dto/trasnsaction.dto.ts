import { IsInt, IsOptional, IsString } from 'class-validator';

import { ITransaction } from '../interfaces/interfaces';

export class TransactionDto implements ITransaction {
  @IsString()
  actionType: string;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsInt()
  amount?: number;

  @IsString()
  platformId: string;

  @IsString()
  platformType: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsString()
  geo: string;
}
