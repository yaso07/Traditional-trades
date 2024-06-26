const express=require('express')
const router=express.Router();
const controller=require('../controller/CustomerController')
router.route('/').post(controller.addCustomer).get(controller.getCustomer)
router.route('/:id').get(controller.getCustomerById).patch(controller.updateCustomer)
module.exports=router