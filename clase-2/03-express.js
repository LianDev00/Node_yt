const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 1234

const ditto = require('./pokemon/ditto.json')

app.disable('x-powered-by')

app.use((req, res, next) => {
  // console.log('Mi primer middleware')
  // Trackear la request a la BD
  // Revisar si el usuario tiene cookies

  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // Aqui solo llegan request 'POST' y de header content-type 'application/json'
  let body = ''

  // Escuchar el evento 'data'
  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // mutar la request y meter la informacion en el req.body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  // res.send('<h1>Mi página</h1>')
  // res.json({ message: 'Hola mundo' })
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
