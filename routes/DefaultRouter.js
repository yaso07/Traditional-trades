const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const product = require("../model/product")

const getProductById=async(req,res)=>{
    try{
         console.log(req.params);
         const response=await product.find({_id:req.params.id})
         console.log(response)
         return res.json({data:response[0]})
    }
    catch(error){
        res.send({error:"data not found"})
    }
}
const getProduct=async(req,res)=>{
     try {
       const response = await product.find();
       const data = {
         pagination: {
           page: 1,
           pageSize: 10,
           pageCount: 3,
           total: 22,
         },
         categories: ['tamilnadu','andhra pradesh'],
         companies: [
           "all",
           "Modenza",
           "Luxora",
           "Artifex",
           "Comfora",
           "Homestead",
         ],
       };
       console.log(response.data)
       return res.json({data:response,meta:data});
     } 
     catch (error) {
       res.send({ error: "data not found" });
     }
}
const addProduct=async(req,res)=>{
     const productData = req.body;
     console.log(req.body)
     const data = {
       attributes: {
         title: productData.product,
         company: "Modenza",
         description: productData.description,
         featured: productData.featured,
         createdAt: "2023-08-10T10:07:41.876Z",
         updatedAt: "2023-08-10T10:16:43.298Z",
         publishedAt: "2023-08-10T10:07:44.157Z",
         category: productData.category,
         image: productData.image,
         price: productData.price,
         status: productData.status,
         shipping: false,
         colors: ["#33FF57", "#3366FF"],
       },
       id: productData._id,
       sellerId: productData.sellerId,
     };

  try{
        
        const da=await product.create(data);
        console.log("addes"+da);
        console.log("added")
        return res.json({created:"success"});
         
      }
      catch(error)
      {
        return { error: "not valid" };
      }

}
router.route('/').get(getProduct).post(addProduct)
router.route('/:id').get(getProductById)
module.exports = router;

