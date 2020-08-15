import { INpmRcConfig } from '../inteface'

export const getYarnrcContent = (config: INpmRcConfig): string => {
  return `registry "${config.registry}"\nalways-auth ${config.alwaysAuth}\nusername ${config.username}\npassword ${config.password}`
}
