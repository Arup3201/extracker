import { RequestHandler, Router } from "express";

import { ExpenseService } from "../services/expenses";
import { getApiResponse } from "../api-response";
import { CustomError } from "../errors/custom-error";
import { getAbsoluteLocation } from "../utils/absolute-location";

const router = Router();

const createExpense: RequestHandler = async (req, res) => {
  const { at, amount, category, note } = req.body;

  try {
    const expense = await ExpenseService.createExpense(
      amount,
      at,
      category,
      note
    );
    res.set({
      Location: getAbsoluteLocation(req, `/expenses/${expense.id}`),
    });
    res.send(
      getApiResponse(201, "success", {
        expense: {
          ...expense,
          links: [
            {
              rel: "self",
              href: getAbsoluteLocation(req, `/expenses/${expense.id}`),
            },
          ],
        },
      })
    );
  } catch (err) {
    console.error("Error: ", err);

    if (err instanceof CustomError) {
      res.status(err.statusCode).send(
        getApiResponse(
          err.statusCode,
          err.statusText,
          {
            ...err.data,
            path: getAbsoluteLocation(req, `/expenses`),
          },
          err.statusMessage
        )
      );
    } else {
      res.status(500).send(
        getApiResponse(
          500,
          "Internal Server Error",
          {
            message: "Unexpected error in the server",
          },
          "Server failed to serve the request due to internal error, please try later!"
        )
      );
    }
  }
};

const editExpense: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

const deleteExpense: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

const getExpensesWithShortSummary: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

const getExpensesOfMonth: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

const getExpenseSummaryOfMonth: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

const searchExpensesOfMonthWithNote: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

const filterExpensesOfMonth: RequestHandler = async (req, res) => {
  try {
  } catch (err) {}
};

router.post("/expenses", createExpense);
router.put("/expenses/:id", editExpense);
router.delete("/expenses/:id", deleteExpense);
router.get("/expenses/all", getExpensesWithShortSummary);
router.get("/expenses/:month", getExpensesOfMonth);
router.get("/expenses/:month/summary", getExpenseSummaryOfMonth);
router.get("/expenses/:month/search", searchExpensesOfMonthWithNote);
router.get("/expenses/:month/filter", filterExpensesOfMonth);

export default router;
