import { INpmRcConfig } from '../inteface'

export const getNpmrcContent = (config: INpmRcConfig): string => {
  return `registry=${config.registry}\nauthToken=${config.authToken}\nalways-auth=${config.alwaysAuth}`
}
