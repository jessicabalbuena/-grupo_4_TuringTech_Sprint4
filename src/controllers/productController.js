// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');

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

		res.render("productDetail",{productDetail})
    },
    productos: (req,res) => {
        res.render("products/productos")
    },
    productAddGet: (req,res) => {
        res.render("products/productAdd")
    },
    productAddPost: (req,res) => {
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
			productImportant: req.body.productImportant
		}

		const productCreate = productModel.create(product)

		res.redirect("/products")
    },
    productEdit: (req,res) => {
        const productEdit = productModel.find(req.params.id)

		res.render("productEdit",{productEdit})
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
    }
}

module.exports = productController;

