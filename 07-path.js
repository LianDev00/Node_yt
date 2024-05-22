const path = require("node:path");

// unir rutas con path.join

// unix --> "/"
// windows --> "\"

// Para saber como es la separacion segun tu SO:
// console.log(path.sep)

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename('/tmp/lian-secret-files/password.txt')
console.log(base)

const base2 = path.basename('/tmp/lian-secret-files/password.txt','.txt')
console.log(base2)

const extension = path.extname('image.jpg')
console.log(extension)

