'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;

var _curry = require('./util/curry');

var _curry2 = _interopRequireDefault(_curry);

var _freeze = require('./freeze');

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrap(func) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : func.length;

  return (0, _curry2.default)(function () {
    return (0, _freeze2.default)(func.apply(undefined, arguments));
  }, length);
}