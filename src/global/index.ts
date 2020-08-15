import { exec } from '@actions/exec'
import { INpmRcConfig } from '../inteface'
import { cleanUrl } from '../util'

export const setGlobalConfig = async (config: INpmRcConfig): Promise<void> => {
  await exec('npm', [
    'config',
    'set',
    'registry',
    `"${cleanUrl(config.registry)}"`,
  ])
  await exec('npm', ['config', 'set', 'always-auth', `"${config.alwaysAuth}"`])
}

export const clearGlobalConfig = async (): Promise<void> => {
  await exec('npm', ['config', 'always-auth', 'registry'])
  await exec('npm', ['config', 'delete', 'registry'])
}
