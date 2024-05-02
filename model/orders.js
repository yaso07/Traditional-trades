const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  
    customerId:{
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