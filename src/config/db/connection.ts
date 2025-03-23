import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { envs } from '../envs';

export const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: envs.DB_HOST,
      user: envs.DB_USER,
      database: envs.DB_DATABASE,
      password: envs.DB_PASSWORD
    });

    const db = drizzle({ client: connection });
    return db;
  } catch (error) {
    console.log(error);
  }
};
