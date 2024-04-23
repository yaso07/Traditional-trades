const mongoose = require("mongoose");
const product = mongoose.model("products", require("../model/product"));

exports.getProducts = async (req, res) => {
  try {
    const data = await product.find(req.query);
    
    return res.json(data);
  } catch (error) {
    res.send({
      errorMessage: error.message,
    });
  }
};

exports.getProductsById=async(req,res)=>{
  try{
     
      const data=await product.find({id:req.params.id})
     
      return res.json(data)
  }
  catch(error)
  {
    res.send({errorMessage:"not found"})
  }

}
