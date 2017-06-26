'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.disable('x-powered-by');

if (_config2.default.env === 'development') {
    app.use((0, _morgan2.default)('dev'));
}

// Express Middlewares
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

//app.use(cookieParser());
//app.use(compress());
//app.use(methodOverride());

//app.use(helmet())

//app.use(cors())

var debug = require('debug')('invoice-app:index');

var Promise = require('bluebird');
_mongoose2.default.Promise = Promise;

// MongoDB Connection
var mongoUri = _config2.default.mongo.host;
_mongoose2.default.connect(mongoUri, function (err, res) {
    if (err) {
        console.log('Error connecting to the database...');
    } else {
        console.log('Connected to Database: ' + mongoUri);
    }
});

//const db = mongoose.connection;

// if (config.env === 'development') {
//     mongoose.set('debug', (collectionName, method, query, doc) => {
//         debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
//     });
// }

app.use('/api', _index2.default);

// Error Handlers
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    return res.status(err.status || 500).json({
        message: err.message,
        stack: _config2.default.env === 'development' ? err.stack : {}
    });
});

// Start the Server
var port = _config2.default.port;
app.listen(port, function () {
    console.log('Application started at port ' + port);
});

exports.default = app;