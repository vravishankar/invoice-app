'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomerSchema = new _mongoose2.default.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }
    //createdAt: { type: Date, default: Date.now }
});

module.exports = _mongoose2.default.model('Customer', CustomerSchema);
//export default mongoose.model('Customer', CustomerSchema);