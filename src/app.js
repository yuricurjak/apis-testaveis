import express from 'express';
import routes from './routes';
import database from './database';
import acl from 'express-acl';
import authMiddleware from './middlewares/auth';

acl.config({
    baseUrl: '/',
    path: 'config'
});

class ConfigureExpress {
    constructor () {
        this.app = express();
        this.middlewares();
        this.routes();
        this.app.database = database;
    }

    middlewares () {
        this.app.use(express.json());
        this.app.use(acl.authorize.unless({path:['/users/authenticate']}));
        this.app.use(authMiddleware);
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

