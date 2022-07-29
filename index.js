const http = require('http')
const port = 8000

const requestHandler = (request, response) => {
  response.end('node.js server up and running')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('problem with starting server', err)
  }

  console.log(`Listening on port ${port}`)
})

