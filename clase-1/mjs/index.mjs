// .js --> por defecto utiliza CommonJS
// .mjs --> utiliza ES Modules
// .cjs --> utiliza CommonJS

import { mult, res, sum } from "./sum.mjs";

console.log(sum(2, 1))
console.log(res(2, 1))
console.log(mult(2, 1))