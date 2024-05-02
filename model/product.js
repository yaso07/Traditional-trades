const mongoose=require('mongoose');
const productSchema=mongoose.Schema({

    _id:{
        type:String
    },
    id: {
      type:Number
    },
    attributes: {
        title: {
          type: String
        },
        company: {
          type: String
        },
        description: {
          type: String
        },
        featured: {
          type: Boolean
        },
        createdAt: {
          type: String,
        },
        updatedAt: {
          type: String,
         
        },
        publishedAt: {
          type: String,
          
        },
        category: {
          type: String
        },
        image: {
          type: String,
        },
        price: {
          type: String 
        },
        shipping: {
          type: Boolean
        },
        colors: {
          type: Array,
          items: {
            type: String,
          }
        }
    
    }
  
 
})

const productModel = mongoose.model("user_products",productSchema);
module.exports=productModel