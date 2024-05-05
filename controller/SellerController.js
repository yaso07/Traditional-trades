
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
exports.updateSeller = async (req, res) => {
  try {

    console.log(req.params)
    console.log(req.body)
    await seller.findByIdAndUpdate(req.params.id, req.body);
    return res.send({ data: "success" });
  } catch (error) {
    return res.send({ error: "error in update" });
  }
};
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

exports.getVerfiySeller=async(req,res)=>{
     const {identifier,password}=req.body
     console.log("i"+identifier +"p"+password)
    try
    {
        if(!identifier || !password){
           console.log('asdsa')
           throw error;
        }
        else{
            const data = await seller.find({
              $and: [{ email:identifier}, { password: password }],
            });
             console.log(data)
        if(data.length==1)
        {
           return res.send({sellerId:data[0]._id})
        }
        else
        {
          
          return res.send({error:"error"})
        }
      }
    }
    catch(error){
         return res.json({error:"error"})
    }
}


const requiredDetails=require('../model/RequiredDetails')
exports.SetCurrentUser=async(req,res)=>{
       try
       {
           await requiredDetails.findByIdAndUpdate(req.params.id,req.body);
              return res.send({ data: "success" });
      } catch (error) {
        return res.send({ error: "error in update" });
      }
       
}
exports.getCurrentUserDetails=async(req,res)=>{
       try {
         const data = await requiredDetails.find({ _id: req.params.id });
         return res.json(data)
       } catch (error) {
         return res.send({ error: "error to fetch" });
       }
}

