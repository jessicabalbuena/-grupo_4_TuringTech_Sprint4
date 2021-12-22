const jsonDB = require("../model/jsonDatabase")
const modelController = jsonDB("users")

const userController = {
    ayuda: (req,res) => {
        res.render("users/ayuda")
    },
    login: (req,res) => {
        res.render("users/login")
    },
    registerGet: (req,res) => {
        res.render("users/register")
    },
    registerPost:(req,res) => {
        let image;

        if(req.file){
            image = req.file.filename
        }else{
            image = "default-image.png"
        }

        let user = {
            userNombre: req.body.registroNombre,
            userApellido: req.body.registroApellido,
            userUsuario:req.body.registroUsuario,
            userEmail: req.body.registroEmail,
            userLock:req.body.registroLock,
            userLockRepeat:req.body.registroLockRepeat,
            userAvatar:image,
            userRol:req.body.registroRol
        }

        const registerUser = modelController.create(user)

        res.redirect("/")
    },
    restablecer: (req,res) => {
        res.render("users/restablecer")
    }
}

module.exports = userController;