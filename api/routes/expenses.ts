import { RequestHandler, Router } from "express";
import { ExpenseService } from "../services/expenses";
import { API_PATH } from "../constants";
import { getApiResponse } from "../api-response";

const router = Router();

const createExpense: RequestHandler = async (req, res) => {
  const { at, amount, category, note } = req.body;

  if (!at) {
    res.send(getApiResponse(400, "fail", { at: "at field cannot be null" }));
  }

  if (!amount) {
    res.send(
      getApiResponse(400, "fail", { amount: "amount field cannot be null" })
    );
  }

  if (!category) {
    res.send(
      getApiResponse(400, "fail", { category: "category field cannot be null" })
    );
  }

  try {
    const expense = await ExpenseService.createExpense(
      amount,
      at,
      category,
      note
    );
    res.set({
      Location: req.baseUrl + API_PATH + `/expenses/${expense.id}`,
    });
    res.send(
      getApiResponse(201, "success", {
        expense: {
          ...expense,
          links: [
            {
              rel: "self",
              href: req.baseUrl + API_PATH + `/expenses/${expense.id}`,
            },
          ],
        },
        links: [
          {
            rel: "delete-expense",
            href: req.baseUrl + API_PATH + `/expenses/${expense.id}`,
            method: "DELETE",
          },
          {
            rel: "edit-expense",
            href: req.baseUrl + API_PATH + `/expenses/${expense.id}`,
            method: "PUT",
          },
        ],
      })
    );
  } catch (err) {
    console.error("Error: ", err);
    res.send(
      getApiResponse(
        500,
        "error",
        { exception: "UnexpectedServerError" },
        "Server returned error"
      )
    );
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
