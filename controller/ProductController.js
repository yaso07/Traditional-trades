const mongoose = require("mongoose");
//const product = mongoose.model("products", require("../model/product"));
const product=require('../model/TraditionalProduct')
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


exports.addProduct=async(req,res)=>{
 
   try{
         await product.create(req.body) 
         return res.json({data:"success"})
   }
   catch(error)
   {
        return res.send({error:"could not add",reason:error})
   }

}

