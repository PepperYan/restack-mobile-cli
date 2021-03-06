'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reject2 = require('lodash/reject');

var _reject3 = _interopRequireDefault(_reject2);

var _wrap = require('./wrap');

var _wrap2 = _interopRequireDefault(_wrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reject(predicate, collection) {
  var result = (0, _reject3.default)(collection, predicate);
  var equal = collection.length === result.length;

  return equal ? collection : result;
}

exports.default = (0, _wrap2.default)(reject);