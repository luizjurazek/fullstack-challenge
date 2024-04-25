const express = require('express')
const OrderRouter = express.Router()
const OrderController = require('../controllers/OrderController')

OrderRouter.get('/orders', OrderController.getOrders)
OrderRouter.get('/order/:id', OrderController.getOrderById)

module.exports = OrderRouter