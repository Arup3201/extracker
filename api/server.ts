import express from "express";

const app = express();
const PORT = 8000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server returned with error");
    return;
  }

  console.log("Server listening at ", PORT);
});
