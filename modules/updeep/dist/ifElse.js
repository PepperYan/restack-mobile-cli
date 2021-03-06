'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateIfElse(predicate, trueUpdates, falseUpdates, object) {
  var test = typeof predicate === 'function' ? predicate(object) : predicate;

  var updates = test ? trueUpdates : falseUpdates;

  return (0, _update2.default)(updates, object);
}

exports.default = (0, _wrap2.default)(updateIfElse);