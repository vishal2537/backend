const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/a.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/a.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/a.txt')

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => {
    console.log(err)
})