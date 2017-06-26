"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller(facade) {
        _classCallCheck(this, Controller);

        this.facade = facade;
    }

    _createClass(Controller, [{
        key: "find",
        value: function find(req, res, next) {
            return this.facade.find(req.query).then(function (collection) {
                return res.status(200).json(collection);
            }).catch(function (err) {
                return next(err);
            });
        }
    }, {
        key: "findOne",
        value: function findOne(req, res, next) {
            return this.facade.findOne(req.query).then(function (doc) {
                return res.status(200).json(doc);
            }).catch(function (err) {
                return next(err);
            });
        }
    }, {
        key: "findById",
        value: function findById(req, res, next) {
            return this.facade.findById(req.params.id).then(function (doc) {
                if (!doc) {
                    return res.status(404).end();
                }
                return res.status(200).json(doc);
            }).catch(function (err) {
                return next(err);
            });
        }
    }, {
        key: "create",
        value: function create(req, res, next) {
            this.facade.create(req.body).then(function (doc) {
                return res.status(201).json(doc);
            }).catch(function (err) {
                return next(err);
            });
        }
    }, {
        key: "update",
        value: function update(req, res, next) {
            var conditions = { _id: req.params.id };

            this.facade.update(conditions, req.body).then(function (doc) {
                if (!doc) {
                    return res.status(404).end();
                }
                return res.status(200).json(doc);
            }).catch(function (err) {
                return next(err);
            });
        }
    }, {
        key: "remove",
        value: function remove(req, res, next) {
            this.facade.remove(req.params.id).then(function (doc) {
                if (!doc) {
                    return res.status(404).end();
                }
                return res.status(204).end();
            }).catch(function (err) {
                return next(err);
            });
        }
    }]);

    return Controller;
}();

exports.default = Controller;