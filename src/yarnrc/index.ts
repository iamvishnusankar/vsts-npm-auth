import { INpmRcConfig } from '../inteface'

export const getYarnrcContent = (config: INpmRcConfig): string => {
  return `registry "${config.registry}"\nalways-auth ${config.alwaysAuth}\n"_username" ${config.username}\n"_password" ${config.password}`
}
