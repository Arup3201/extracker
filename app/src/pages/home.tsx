import { useState } from "react";

const EXPENSE_MOCK_DATA = [
  {
    month: "January",
    shortSummary: {
      total: 12000,
      category: {
        name: "food",
        total: 2000,
      },
      day: {
        name: "Tuesday",
        average: 220,
      },
    },
    expenses: [
      {
        datetime: "05-08-2025 19:11",
        amount: 40,
        category: "food",
        note: "Dosa, Omelete",
      },
      {
        datetime: "05-08-2025 24:11",
        amount: 20,
        category: "food",
        note: "Tea",
      },
      {
        datetime: "06-08-2025 08:11",
        amount: 40,
        category: "food",
        note: "Idli, Vada",
      },
      {
        datetime: "06-08-2025 12:11",
        amount: 120,
        category: "food",
        note: "Veg thali",
      },
      {
        datetime: "06-08-2025 04:11",
        amount: 15,
        category: "food",
        note: "Samosa",
      },
    ],
  },
  {
    month: "February",
    shortSummary: {
      total: 12500,
      category: {
        name: "food",
        total: 2500,
      },
      day: {
        name: "Tuesday",
        average: 280,
      },
    },
    expenses: [
      {
        datetime: "05-08-2025 19:11",
        amount: 40,
        category: "food",
        note: "Dosa, Omelete",
      },
      {
        datetime: "05-08-2025 24:11",
        amount: 20,
        category: "food",
        note: "Tea",
      },
      {
        datetime: "06-08-2025 08:11",
        amount: 40,
        category: "food",
        note: "Idli, Vada",
      },
      {
        datetime: "06-08-2025 12:11",
        amount: 120,
        category: "food",
        note: "Veg thali",
      },
      {
        datetime: "06-08-2025 04:11",
        amount: 15,
        category: "food",
        note: "Samosa",
      },
    ],
  },
];

const HomePage = () => {
  const [open, setOpen] = useState<number[]>([]);

  function handleToggleAccordion(mIndex: number) {
    setOpen((snap) => {
      const copy = [...snap];
      const index = copy.indexOf(mIndex);
      if (index === -1) {
        return [...copy, mIndex];
      }

      copy.splice(index, 1);
      return copy;
    });
  }

  return (
    <>
      <header>
        <h1>Personal Expense Tracker</h1>
      </header>
      <main>
        <section>
          <form>
            <div className="form-field">
              <label htmlFor="datetime">Date and time</label>
              <input
                id="datetime"
                name="datetime"
                type="datetime-local"
                placeholder="Enter date and time"
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount">Amount(Rs)</label>
              <input
                id="amount"
                name="amount"
                type="number"
                placeholder="Enter amount"
              />
            </div>
            <div className="form-field">
              <label htmlFor="category" id="category">
                Category
              </label>
              <select name="category">
                <option>Food</option>
                <option>Rent</option>
                <option>Travel</option>
                <option>Health</option>
              </select>
            </div>
            <button>Add Expense</button>
          </form>
        </section>
        {EXPENSE_MOCK_DATA.map((monthlyExpenseInfo, monthIndex) => {
          return (
            <section>
              <h2>{monthlyExpenseInfo.month}</h2>
              <div className="short-summary-box">
                <div
                  className="accordion"
                  onClick={() => handleToggleAccordion(monthIndex)}
                >
                  <h3>Short Summary</h3>
                  <span>{open.indexOf(monthIndex) > -1 ? "-" : "+"}</span>
                </div>
                <ul
                  className={`panel short-summary-data ${
                    open.indexOf(monthIndex) > -1 ? "visible" : ""
                  }`}
                >
                  <li>
                    Total: <b>Rs. {monthlyExpenseInfo.shortSummary.total}</b>
                  </li>
                  <li>
                    Most expensive category:{" "}
                    <b>
                      {monthlyExpenseInfo.shortSummary.category.name} (Rs.{" "}
                      {monthlyExpenseInfo.shortSummary.category.total})
                    </b>
                  </li>
                  <li>
                    Most expensive day:{" "}
                    <b>
                      {monthlyExpenseInfo.shortSummary.day.name} (Rs.{" "}
                      {monthlyExpenseInfo.shortSummary.day.average})
                    </b>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Expenses</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Date Time</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyExpenseInfo.expenses.map((dailyExpense) => (
                      <tr>
                        <td>{dailyExpense.datetime}</td>
                        <td>Rs. {dailyExpense.amount}</td>
                        <td>{dailyExpense.category}</td>
                        <td>{dailyExpense.note}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={4}>
                        <a>Show all expenses</a>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default HomePage;
