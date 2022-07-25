const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()


prodsRouter.get('/', (req, res) => {
    res.render('main.hbs')
})

prodsRouter.get('/api/productos', (req, res) => {
    const listaProductos = Producto.mostrarTodos()
    listaProductos.forEach(producto => {
        const prod = {
            title: listaProductos.title,
            price: listaProductos.price,
            thumbnail: listaProductos.thumbnail
        }
        // return prod
        res.render('productos.hbs', prod)
    });
    // res.send(listaProductos)
})

prodsRouter.get('/api/productos:id', (req, res) => {
    const { id } = req.params
    const producto = Producto.buscar(parseInt(id))
    if (producto === undefined) {
        res.status(404).json({error : 'producto no encontrado' })
    }
    res.json(producto)
})

prodsRouter.post('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    Producto.agregar(title, price, thumbnail)
    res.status(201).redirect('/')
})

prodsRouter.put('/api/productos:id', (req, res) => {
    const { id } = req.params
    const { title, price, thumbnail } = req.body
    const updateProd = Producto.actualizar(parseInt(id), title, price, thumbnail )
    res.status(202).json(updateProd)
})

prodsRouter.delete('/api/productos:id', (req, res) => {
    const { id } = req.params
    const producto = Producto.borrar(parseInt(id))
    if (producto === undefined) {
        res.status(404).json({error : 'producto no encontrado' })
    }
    res.status(301).json(producto)
})

module.exports = prodsRouter