const express = require('express')
const app = express()
const router = require('./routes')
const PORT = 8080

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)


const server = app.listen(PORT, () => console.log(`Server escuchando en el puerto ${PORT}`))
server.on('error', (error) => {
    console.log(`El server a tenido un error al querer conectar con el puerto ${PORT}`)
})