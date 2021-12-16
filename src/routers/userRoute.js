const express = require('express');
const router = express.Router();
// Solicito todas las funcionalidades del productController
const userController = require('../controllers/userController');

/* Con readAll - LISTADO DE PRODUCTOS, RENDERIZA CATALOGO DE PRODUCTOS*/
router.get('/ayuda', userController.ayuda);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/restablecer', userController.restablecer);

/* Con readDetail - LEE PRODUCTO SEGUN ID */
//router.get('/detalle/:menuId', productController.readDetail);

module.exports = router;
