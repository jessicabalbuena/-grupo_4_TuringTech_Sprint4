const express = require("express"),
      path = require("path"),
      app = express(),
      productRutas = require("./src/routers/productRoute"),
      usersRutas = require("./src/routers/userRoute");

app.use(express.static(path.resolve(__dirname, "./public")));

app.set("view engine", "ejs")

app.set('views', path.resolve(__dirname, './src/views'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor de maquetado corriendo");
})

app.use("/", productRutas)

app.use("/", usersRutas)