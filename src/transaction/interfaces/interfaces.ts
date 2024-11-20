import { Types } from "mongoose";

export interface ITransaction {
  _id?: Types.ObjectId; 
  actionType: string;
  currency: string;
  amount: number;
  platformId: string;
  platformType: string;
  geo: string;
  isSended: boolean;
  createdAt?: Date;
  updatedAt?: Date; 
}
