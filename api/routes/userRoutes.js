const express= require("express")
const userRouter= express.Router()
const User= require("../models/User")
const passport= require("passport")


//Registro de un User
userRouter.post("/register", (req, res) => {
   User.create(req.body)
    .then((user) => {
      res.status(201).send(user)
    })
    .catch(err => console.log(err))
})

//Log in
userRouter.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user)
})

//Log Out
userRouter.post("/logout", function(req, res, next) {
    req.logout(function(err) {
        if(err) { return next(err) }
        res.sendStatus(200)
    })
})


//Actualiza los datos del User
userRouter.put("/:id", (req, res) => {
    const id= req.params.id
    const data= req.body
   User.findByPk(id)
    .then((user) => {
      user.update(data)
    })
    .then((newData) => {
      res.status(200).send(newData)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})


//Promueve o degrada a Admin
userRouter.put("/:id/promote", (req, res) => {
  const { admin } = req.body
})

module.exports = userRouter