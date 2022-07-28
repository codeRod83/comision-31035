const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()

prodsRouter.get('/', (req, res) => {
	try {
		let pagina = ''
		res.render('index.pug')
	} catch (error) {
		res.status(500).json({ error: error })
    }
})

prodsRouter.get('/api/productos', (req, res) => {
	try {
		const lista = Producto.mostrarTodos()
    pagina = 'tabla'
    res.render('index.pug', { lista, pagina })
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

prodsRouter.post('/api/productos', (req, res) => {
	try {
    const { title, price, thumbnail } = req.body
    Producto.agregar(title, price, thumbnail)
    res.status(201).redirect('/')
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

module.exports = prodsRouter