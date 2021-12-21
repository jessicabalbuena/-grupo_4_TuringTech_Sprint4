//Requires básicos
const express = require("express"),
      path = require("path"),
      app = express(),
      multer = require("multer"),
      {body} = require("express-validator"),
      methodOverride = require("method-override");

//Requires de rutas
const productRutas = require("./src/routers/productRoute"),
      usersRutas = require("./src/routers/userRoute");

//Carpeta estática de archivos públicos (imágenes,css, etc.)
app.use(express.static(path.resolve(__dirname, "./public")));

//Set up de EJS y su correspondiente carpeta
app.set("view engine", "ejs")
app.set('views', path.resolve(__dirname, './src/views'));

//Servidor ejecutandose
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor prendido");
})

//Uso de rutas requeridas
app.use("/", productRutas)
app.use("/", usersRutas)