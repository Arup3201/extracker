import db from "../configs/db";

async function createTables() {
  // categories table
  await db.query(`
        CREATE TABLE categories(
            id VARCHAR(150) PRIMARY KEY, 
            created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
            name VARCHAR(150) NOT NULL
        )
    `);

  // expenses table
  await db.query(`
        CREATE TABLE expenses(
            id VARCHAR(150) PRIMARY KEY, 
            created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
            amount DECIMAL(2) NOT NULL, 
            category VARCHAR(150) REFERENCES categories(id), 
            expense_at TIMESTAMP WITH TIME ZONE NOT NULL,
            note TEXT
        )
    `);
}

createTables().then(() => console.log("Tables created..."));
