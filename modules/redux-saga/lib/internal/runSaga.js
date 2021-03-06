'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSaga = runSaga;

var _utils = require('./utils');

var _proc = require('./proc');

var _proc2 = _interopRequireDefault(_proc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function runSaga(iterator, _ref) {
  var subscribe = _ref.subscribe;
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;
  var sagaMonitor = _ref.sagaMonitor;
  var logger = _ref.logger;


  (0, _utils.check)(iterator, _utils.is.iterator, "runSaga must be called on an iterator");

  return (0, _proc2.default)(iterator, subscribe, dispatch, getState, { sagaMonitor: sagaMonitor, logger: logger });
}