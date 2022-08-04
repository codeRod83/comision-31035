const express = require('express')
const Producto = require('../controllers/producto.controllers')
const prodsRouter = express.Router()
const socket = io()

function render(data) {
	const html = data.map((el, index) => {
		return  `<div>
						<strong>${el.email}</strong>
						<em>${el.mensaje}</em>
					</div>`
	})
		.join(" ")
	document.getElementById("mensajes").innerHTML = html
}

socket.on("messages", function (data) {
	render(data)
})

function addMessage(e) {
	const mensaje = {
		email: document.getElementById('usuario').value,
		mensaje: document.getElementById('texto').value
	}
	socket.emit("new-message", mensaje)
	return false
}

prodsRouter.get('/', (req, res) => {
	try {
		let pagina = ''
		res.render("index.ejs", { pagina })
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

prodsRouter.get('/api/productos', (req, res) => {
	try {
		const lista = Producto.mostrarTodos()
		pagina = 'tabla'
		res.render('./index.ejs', { lista, pagina })
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

prodsRouter.get('/api/vaciar', (req, res) => {
	try {
		Producto.borrarTodo()
		res.status(202).redirect('/api/productos')
	} catch (error) {
		res.status(500).json({ error: error })
	}
})

module.exports = prodsRouter