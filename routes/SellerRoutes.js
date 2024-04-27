const controller=require('../controller/SellerController')
const express=require('express')
const router=express.Router();
router.route('/').post(controller.addSeller).get(controller.getSeller)

module.exports=router