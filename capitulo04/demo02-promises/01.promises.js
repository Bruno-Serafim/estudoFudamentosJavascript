const readline = require('readline')

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}