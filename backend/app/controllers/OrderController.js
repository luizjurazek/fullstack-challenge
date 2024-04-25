const OrderModel = require('../models/OrderModel')
const { formatOrders } = require('../utils/formatOrders')

const OrderController = {
    getOrders: async (req, res) => {
        const orders = await OrderModel.getOrders()
        console.log(orders)
        return res.status(200).json({orders})
    },
    getOrderById: async (req, res) => {
        const id = req.params.id
        const order = await OrderModel.getOrderById(id)
        const formatedOrders = formatOrders(order)
        return res.status(200).json(formatedOrders)
    }
}

module.exports = OrderController