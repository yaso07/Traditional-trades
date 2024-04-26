const mongoose=require('mongoose')

const TraditonalProduct=mongoose.Schema({

     product:{
         type:String,
     },
     stock:{
        type:Number,
     },
     price:{
         type:Number,
     },
     image:{
         type:String,
     },
     description:{
        type:String
     },
     status:{
         type:String,
         default:'available'
     }
})


const Product=mongoose.model('product',TraditonalProduct)
module.exports=Product