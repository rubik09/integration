export interface ITransaction {
  actionType: string;
  currency: string;
  amount: number;
  platformId: string;
  platformType: string;
  geo: string;
}
