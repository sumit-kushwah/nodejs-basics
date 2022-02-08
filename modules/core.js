// http, url, querystring, path - core modules

const http = require('http')

http.createServer((request, response) => {
    if (request.url == '/name') {
        response.writeHead(200, {'Content-type': 'text/html'})
        response.end('My name is sumit')
    }
    response.writeHead(200, {'Content-type': 'text/html'})
    response.end('hello world')
}).listen(3001)

// axios, nodemon, express - third party modules