import { createFile, deleteFile } from './index'
import fs from 'fs'

beforeAll(async () => {
  await deleteFile('.test-npmrc')
})

afterAll(async () => {
  await deleteFile('.test-npmrc')
})

describe('vsts-npm-auth', () => {
  test('createFile', async () => {
    await createFile('.test-npmrc', 'content')
    expect(fs.existsSync(`.test-npmrc`)).toBeTruthy()
  })

  test('deleteFile', async () => {
    await createFile('hello.txt', 'content')
    expect(fs.existsSync(`hello.txt`)).toBeTruthy()

    await deleteFile('hello.txt')
    expect(fs.existsSync(`hello.txt`)).toBeFalsy()
  })
})
