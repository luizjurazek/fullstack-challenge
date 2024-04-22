const mysql = require('mysql2')
require('dotenv').config()

const HOST = process.env.DB_HOST
const USER = process.env.DB_USER
const DB = process.env.DB_DATABASE

// create a new mysql connection 
const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: '',
    database: DB
})


module.exports = connection