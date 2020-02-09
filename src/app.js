import express from 'express';
import routes from './routes';
import database from './database';

class ConfigureExpress {
    constructor () {
        this.app = express();
        this.middlewares();
        this.routes();
        this.app.database = database;
    }

    middlewares () {
        this.app.use(express.json());
    }

    routes () {
        this.app.use('/', routes);
    }
}

export default async () => {
    const app = new ConfigureExpress().app;
    await app.database.connect();

    return app;
}

