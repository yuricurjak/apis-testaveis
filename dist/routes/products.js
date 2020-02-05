"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("../controllers/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const productController = new _products.default();
router.get('/', (req, res) => productController.get(req, res));
var _default = router;
exports.default = _default;