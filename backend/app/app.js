const express = require('express')
const app = express()
const PORT = 3000

const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const routes = require('./routes/router.js')
const connection = require('./config/connection.js')

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/api/', routes)

// connect to the MySQL database
connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})