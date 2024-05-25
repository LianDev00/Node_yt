const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('hola mundo')
})

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
