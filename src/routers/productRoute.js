const express = require('express'),
      router = express.Router(),
      multer = require("multer"),
      {body} = require("express-validator");
// Solicito todas las funcionalidades del productController
const productController = require('../controllers/productController');

//Require de middlewares de ruta
const uploadProducts = require("../middlewares/multerProductsMiddleware")

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/', productController.index);

//Index
router.get('/index', productController.index);

//Creación de nuevo producto
router.get('/productAdd', productController.productAddGet);
router.post('/productAdd',uploadProducts.single("productImage1") ,productController.productAddPost);

//Detalle de producto
router.get('/productDetail/:id', productController.productDetail);

//Carrito
router.get('/productCart', productController.productCart);

//Catálogo de productos
router.get('/products', productController.productos);

//Edición de producto
router.get('/productEdit/edit/:id', productController.productEdit);
router.put("/productEdit/edit/:id", productController.productPut)

//Borrado de producto
router.delete("/productEdit/:id", productController.productDelete)

/* Con readDetail - LEE PRODUCTO SEGUN ID */
//router.get('/detalle/:menuId', productController.readDetail);

module.exports = router;
