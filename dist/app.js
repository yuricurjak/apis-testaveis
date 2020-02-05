"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _database = _interopRequireDefault(require("./config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class ConfigureExpress {
  constructor() {
    this.app = (0, _express.default)();
    this.middlewares();
    this.routes();
    this.app.database = _database.default;
  }

  middlewares() {
    this.app.use(_express.default.json());
  }

  routes() {
    this.app.use('/', _routes.default);
  }

}

var _default =
/*#__PURE__*/
_asyncToGenerator(function* () {
  const app = new ConfigureExpress().app;
  yield app.database.connect();
  return app;
});

exports.default = _default;