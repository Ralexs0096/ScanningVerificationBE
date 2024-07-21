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

  }

}

export default Server