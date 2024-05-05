const controller = require("../controller/OrderController");
const express = require("express");
const router = express.Router();
router.route("/").post(controller.addOrder)
router.route("/:id").get(controller.getOrderBySellerId)
module.exports = router;