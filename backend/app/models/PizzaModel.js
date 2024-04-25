const connection = require('../config/connection')

let Pizza = {
    getPizzas: () =>{
        const query = 'SELECT * FROM pizza'
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if(err){
                    reject(err)
                } else {
                    resolve(result)
                }
            }) 
        })
    }
}

module.exports = Pizza