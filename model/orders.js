const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  
  customer:{
      type:String
  },
  sellerId:{
      type:String,
  },
  product:{
     type:String,
  },
  totalCost:{
     type:String, 
  },
  status:{
     type:String,
     default:"processing"
  }

  
  
   


});

const order = mongoose.model("orders", productSchema);
module.exports = order;