const express = require("express")
const app = express()

app.use((err,req,res,next) => {
        res.status(err.status || 500).render("not-found")
})