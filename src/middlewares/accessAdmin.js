const admins = ["Greta", "Ada", "Tim", "Vim"]

module.exports = (req,res,next) => {
    if(admins.includes(req.query.admin)){
        next()
    }
    res.send("No tienes los privilegios para ingresar")
}