const express = require('express')
const router = express.Router()
const prodsRouter = require('./productos')


router.use('', prodsRouter)

module.exports = router