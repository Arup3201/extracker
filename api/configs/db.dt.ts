import { Pool, QueryResult } from "pg";

type DB = {
  pool: Pool;
  query(sql: string): Promise<QueryResult>;
  parameterizedQuery(sql: string, params: any[]): Promise<QueryResult>;
};

export type { DB };
