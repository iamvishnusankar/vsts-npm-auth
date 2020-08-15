import { INpmRcConfig } from '../inteface'

export const getNpmrcContent = (config: INpmRcConfig): string => {
  return `registry=${config.registry}\nalways-auth=${config.alwaysAuth}\n_username=${config.username}\n_password=${config.password}`
}
