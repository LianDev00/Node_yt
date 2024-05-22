// import { readFile } from 'node:fs/promises'

const { readFile } = require('node:fs/promises');

// IIFE - Inmediatly Invoked Function Expression
(
  async () => {
    
  console.log('Leyendo el primer archivo...')
  const text1 = await readFile('./archivo.txt', 'utf-8')
  console.log('1er texto ---->', text1)

  console.log('----------------------------------------')

  console.log('Leyendo el segundo archivo...')
  const text2 = await readFile('./archivo2.txt', 'utf-8')
  console.log('2do texto ---->', text2)
  }
)()
