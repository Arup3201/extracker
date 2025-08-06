type Environment = {
  PORT?: string;
  PG_HOST: string;
  PG_USER: string;
  PG_PORT: string;
  PG_PASSWORD: string;
  PG_DATABASE: string;
};
type EnvVar = keyof Environment;

export type { EnvVar, Environment };
