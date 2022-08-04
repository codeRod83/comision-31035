const express = require('express')
const app = express()
const { Server: HttpServer } = require('http')
const httpServer = new HttpServer(app)
const { Server: IOServer } = require('socket.io')
const io = new IOServer(httpServer)
const router = require('./public/routes')
const PORT = 8080


app.set('view engine', 'ejs')
app.set('views', './public/views/pages')
app.use(express.static(__dirname + '/public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('', router)

const mensajes = [
{email: 'robert@gmail.com', mensaje: 'Hola como va todo'}
]

io.on('connection', (socket) => {
   console.log('Nuevo cliente conectado')
   socket.emit("messages", mensajes)

   socket.on("new-message", (data) => {
      mensajes.push(data)
      io.sockets.emit('messages', mensajes)
   })
})

const server = httpServer.listen(PORT, () => console.log(`Server en puerto ${PORT}`))
server.on('error', (error) => console.log(`Error al querer conectar con ${PORT}`))

module.exports = { io }