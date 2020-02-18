import express from "express";
import ProductController from "../controllers/products";
import Product from "../models/product";

const router = express.Router();
const productController = new ProductController(Product);

router.get("/", (req, res) => productController.get(req, res));
router.get("/:id", (req, res) => productController.getById(req, res));
router.post("/", (req, res) => productController.create(req, res));
router.put("/:id", (req, res) => productController.update(req, res));
router.delete("/:id", (req, res) => productController.remove(req, res));

export default router;
