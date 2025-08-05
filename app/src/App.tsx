import { BrowserRouter as Router, Routes, Route } from "react-router";

import HomePage from "./pages/home";
import ExpensesPage from "./pages/expenses";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<ExpensesPage />} path="/expenses" />
      </Routes>
    </Router>
  );
}

export default App;
