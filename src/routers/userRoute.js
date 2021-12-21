const express = require('express'),
      router = express.Router(),
      multer = require("multer"),
      {body} = require("express-validator");
// Solicito todas las funcionalidades del userController
const userController = require('../controllers/userController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/ayuda', userController.ayuda);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/restablecer', userController.restablecer);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
//router.get('/detalle/:menuId', productController.readDetail);

module.exports = router;
