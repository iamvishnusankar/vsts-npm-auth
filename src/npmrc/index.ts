import { INpmRcConfig } from '../inteface'

export const getNpmrcContent = (config: INpmRcConfig): string => {
  return `registry=${config.registry}\nalways-auth=${config.alwaysAuth}\nusername=${config.username}\npassword=${config.password}`
}
