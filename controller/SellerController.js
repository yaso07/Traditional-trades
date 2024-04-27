const mongoose = require("mongoose");
const seller = require("../model/Seller");

exports.addSeller=async(req,res)=>{
     try
     {
     console.log(req.body)
        await seller.create(req.body)
        return res.json({data:"success"})
     }
     catch(error)
     {
          return res.send(error)
     }
}
exports.getSeller=async(req,res)=>{
      try{
         const data= await product.findById({_id:req.query.id})
         res.json(data)
      }
      catch(error)
      {
           res.send(error)
      }
}

