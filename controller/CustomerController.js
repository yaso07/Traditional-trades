
const customer=require('../model/customer')

exports.addCustomer=async(req,res)=>{
       try{
             await customer.create(req.body)
             return res.json({data:"success"})
       }
       catch(error){
           return res.send({error})
       }
}
exports.getCustomer=async(req,res)=>{
      try{
         const data=await customer.find()
         console.log(data)
         return res.json(data)
      }
      catch(error)
      {
         return res.send({error:error})
      }
}

exports.getCustomerById=async(req,res)=>{
      console.log(req.params.id)
      try{
            const data=await customer.find({_id:req.params.id});
            return res.json({ data: data[0] });
      }
      catch(error)
      {
             return res.json({error:"data not found"})
      }
}
exports.updateCustomer=async(req,res)=>{
       try {
         console.log(req.id)
        const res= await customer.findByIdAndUpdate(req.params.id,req.body);
         console.log(res)
        res.json({data:"success"})
       } catch (error) {
         return res.json({ error: "data not found" });
       }
}