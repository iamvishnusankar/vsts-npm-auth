import { exec } from '@actions/exec'
import fs from 'fs'

export const createFile = async (
  path: string,
  content: string
): Promise<void> => {
  await fs.promises.writeFile(path, content)
}

export const deleteFile = async (path: string): Promise<void> => {
  await exec(`rm -rf ${path}`)
}
