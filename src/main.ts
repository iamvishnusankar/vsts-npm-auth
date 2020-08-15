import * as core from '@actions/core'
import { getNpmrcContent } from './npmrc'
import { INpmRcConfig } from './inteface'
import { createFile } from './file'
// import { getYarnrcContent } from './yarnrc'
import { setGlobalConfig } from './global'

const run = async () => {
  try {
    const registry = core.getInput('registry')
    const alwaysAuth = core.getInput('always-auth')
    const username = core.getInput('username')
    const token = core.getInput('token')

    if (!registry) {
      throw new Error('Registry url required: set `registry` variable')
    }

    const config: INpmRcConfig = {
      registry,
      alwaysAuth,
      username,
      token,
    }

    await setGlobalConfig(config)

    const npmrcContent = getNpmrcContent(config)
    //  const yarnrcContent = getYarnrcContent(config)

    await createFile('.npmrc', npmrcContent)
    // await createFile('.yarnrc', yarnrcContent)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
