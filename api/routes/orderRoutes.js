const express= require("express")
const orderRouter= express.Router()

const models = require('../models')

//EN PROCESO, NINGUNA RUTA TERMINADA

//Crear una orden
orderRouter.post("/add", (req, res) => {
  models.Order.create(req.body)
    .then((user) => {
      res.status(201).send(user)
    })
    .catch(err => console.log(err))
})

//todas las ordenes de un usuario
orderRouter.get("/all", (req, res) => {
  models.Order.findAll({ include: { model: models.Order_Item } })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})


// borrar la orden



//////////////////////
// RUTAS ORDER-ITEM //
//////////////////////

//Crea un Order Item
orderRouter.post("/items", (req, res) => {
  models.Order_Item.create(req.body)
    .then((user) => {
      res.status(201).send(user)
    })
    .catch(err => console.log(err))
})

//Devuelve todos los Order Item
orderRouter.get("/getitem", (req, res) => {
  models.Order_Item.findAll({ include: { model: models.Product } })
    .then(data => res.send(data))
    .catch(err => console.log(err))
})

module.exports = orderRouter
