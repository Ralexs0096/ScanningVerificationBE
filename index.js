import express from 'express';
const app = express()



app.get('/', (req, res) => {
  console.log('Hello from /');
  res.send("hello world")
})


app.listen(5000, () => {
  console.log('Running on port 5000');
})

