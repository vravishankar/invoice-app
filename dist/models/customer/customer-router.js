'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _customerController = require('./customer-controller');

var _customerController2 = _interopRequireDefault(_customerController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
//router.get('/', controller.customer_list)
router.route('/').get(function () {
    return _customerController2.default.find.apply(_customerController2.default, arguments);
}).post(function () {
    return _customerController2.default.create.apply(_customerController2.default, arguments);
});

router.route('/:id').get(function () {
    var _console;

    _customerController2.default.findById.apply(_customerController2.default, arguments);
    (_console = console).log.apply(_console, arguments);
}).put(function () {
    return _customerController2.default.update.apply(_customerController2.default, arguments);
}).delete(function () {
    return _customerController2.default.remove.apply(_customerController2.default, arguments);
});

exports.default = router;