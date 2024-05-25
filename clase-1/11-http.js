const http = require('node:http')
const { findAvailablePort } = require('./12-puerto-libre')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('hola mundo')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// server.listen(0, () => {
//   console.log(
//     `server listening on port http://localhost:${server.address().port}`
//   )
// })
