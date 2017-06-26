'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _facade = require('../../lib/facade');

var _facade2 = _interopRequireDefault(_facade);

var _customerSchema = require('./customer-schema');

var _customerSchema2 = _interopRequireDefault(_customerSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomerModel = function (_Model) {
  _inherits(CustomerModel, _Model);

  function CustomerModel() {
    _classCallCheck(this, CustomerModel);

    return _possibleConstructorReturn(this, (CustomerModel.__proto__ || Object.getPrototypeOf(CustomerModel)).apply(this, arguments));
  }

  return CustomerModel;
}(_facade2.default);

// module.exports = new CustomerModel(customerSchema)


exports.default = new CustomerModel(_customerSchema2.default);