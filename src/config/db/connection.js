import mysql from 'mysql2/promise';

export const createConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD
    });

    return connection
  } catch (error) {
    console.log(error);
  }
}
