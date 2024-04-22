const express = require('express')
const router = express.Router()

router.get('/teste', (req, res) => {
    // #swagger.tags = ['Teste']
    // #swagger.description = 'Teste.'
    console.log("Teste route")
})

module.exports = router