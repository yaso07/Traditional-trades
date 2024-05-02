
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
exports.getSellerById=async(req,res)=>{
      try{
         const data= await seller.findById({_id:req.params.id})
         res.json(data)
      }
      catch(error)
      {
           res.send(error)
      }
}
exports.getSeller=async(req, res) => {
  try {
    
    const data = await seller.find()
    
    return res.json(data);
    
  } catch (error) {
    return res.json({ error: "data not found" });
  }
};

