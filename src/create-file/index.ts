import fs from 'fs'

export const createFile = async (
  path: string,
  content: string
): Promise<void> => {
  await fs.promises.writeFile(path, content)
}
