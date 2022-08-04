const { Socket } = require("socket.io")

let data = []
let id = 0

const getAll = () => {
	return data
}

const addProd = (title, price, thumbnail) => {
	const productoNuevo = { id: ++id, title, price, thumbnail }
	data.push(productoNuevo)
	// socket.emit("actualizar", producto)
	return productoNuevo
}

const deletAll = () => {
	return data = []
}

// const llamarTabla = (lista) => {
// 	return fetch('/partials/tabla.ejs')
// 		.then((resp) => resp.text())
// 		.then((plantilla) => {
// 			const template = ejs.compile(plantilla)
// 			const html = template({ lista })
// 			return html
// 		})
//  }

// module.exports = { getAll, addProd, deletAll, llamarTabla, data }
module.exports = { getAll, addProd, deletAll, data }

const prods = [
	{
		"title": "SSD ADATA SU630 ULTIMATE 240GB",
		"price": 550,
		"thumbnail": "../img/6.png"
	},
	{
		"title": "DISCO DURO WD BLUE 2TB 3.5 SATA 3",
		"price": 950,
		"thumbnail": "../img/6.png"
	},
	{
		"title": "MOUSE LOGITECH G305 LIGHTSPEED",
		"price": 680,
		"thumbnail": "../img/3.png"
	},
	{
		"title": "MONITOR LED 27 DELL S2719DGF QHD 2K 155HZ 1MS",
		"price": 10500,
		"thumbnail": "../img/2.png"
	}   
]
for (let i = 0; i < prods.length; i++) {
	module.exports.addProd(prods[i].title, prods[i].price, prods[i].thumbnail)
}