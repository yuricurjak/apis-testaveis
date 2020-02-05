"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const port = 3000;

_asyncToGenerator(function* () {
  try {
    const app = yield (0, _app.default)();
    const server = app.listen(port, '0.0.0.0', () => {
      console.info(`Server running on port ${port}`);
    });
    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    exitSignals.map(sig => process.on(sig, () => server.close(err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      app.database.connection.close(function () {
        console.info('Database connection closed!');
        process.exit(0);
      });
    })));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();