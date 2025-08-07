import { Expense } from "../models/expense.dt";

const ExpenseService = {
  createExpense: async (
    amount: number,
    at: Date,
    category: string,
    note: string
  ) => {
    const id = generateId("EXPENSE_");

    const data = {};

    return data as Expense;
  },
  editExpense: async () => {},
  deleteExpense: async () => {},
  getLastExpenses: async () => {},
  getShortSummaries: async () => {},
  getAllExpensesOfMonth: async () => {},
  getExpenseSummaryOfMonth: async () => {},
  searchExpensesOfMonthWithNotes: async () => {},
  filterExpensesOfMonth: async () => {},
};

export { ExpenseService };
