const express = require('express')
const PizzaRouter = express.Router()
const PizzaController = require('../controllers/PizzaController')

PizzaRouter.get('/pizzas', PizzaController.getPizza)

module.exports = PizzaRouter