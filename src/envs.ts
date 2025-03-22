import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
  SERVER_PORT: env.get('SERVER_PORT').required().asPortNumber(),

  // DB Config
  DB_USER: env.get('DB_USER').required().asString(),
  DB_PASSWORD: env.get('DB_PASSWORD').required().asString(),
  DB_HOST: env.get('DB_HOST').required().asString(),
  DB_DATABASE: env.get('DB_DATABASE').required().asString()
};
