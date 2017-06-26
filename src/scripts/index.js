import express from 'express'

import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import methodOverride from 'method-override';
import helmet from 'helmet';
import mongoose from 'mongoose'

import config from './config';
import routes from './routes/index'

const app = express()
app.disable('x-powered-by')

if (config.env === 'development') {
    app.use(logger('dev'))
}

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());
app.use(helmet());
app.use(cors());

const debug = require('debug')('invoice-app:index');

const Promise = require('bluebird');
mongoose.Promise = Promise;

// MongoDB Connection
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, function(err, res) {
    if (err) {
        console.log('Error connecting to the database...')
    } else {
        console.log(`Connected to Database: ${mongoUri}`);
    }
});

//const db = mongoose.connection;

// if (config.env === 'development') {
//     mongoose.set('debug', (collectionName, method, query, doc) => {
//         debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
//     });
// }

app.use('/api', routes)

// Error Handlers
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) =>
    res.status(err.status || 500).json({
        message: err.message,
        stack: config.env === 'development' ? err.stack : {}
    })
)

// Start the Server
const port = config.port
app.listen(port, () => {
    console.log(`Application started at port ${port}`);
})

export default app;