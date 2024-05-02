const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");
router.route("/").get(productController.getProducts).post(productController.addProduct)
router.route("/:id").get(productController.getProductsById).patch(productController.updateProduct).delete(productController.deleteProduct)

module.exports = router;
