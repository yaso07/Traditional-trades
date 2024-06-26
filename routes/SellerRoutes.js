const controller=require('../controller/SellerController')
const express=require('express')
const router=express.Router();
router.route('/').post(controller.addSeller).get(controller.getSeller)
router.route('/:id').get(controller.getSellerById).patch(controller.updateSeller)
router.route('/verify').post(controller.getVerfiySeller)

router.route("/currentUser/:id").get(controller.getCurrentUserDetails).patch(controller.SetCurrentUser);
module.exports=router