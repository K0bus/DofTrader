import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import APIInfosRouter from './routes/api-infos.js';
import SpritesRouter from './routes/sprites.js';
import DataRouter from './routes/data.js';
import SearchRouter from './routes/search.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use('/', swaggerUI.serve);
app.get('/', swaggerUI.setup(swaggerSpec));


app.use('/:version/:lang/search', SearchRouter);
app.use('/api-infos', APIInfosRouter);
app.use('/:version/sprites', SpritesRouter);
app.use('/data', DataRouter);

export default app;
