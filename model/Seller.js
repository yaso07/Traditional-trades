const mongoose = require("mongoose");
const SellerSchema = mongoose.Schema({
  name:{
    type: String,
  },
  email: {
    type: String,
  },
  password:{
     type:String
  },
  mobile: {
    type: String,
  },
  state: {
    type: String,
  },
  address:{
    type:String
  },
  city: {
    type: String,
  },
  image:{
    type:String
  }
});

const seller=mongoose.model('seller',SellerSchema)

module.exports=seller
