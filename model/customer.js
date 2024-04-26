const mongoose=require('mongoose')
const customerSchema=mongoose.Schema({

    name:{
         type:String,
    },
    email:{
        type:String

    },
    mobile:{
        type:String
    },
    billing_address:{
        type:Object,
        address:{
              type:String
           },
           country:{
             type:String
           },
           state:{
             type:String
           },
           city:{
             type:String
           },
           zipcode:{
             type:String
           }

        
    }

})

const customer=mongoose.model('customer',customerSchema)
module.exports=customer