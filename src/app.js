import express from "express";
import acl from "express-acl";
import routes from "./routes";
import database from "./database";
import authMiddleware from "./middlewares/auth";

acl.config({
  baseUrl: "/",
  path: "config",
  filename: "nacl.json"
});

class ConfigureExpress {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.app.database = database;
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(authMiddleware);
    this.app.use(acl.authorize.unless({ path: ["/users/authenticate"] }));
  }

  routes() {
    this.app.use("/", routes);
  }
}

export default async () => {
  const { app } = new ConfigureExpress();
  await app.database.connect();

  return app;
};
