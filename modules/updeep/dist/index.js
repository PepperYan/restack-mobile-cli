'use strict';

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _freeze = require('./freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

var _if2 = require('./if');

var _if3 = _interopRequireDefault(_if2);

var _ifElse = require('./ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _omit = require('./omit');

var _omit2 = _interopRequireDefault(_omit);

var _omitBy = require('./omitBy');

var _omitBy2 = _interopRequireDefault(_omitBy);

var _reject = require('./reject');

var _reject2 = _interopRequireDefault(_reject);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _updateIn = require('./updateIn');

var _updateIn2 = _interopRequireDefault(_updateIn);

var _withDefault = require('./withDefault');

var _withDefault2 = _interopRequireDefault(_withDefault);

var _curry = require('./util/curry');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var u = _update2.default;

u._ = _curry._;
u.constant = _constant2.default;
u.if = _if3.default;
u.ifElse = _ifElse2.default;
u.is = _is2.default;
u.freeze = _freeze2.default;
u.map = _map2.default;
u.omit = _omit2.default;
u.omitBy = _omitBy2.default;
u.reject = _reject2.default;
u.update = _update2.default;
u.updateIn = _updateIn2.default;
u.withDefault = _withDefault2.default;

module.exports = u;