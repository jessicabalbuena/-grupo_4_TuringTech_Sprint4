const express = require('express'),
      router = express.Router(),
      multer = require("multer"),
      {body} = require("express-validator");
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.index);
router.get('/index', productController.index);
router.get('/productCart', productController.productCart);
router.get('/productDetail', productController.productDetail);
router.get('/productos', productController.productos);
router.get('/productEdit', productController.productEdit);
router.get('/productAdd', productController.productAdd);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
//router.get('/detalle/:menuId', productController.readDetail);

module.exports = router;
