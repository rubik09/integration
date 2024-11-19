import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  actionType: string;

  @IsString()
  currency: string;

  @IsNumber()
  amount: number;

  @IsString()
  platformId: string;

  @IsString()
  geo: string;

  @IsOptional()
  @IsBoolean()
  isSended?: boolean;
}
