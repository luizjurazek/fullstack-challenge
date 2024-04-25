const connection = require('../config/connection')

let Order = {
    getOrders: () => {
        const query = "SELECT o.id AS order_id, o.dateTime AS order_date, pi.id AS item_id, p.name AS pizza_name, p.price AS pizza_price, pi.quantity AS quantity FROM pizzaria.order o INNER JOIN OrderItem pi ON o.id = pi.id_order INNER JOIN Pizza p ON pi.id_pizza = p.id";
        return new Promise((resolve, reject) =>{
            connection.query(query, (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results)
                }
            })
        })
    },
    getOrderById: (id) => {
        const query = "SELECT o.id AS order_id, o.dateTime AS order_date, pi.id AS item_id, p.name AS pizza_name, p.price AS pizza_price, pi.quantity AS quantity FROM pizzaria.`Order` o INNER JOIN OrderItem pi ON o.id = pi.id_order INNER JOIN Pizza p ON pi.id_pizza = p.id WHERE o.id = ?";
        return new Promise((resolve, reject) => {
            connection.query(query, [id], (err, results) => {
                if(err){
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }
}

module.exports = Order