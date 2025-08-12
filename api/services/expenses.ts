import type { Expense } from "../models/expense.dt";

import { BadInputError, BadTypeError } from "../errors";

import { generateId } from "../utils/id";
import db from "../configs/db";

const ExpenseService = {
  createExpense: async (
    amount: number,
    at: Date,
    category: string,
    note: string
  ) => {
    if (!amount) {
      throw new BadInputError(
        `'amount' input is missing`,
        "'amount' can't be empty"
      );
    }
    if (!at) {
      throw new BadInputError(`'at' input is missing`, "'at' can't be empty");
    }
    if (!category) {
      throw new BadInputError(
        `'category' input is missing`,
        "'category' can't be empty"
      );
    }

    if (typeof amount !== "number") {
      throw new BadTypeError(
        `'amount' input type is incorrect`,
        "'amount' input needs to be a number"
      );
    }
    if (at instanceof Date) {
      throw new BadTypeError(
        `'at' input type is incorrect`,
        "'at' input needs to be a datetime string"
      );
    }
    if (typeof category !== "string") {
      throw new BadTypeError(
        `'category' input type is incorrect`,
        "'category' input needs to be a string"
      );
    }
    if (typeof note !== "string") {
      throw new BadTypeError(
        `'note' input type is incorrect`,
        "'note' input needs to be a string"
      );
    }

    const id = generateId("EXPENSE_");
    const currentTime = new Date();

    await db.parameterizedQuery(
      `INSERT INTO 
      expenses(id, created_at, updated_at, amount, category, expense_at, note) 
      VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [id, currentTime, currentTime, amount, category, at, note]
    );

    const { rows } = await db.parameterizedQuery(
      `SELECT id, created_at, updated_at, amount, category, expense_at, note 
      FROM expenses WHERE (id=$1)`,
      [id]
    );

    return rows[0] as Expense;
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
