const mongoose=require('mongoose')

const TraditonalProduct = mongoose.Schema({
  product: {
    type: String,
  },
  stock: {
    type: Number,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
    default: "available",
  },
});


const Product=mongoose.model('product',TraditonalProduct)
module.exports=Product