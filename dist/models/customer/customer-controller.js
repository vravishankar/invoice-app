'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('../../lib/controller');

var _controller2 = _interopRequireDefault(_controller);

var _customerFacade = require('./customer-facade');

var _customerFacade2 = _interopRequireDefault(_customerFacade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerController = function (_Controller) {
  _inherits(CustomerController, _Controller);

  function CustomerController() {
    _classCallCheck(this, CustomerController);

    return _possibleConstructorReturn(this, (CustomerController.__proto__ || Object.getPrototypeOf(CustomerController)).apply(this, arguments));
  }

  return CustomerController;
}(_controller2.default);

//module.exports = new CustomerController(customerFacade)


exports.default = new CustomerController(_customerFacade2.default);