import * as core from '@actions/core'
import { getNpmrcContent } from './npmrc'
import { INpmRcConfig } from './inteface'
import { createFile } from './create-file'
import { getYarnrcContent } from './yarnrc'

const run = async () => {
  try {
    const registry = core.getInput('registry')
    const alwaysAuth = core.getInput('always-auth')
    const authToken = core.getInput('npm-token')

    if (!registry) {
      throw new Error('Registry url required: set `registry` variable')
    } else if (!authToken) {
      throw new Error('Token required: set `npm-token` variable')
    }

    const config: INpmRcConfig = {
      registry,
      alwaysAuth,
      authToken,
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
