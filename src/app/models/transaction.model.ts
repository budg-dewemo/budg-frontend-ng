export interface Transaction {
  id?: number;
  budgetId: number;
  amount: number;
  description: string;
  categoryId: number;
  type: string;
  date: Date;
  filePath: string;
}
