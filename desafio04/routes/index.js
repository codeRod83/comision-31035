const express = require('express')
const router = express.Router()
const prodsRouter = require('./productos')


router.use('/productos', prodsRouter)

module.exports = router