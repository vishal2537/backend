const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request send')
    console.log('hello world')
})

server.listen(5000, () => {
    console.log('server listening on port : 5000')
})