import express from 'express'
import { createConnection } from './config/db/connection.js'
import Routes from './routes/index.js'

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.SERVER_PORT ?? 5000

    this.dbConnection()
    this.middleware()
    this.routes()
  }

  async dbConnection() {
    await createConnection()
    console.log("Database is connected...");
  }

  middleware() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes() {
    this.app.use('/check', (_, res) => {
      res.json({
        alive: true
      })
    })

    Routes.forEach(({ path, route }) => {
      this.app.use(path, route)
    })
  }

  listen() {
    this.app.listen(process.env.SERVER_PORT, () => {
      console.log('Running on port 5000');
    })
  }

}

export default Server