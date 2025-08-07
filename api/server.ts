import express from "express";

import { ENV } from "./configs/env";
import { API_PATH } from "./constants";
import expenseRouter from "./routes/expenses";

const app = express();
const PORT = ENV.PORT || 8000;

app.use(express.json());
app.use(API_PATH, expenseRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server returned with error");
    return;
  }

  console.log("Server listening at ", PORT);
});
