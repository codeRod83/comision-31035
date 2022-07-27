const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()

let pagina = ''
prodsRouter.get('/', (req, res) => {
    res.render('index.pug')
})

prodsRouter.get('/api/productos', (req, res) => {
    const lista = Producto.mostrarTodos()
    pagina = 'tabla'
    res.render('index.pug', { lista, pagina })
})

prodsRouter.post('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    Producto.agregar(title, price, thumbnail)
    res.status(201).redirect('/')
})

module.exports = prodsRouter