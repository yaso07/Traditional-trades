const mongoose = require("mongoose");
const  order = require("../model/orders");

exports.addOrder = async (req, res) => {
  try {
    console.log(req.body)
    const data = await order.create(req.body);

    console.log(data);
    return res.json({ data: "success" });
  } catch (error) {
    return res.send({ error: "could not add", reason: error });
  }
};
exports.getOrderBySellerId=async(req,res)=>{
      try{
        console.log(req.params)
      const data=await order.find({sellerId:req.params.id})
      return res.json(data)
  }
  catch(error)
  {
    res.send({errorMessage:"not found"})
  }
}