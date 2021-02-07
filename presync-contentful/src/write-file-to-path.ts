import * as fs from 'fs'
import * as path from 'path'

export function writeFileToPath(arg: {
  path: string
  fileName: string
  content: string
}) {
  const absolutPath = path.resolve(arg.path)
  return fs.promises
    .mkdir(absolutPath, { recursive: true })
    .then(() => fs.writeFileSync(`${absolutPath}/${arg.fileName}`, arg.content))
}
