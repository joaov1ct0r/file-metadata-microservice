import express from "express";

import cors from "cors";

import userRouter from "./routes/userRoutes.js";

import swaggerDocs from "./swagger.json";

import swaggerUi from "swagger-ui-express";

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();

    this.docsRoutes();

    this.userRoutes();
  }

  private userRoutes() {
    this.server.use("/api", userRouter);
  }

  private middlewares() {
    this.server.use(cors());
  }

  private docsRoutes() {
    this.server.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
}
