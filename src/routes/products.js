import express from 'express';
import ProductController from '../controllers/products';

const router = express.Router();
const productController = new ProductController();

router.get('/', (req, res) => productController.get(req, res));

export default router;