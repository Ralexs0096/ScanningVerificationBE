import mysql from 'mysql2/promise';
import express from 'express';
const app = express()

// Create the connection to database
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
});

app.get('/', async (req, res) => {
  // A simple SELECT query
  try {
    const [results] = await connection.query(
      'SELECT * FROM `tb_area`'
    );

    res.json({
      results
    })

  } catch (err) {
    console.log(err);
  }
})



app.listen(process.env.SERVER_PORT, () => {
  console.log('Running on port 5000');
})
