const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()

// let pagina = ''
prodsRouter.get('/', (req, res) => {
    let pagina = ''
    res.render('./index.ejs', {pagina})
})

prodsRouter.get('/api/productos', (req, res) => {
    const lista = Producto.mostrarTodos()
    pagina = 'tabla'
    res.render('./index.ejs', { lista, pagina })
})

prodsRouter.post('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    Producto.agregar(title, price, thumbnail)
    res.status(201).redirect('/')
})

module.exports = prodsRouter