'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ifElse = require('./ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _curry = require('./util/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curry2.default)(function (predicate, trueUpdates, object) {
  return (0, _ifElse2.default)(predicate, trueUpdates, function (x) {
    return x;
  }, object);
});