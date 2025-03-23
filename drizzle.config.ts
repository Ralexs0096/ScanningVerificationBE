import { envs } from './src/config/envs';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  schema: './src/config/db/schema.ts',
  dbCredentials: {
    url: `mysql://${envs.DB_USER}:${envs.DB_PASSWORD}@${envs.DB_HOST}/${envs.DB_DATABASE}`
  }
});
