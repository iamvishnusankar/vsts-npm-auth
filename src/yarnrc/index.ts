import { INpmRcConfig } from '../inteface'

export const getYarnrcContent = (config: INpmRcConfig): string => {
  return `registry "${config.registry}"`
}
