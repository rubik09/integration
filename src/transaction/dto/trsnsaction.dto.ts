import { IsString, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class TransactionDto {
  @IsString()
  actionType: string;

  @IsString()
  currency: string;

  @IsInt()
  amount: number;

  @IsString()
  platformType: string;

  @IsString()
  geo: string;

  @IsOptional()
  @IsBoolean()
  isSended?: boolean;
}
