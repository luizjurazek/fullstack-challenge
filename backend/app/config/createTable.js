const connection = require('./connection')

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected!')
    let query = 'CREATE TABLE Pizza (ID INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price DECIMAL(10, 2), ingredients TEXT)'

    connection.query(query, (err, results) =>{
        if(err) throw err
        console.log("Table created")
    })
})