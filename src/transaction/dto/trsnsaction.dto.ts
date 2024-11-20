import { IsString, IsBoolean, IsOptional, IsInt } from 'class-validator';

export class TransactionDto {
  @IsString()
  actionType: string;

  @IsString()
  currency: string;

  @IsInt()
  amount: number;

  @IsString()
  platformId: string;

  @IsString()
  platformType: string;

  @IsString()
  geo: string;

  @IsOptional()
  @IsBoolean()
  isSended?: boolean;
}
