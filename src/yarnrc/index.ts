import { INpmRcConfig } from '../inteface'

export const getYarnrcContent = (config: INpmRcConfig): string => {
  return `"registry" "${config.registry}"\n"always-auth" "${config.alwaysAuth}"\n"username" "${config.username}"\n"password" "${config.password}"`
}
