const os = require('os')

//  information about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`the system uptume is ${os.uptime()} seconds`)

const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentos)