import { INpmRcConfig } from '../inteface'

export const getYarnrcContent = (config: INpmRcConfig): string => {
  return `registry "${config.registry}"\nusername ${config.username}\npassword ${config.password}\nalways-auth ${config.alwaysAuth}`
}
