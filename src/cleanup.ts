import * as core from '@actions/core'
import { deleteFile } from './file'

const cleanup = async () => {
  try {
    await deleteFile('.npmrc')
    await deleteFile('.yarnrc')
  } catch (error) {
    core.setFailed(error.message)
  }
}

cleanup()
