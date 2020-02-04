"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.app = (0, _express.default)();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express.default.json());
  }

  routes() {
    this.app.use('/', _routes.default);
  }

}

var _default = new App().app;
exports.default = _default;