const express = require('express')
const app = express()
const PORT = 3000

// Swagger files
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

// Routes
const OrderRouter = require('./routes/OrderRoutes.js')
const PizzaRouter = require('./routes/PizzaRoutes.js')

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/api/', OrderRouter)
app.use('/api/', PizzaRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})