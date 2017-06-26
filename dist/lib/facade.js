"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Facade = function () {
    function Facade(Schema) {
        _classCallCheck(this, Facade);

        this.Schema = Schema;
    }

    _createClass(Facade, [{
        key: "create",
        value: function create(input) {
            var schema = new this.Schema(input);
            return schema.save();
        }
    }, {
        key: "update",
        value: function update(conditions, _update) {
            return this.Schema.update(conditions, _update, { new: true }).exec();
        }
    }, {
        key: "find",
        value: function find() {
            var _Schema;

            return (_Schema = this.Schema).find.apply(_Schema, arguments).exec();
        }
    }, {
        key: "findOne",
        value: function findOne() {
            var _Schema2;

            return (_Schema2 = this.Schema).findOne.apply(_Schema2, arguments).exec();
        }
    }, {
        key: "findById",
        value: function findById(id) {
            return this.Schema.findById(id).exec();
        }
    }, {
        key: "remove",
        value: function remove(id) {
            return this.Schema.findByIdAndRemove(id).exec();
        }
    }]);

    return Facade;
}();

exports.default = Facade;