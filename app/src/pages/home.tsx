const HomePage = () => {
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
        <section>
          <h2>January</h2>
          <div className="short-summary">
            <h3>Short Summary</h3>
            <span>
              Total: <b>$240</b>
            </span>
            <span>
              Most expensive category: <b>Food($30)</b>
            </span>
            <span>
              Most expensive day: <b>Tuesday($30)</b>
            </span>
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
                <tr>
                  <td>05-08-2025 16:59</td>
                  <td>$30</td>
                  <td>Food</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>05-08-2025 16:59</td>
                  <td>$30</td>
                  <td>Food</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>05-08-2025 16:59</td>
                  <td>$30</td>
                  <td>Food</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>05-08-2025 16:59</td>
                  <td>$30</td>
                  <td>Food</td>
                  <td>...</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}><a>Show all expenses</a></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
