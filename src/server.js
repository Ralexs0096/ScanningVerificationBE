import express from 'express'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.SERVER_PORT ?? 5000
  }

  dbConnection() {

  }

  middleware() {

  }

  routes() {

  }

  listen() {
    this.app.listen(process.env.SERVER_PORT, () => {
      console.log('Running on port 5000');
    })
  }

}

export default Server