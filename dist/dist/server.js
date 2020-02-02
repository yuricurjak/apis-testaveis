"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res) => res.send('Hello Word!'));
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});