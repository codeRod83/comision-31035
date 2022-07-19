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
            const data = await JSON.parse(content)
            return JSON.stringify(data)
        } catch (error) {
            console.log(error);
        }
    }
}

const productos = new Contenedor('productos')

app.get('/productos', async (req, res) => {
    res.json(`${await productos.getAll()}`)
})

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})
server.on('error', (error) => console.log(`Error en servidor ${error}`))