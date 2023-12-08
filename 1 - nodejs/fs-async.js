const { readFile, writeFile } = require('fs')

console.log('let begins')

readFile('./content/a.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/b.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result.txt',
            `here is result : ${first},${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }         
                console.log("done")
            }
        )
    })
})

console.log("end")