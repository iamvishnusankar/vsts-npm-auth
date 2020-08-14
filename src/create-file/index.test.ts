import { createFile } from './index'
import fs from 'fs'
import { exec } from 'child_process'
import util from 'util'

beforeEach(async () => {
  await util.promisify(exec)('rm -rf .npmrc')
})

describe('vsts-npm-auth', () => {
  test('createFile', async () => {
    await createFile('.npmrc', 'content')
    expect(fs.existsSync(`.npmrc`)).toBeTruthy()
  })
})
