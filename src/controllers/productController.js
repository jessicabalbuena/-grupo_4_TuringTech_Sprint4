// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');
const path = require("path")

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

const productController = {
    index: (req,res) => {
        res.render("products/index")
    },
    productCart: (req,res) => {
        res.render("products/productCart")
    },
    productDetail: (req,res) => {
        const productDetail = productModel.find(req.params.id)

		res.render("products/productDetail",{productDetail})
    },
    productos: (req,res) => {
        // leo todo el array de products en el controlador productController
        const products = productModel.all();
        // envio el array product a la vista para que la recorra EJS
        res.render('products/productos', { products });
    },
    productAddGet: (req,res) => {
        res.render("products/productAdd")
    },
    productAddPost: (req,res) => {
        let sliced = req.file.path.slice(req.file.path.indexOf("productos-assets"), req.file.path.length)

        const product = {
			productCategory: req.body.productCategory,
			productBrand: req.body.productBrand,
			productName: req.body.productName,
			productDescription: req.body.productDescription,
			productDescriptionLong: req.body.productDescriptionLong,
			productPrice: req.body.productPrice,
			productStock: req.body.productStock,
			productImage1: req.file.filename,
			productVisibility: req.body.productVisibility,
			productImportant: req.body.productImportant,
            ruta: sliced
		}

        console.log(product.ruta);

		const productCreate = productModel.create(product)

		res.redirect("/products")
    },
    productEdit: (req,res) => {
        const productEdit = productModel.find(req.params.id)

		res.render("products/productEdit",{productEdit})
    },
    productPut: (req,res) => {
        const product = productModel.find(req.params.id)

		let productUpdate = {
			id: req.params.id,
			productCategory: req.body.productCategory,
			productBrand: req.body.productBrand,
			productName: req.body.productName,
			productDescription: req.body.productDescription,
			productDescriptionLong: req.body.productDescriptionLong,
			productPrice: req.body.productPrice,
			productStock: req.body.productStock,
			productImage1: req.file.filename,
			productVisibility: req.body.productVisibility,
			productImportant: req.body.productImportant
		   }

		const productUpdated = productModel.update(productUpdate)	

		res.redirect("/products")
    },
    productDelete: (req,res) => {
        const productDestroy = productModel.delete(req.params.id)

        res.redirect("/products")
    }
}

module.exports = productController;

