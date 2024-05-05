const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    id: {
      type:String
    },
    sellerId:{
        type:String
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
        status:{
           type:String
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