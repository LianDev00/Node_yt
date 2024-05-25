import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2]) => {
  console.log('1er texto ---->', text1)
  console.log('2do texto ---->', text2)
})
