'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _customerRouter = require('../models/customer/customer-router');

var _customerRouter2 = _interopRequireDefault(_customerRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/health', function (req, res) {
    res.send('OK');
});

router.use('/customers', _customerRouter2.default);
//router.use('orders', orderRoutes);

exports.default = router;