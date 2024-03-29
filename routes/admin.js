const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/edit-product/:productId
router.get('/edit-product/:productId', adminController.getEditProduct);

// edit post route
router.post('/edit-product', adminController.postEditProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// delete product
router.post('/delete-product', adminController.deleteProduct);


module.exports = router;
