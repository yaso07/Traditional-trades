
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