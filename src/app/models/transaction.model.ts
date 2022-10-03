export interface Transaction {
  id: number;
  userId: number;
  budgetId: number;
  amount: number;
  description: string;
  categoryId: number;
  date: Date;
}
