const mongoose = require("mongoose");

const RequiredDetailsSchema = mongoose.Schema({
  sellerId: {
    type: String,
  },
  currentUser:{
      type:String
  },
  payment:{
     type:Boolean,
     default:false
  }
});

const RequiredDetails = mongoose.model("requiredDetails",RequiredDetailsSchema);
module.exports =RequiredDetails;
