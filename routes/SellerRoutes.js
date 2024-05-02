const controller=require('../controller/SellerController')
const express=require('express')
const router=express.Router();
router.route('/').post(controller.addSeller).get(controller.getSeller)
router.route('/:id').get(controller.getSellerById)

module.exports=router