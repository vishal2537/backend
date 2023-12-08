const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/a.txt', 'utf8')
const second = readFileSync("./content/b.txt", "utf8");

console.log(first,second)

writeFileSync(
    './content/result.txt',
    `result : ${first} ${second}`,
    {flag: 'a'}
)

console.log("hello dosto")