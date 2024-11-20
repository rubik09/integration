export interface ITransaction {
  readonly actionType: string;
  readonly currency: string;
  readonly amount: number;
  readonly platformId: string;
  readonly platformType: string;
  readonly geo: string;
  readonly isSended: boolean;
}
