const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const product = require("../model/product")

const getProductById=async(req,res)=>{
    try{
         const response=await product.find({id:req.params.id})
         
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
router.route('/').get(getProduct)
router.route('/:id').get(getProductById)
module.exports = router;

