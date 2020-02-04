"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3000;

_app.default.listen(3000, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});