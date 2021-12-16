const userController = {
    ayuda: (req,res) => {
        res.render("users/ayuda")
    },
    login: (req,res) => {
        res.render("users/login")
    },
    register: (req,res) => {
        res.render("users/register")
    },
    restablecer: (req,res) => {
        res.render("users/restablecer")
    }
}

module.exports = userController;