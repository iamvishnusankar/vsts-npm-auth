import { exec } from '@actions/exec'
import { INpmRcConfig } from '../inteface'

export const setGlobalConfig = async (config: INpmRcConfig): Promise<void> => {
  await exec('npm', ['config', 'set', 'registry', `"${config.registry}"`])
  await exec('npm', ['config', 'set', 'always-auth', `"${config.alwaysAuth}"`])
}

export const clearGlobalConfig = async (): Promise<void> => {
  await exec('npm', ['config', 'always-auth', 'registry'])
  await exec('npm', ['config', 'delete', 'registry'])
}
