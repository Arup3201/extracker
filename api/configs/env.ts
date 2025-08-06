import fs from "fs";
import { Environment, EnvVar } from "./env.dt";

const ENV = {} as Environment;
const envContent = fs.readFileSync("./.env", { encoding: "utf-8" });
envContent.split("\n").forEach((line) => {
  const lr = line.split("=");
  const lv = lr[0].trim() as EnvVar;
  const rv = lr[1].trim();
  ENV[lv] = rv;
});

export { ENV };
