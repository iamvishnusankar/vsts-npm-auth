import { INpmRcConfig } from '../inteface'

export const getNpmrcContent = (config: INpmRcConfig): string => {
  return `registry=${config.registry}\n_authToken=${config.authToken}\nalways-auth=${config.alwaysAuth}`
}
