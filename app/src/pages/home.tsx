const HomePage = () => {
  return (
    <>
      <header>
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
      </header>
      <main>
        <section>
          <h2>January</h2>
          <div className="short-summary">
            <span>Total: $240</span>
            <span>Most expensive category: Food($30)</span>
            <span>Most expensive day: Tuesday($30)</span>
          </div>
          <table>
            <thead>
              <th>Date Time</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Notes</th>
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
              <tr>
                <td colSpan={-1}>Show more...</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>February</h2>
          <div className="short-summary">
            <span>Total: $240</span>
            <span>Most expensive category: Food($30)</span>
            <span>Most expensive day: Tuesday($30)</span>
          </div>
          <table>
            <thead>
              <th>Date Time</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Notes</th>
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
              <tr>
                <td colSpan={-1}>Show more...</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2>March</h2>
          <div className="short-summary">
            <span>Total: $240</span>
            <span>Most expensive category: Food($30)</span>
            <span>Most expensive day: Tuesday($30)</span>
          </div>
          <table>
            <thead>
              <th>Date Time</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Notes</th>
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
              <tr>
                <td colSpan={-1}>Show more...</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default HomePage;
