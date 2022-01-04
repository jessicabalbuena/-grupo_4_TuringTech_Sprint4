const express = require('express'),
      router = express.Router(),
      multer = require("multer"),
      {body} = require("express-validator");
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.index);

//Index
router.get('/index', productController.index);

//Carrito
router.get('/productCart', productController.productCart);

//Detalle de producto
router.get('/productDetail', productController.productDetail);

//Catálogo de productos
router.get('/products', productController.productos);

//Edición de producto
router.get('/productEdit', productController.productEdit);

//Creación de nuevo producto
router.get('/productAdd', productController.productAdd);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
//router.get('/detalle/:menuId', productController.readDetail);

module.exports = router;
