const express = require('express')
const app = express()

let frase = 'Hola mundo como estan'

app.get('/api/frase', (req, res) => {
    console.log(frase)
    res.json({ frase: frase })
})

app.get('/api/letras/:num', (req, res) => {
    const num = req.params.num
    if (isNaN(num)) res.json({ error: 'El parametro no es un numero' })
    if (num < 1 || num > frase.length) res.json({ error: 'El parametro esta fuera de rango' })
    res.send(frase[num - 1])
})

app.get('/api/palabras/:num', (req, res) => {
    console.log(req);
    const num = req.params.num
    const palabra = frase.split(' ')
    if (isNaN(num)) res.json({ error: 'El parametro no es un numero' })
    if (num < 1 || num > palabra.length) res.json({ error: 'El parametro esta fuera de rango' })
    res.send(palabra[num - 1])
})

app.listen(8080, () => {
    console.log('Server en puerto 8080');
})