const express = require('express');
const router = express.Router();

const productosController = require ('../controllers/productosController')

router.get ('/cart', productosController.cart);

router.get ('/chargeproduct', productosController.createproduct);

router.get ('/details', productosController.details);

router.get ('/editproduct', productosController.editproduct);

router.get ('/productslists', productosController.productslists);



module.exports = router;
