const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()

prodsRouter.get('/', (req, res) => {
    const listaProductos = Producto.mostrarTodos()
    res.send(listaProductos)
})

prodsRouter.get('/:id', (req, res) => {
    const { id } = req.params
    const producto = Producto.buscar(parseInt(id))
    if (producto === undefined) {
        res.status(404).json({error : 'producto no encontrado' })
    }
    res.json(producto)
})

prodsRouter.post('/', (req, res) => {
    const { title, price, thumbnail } = req.body
    const nProducto = Producto.agregar(title, price, thumbnail)
    res.status(201).json(nProducto)
})

prodsRouter.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, price, thumbnail } = req.body
    const updateProd = Producto.actualizar(parseInt(id), title, price, thumbnail )
    res.status(202).json(updateProd)
})

prodsRouter.delete('/:id', (req, res) => {
    const { id } = req.params
    const producto = Producto.borrar(parseInt(id))
    res.status(301).json(producto)
})

module.exports = prodsRouter