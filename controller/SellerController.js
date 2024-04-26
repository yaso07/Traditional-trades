const mongoose = require("mongoose");
const product = require("../model/Seller");

exports.addSeller=async(req,res)=>{
     try
     {
        await product.create(req.body)
        return res.json({data:"success"})
     }
     catch(error)
     {
          return res.send(error)
     }
}

