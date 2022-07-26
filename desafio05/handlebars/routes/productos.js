const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()


prodsRouter.get('/', (req, res) => {
    res.render('main.hbs')
})

prodsRouter.get('/api/productos', (req, res) => {
    const lista = Producto.mostrarTodos()
    res.render('partials/tabla.hbs', { lista })
})

prodsRouter.post('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    Producto.agregar(title, price, thumbnail)
    res.status(201).redirect('/')
})

module.exports = prodsRouter