'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _curry = require('./util/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withDefault(defaultValue, updates, object) {
  if (typeof object === 'undefined') {
    return (0, _update2.default)(updates, defaultValue);
  }

  return (0, _update2.default)(updates, object);
}

exports.default = (0, _curry2.default)(withDefault);