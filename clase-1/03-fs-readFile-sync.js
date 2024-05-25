const fs = require('node:fs')

// const { promisify } = require('util')
// const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo...')
const text1 = fs.readFile('./archivo.txt','utf-8')
console.log('1er texto ---->',text1)

console.log('------------------><------------------')

console.log('Leyendo el segundo archivo...')
const text2 = fs.readFile('./archivo_02.txt','utf-8')
console.log('2do texto ---->',text2)