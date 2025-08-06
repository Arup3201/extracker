import express from "express";

import { ENV } from "./configs/env";

const app = express();
const PORT = ENV.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server returned with error");
    return;
  }

  console.log("Server listening at ", PORT);
});
