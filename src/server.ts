import express, { Application, Request, Response } from 'express';
import { envs } from './envs';
// import Routes from './routes/index.ts';

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = envs.SERVER_PORT;

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/check', (_: Request, res: Response) => {
      res.json({
        alive: true
      });
    });

    // Routes.forEach(({ path, route }) => {
    //   this.app.use(path, route);
    // });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}

export default Server;
