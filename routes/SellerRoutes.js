const controller=require('../controller/SellerController')
const express=require('express')
const router=express.Router();
router.route('/').get(controller.addSeller)

module.exports=router