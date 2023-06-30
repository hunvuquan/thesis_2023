import express, { Express } from 'express'
import config from './config';
import routes from './routes';

const app: Express = express();
routes(app);
app.listen(config.port, () => {
    console.log(`http://${config.host}:${config.port}`)
})