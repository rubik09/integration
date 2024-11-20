import { IsString, IsBoolean, IsOptional, IsInt, IsMongoId } from 'class-validator';

export class TransactionDto {
  @IsMongoId()
  _id: string;

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

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}
