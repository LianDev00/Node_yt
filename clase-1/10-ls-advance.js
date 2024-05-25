const fs = require('node:fs/promises')
const path = require('node:path')

const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (directory) {
  let files

  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`❌| No se pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath) // --> informacion del archivo
    } catch {
      console.error(pc.red(`❌| No se pudo leer el directorio ${folder}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(25))} ${pc.yellow(
      fileSize.padStart(10)
    )} ${pc.cyan(fileModified)}`
  })

  const fileInfo = await Promise.all(filePromises)

  fileInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
