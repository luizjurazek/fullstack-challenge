const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController')

router.get('/orders', OrderController.getOrders)
router.get('/order/:id', OrderController.getOrderById)

module.exports = router