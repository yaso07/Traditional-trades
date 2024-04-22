const mongoose = require("mongoose");
const product = mongoose.model("products", require("../model/product"));

exports.getProducts = async (req, res) => {
  try {
    const data = await product.find(req.query);
    console.log(data);
    return res.json(data);
  } catch (error) {
    res.send({
      errorMessage: error.message,
    });
  }
};
