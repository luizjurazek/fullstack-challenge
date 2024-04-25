const PizzaModel = require('../models/PizzaModel')

const PizzaController = {
    getPizza: async (req, res) => {
        const pizzas = await PizzaModel.getPizzas()
        console.log(pizzas)
        return res.status(200).json(pizzas)
    }
}

module.exports = PizzaController