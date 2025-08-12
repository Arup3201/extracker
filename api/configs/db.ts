import { Pool } from "pg";
import { ENV } from "./env";
import type { DB } from "./db.dt";

function createPool() {
  return new Pool({
    host: ENV.PG_HOST,
    port: Number(ENV.PG_PORT),
    user: ENV.PG_USER,
    password: ENV.PG_PASSWORD,
    database: ENV.PG_DATABASE,
  });
}

const db: DB = {
  pool: createPool(),
  query: async function (sql: string) {
    const start = Date.now();
    const result = await this.pool.query(sql);
    const end = Date.now();
    console.log("Query run successfully. Details: ", {
      time: (end - start).toFixed(2),
      rowCount: result.rowCount,
    });
    return result;
  },
  parameterizedQuery: async function (sql: string, params: any[]) {
    const start = Date.now();
    const result = await this.pool.query(sql, params);
    const end = Date.now();
    console.log("Query run successfully. Details: ", {
      time: (end - start).toFixed(2),
      rowCount: result.rowCount,
    });
    return result;
  },
};

export default db;
