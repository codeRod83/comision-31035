const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 8080

class Contenedor {
    constructor(filename) {
        this.filename = filename + '.txt'
    }
    async getAll() {
        try {
            const content = await fs.promises.readFile(this.filename, 'utf-8')
            const data = JSON.parse(content)
            return JSON.stringify(data)

        } catch (error) {
            console.log(error);
        }
    }
    async getRandom() {
        const num = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        try {
            const content = await fs.promises.readFile(this.filename, 'utf-8')
            const data = JSON.parse(content)
            const rNum = num(1, data.length)
            const prod = (data.find(el => el.id === rNum))
            return JSON.stringify(prod)
        }
        catch (error) {
            console.log(error)
            }
        }
}

const productos = new Contenedor('productos')

app.get('/', (req, res) => res.send( `<a href="/productos"> Productos</a> <br> <br> <a href="/productoRandom"> Producto Random</a>`))

app.get('/productos', async (_req, res) => {
    res.send(`${await productos.getAll()} <br> <br> <a href="/">Inicio</a>`)
})

app.get('/productoRandom', async (_req, res) => {
    res.send(`${await productos.getRandom()} <br> <br> <a href="/">Inicio</a>`)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))