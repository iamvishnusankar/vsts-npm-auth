import * as core from '@actions/core'
import { getNpmrcContent } from './npmrc'
import { INpmRcConfig } from './inteface'
import { createFile } from './file'
import { getYarnrcContent } from './yarnrc'

const run = async () => {
  try {
    const registry = core.getInput('registry')
    const alwaysAuth = core.getInput('always-auth')
    const username = core.getInput('username')
    const password = core.getInput('password')

    if (!registry) {
      throw new Error('Registry url required: set `registry` variable')
    } else if (!username) {
      throw new Error('Username required: set `npm-token` variable')
    } else if (!password) {
      throw new Error('Base64 Encoded password required')
    }

    const config: INpmRcConfig = {
      registry,
      alwaysAuth,
      username,
      password,
    }

    const npmrcContent = getNpmrcContent(config)
    const yarnrcContent = getYarnrcContent(config)

    await createFile('.npmrc', npmrcContent)
    await createFile('.yarnrc', yarnrcContent)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
