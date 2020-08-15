import * as core from '@actions/core'
import { deleteFile } from './file'
import { clearGlobalConfig } from './global'

const cleanup = async () => {
  try {
    await clearGlobalConfig()
    await deleteFile('.npmrc')
    //  await deleteFile('.yarnrc')
  } catch (error) {
    core.setFailed(error.message)
  }
}

cleanup()
