type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expenseAt: Date;
  amount: number;
  category: string;
  note: string;
};

export type { Expense };
