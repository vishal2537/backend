const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('welcome')
// })

// using event emiter api
const server = http.createServer()
// emits request emit
// subscribe to it / listen for it / respond it 
server.on('request', (req, res) => {
    res.end('welcome')
})

server.listen(5000, () => {
    console.log('server listening port : 5000')
})