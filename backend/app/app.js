const express = require('express')
const app = express()
const PORT = 3000

const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const routes = require('./routes/router.js')

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use('/api/', routes)



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})