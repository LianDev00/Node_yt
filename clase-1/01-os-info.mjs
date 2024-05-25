import os from 'node:os';

console.log("Informacion de SO");
console.log("------------------");
console.log("Nombre del SO:", os.platform());
console.log("Version del SO:", os.release());
console.log("Arquitectura:", os.arch());
console.log("Memoria libre:", os.freemem() / 1024 / 1024);
console.log("Memoria total:", os.totalmem() / 1024 / 1024);
console.log("CPUs:", os.cpus()[1]);
console.log("Uptime:", os.uptime() / 60 / 60 / 24);
