const { write } = require('fs')     
const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./a.txt', 'utf-8')
        const second = await readFile('./b.txt', 'utf-8')
        await writeFile(
            './combine.txt',
            `this is : ${first} ${second}`,
            {flag:'a'}
            
        )
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()