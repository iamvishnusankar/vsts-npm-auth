import { INpmRcConfig } from '../inteface'
import { toVSTSRegistryUrls } from '../util'

export const getNpmrcContent = (config: INpmRcConfig): string => {
  const vstsUrls = toVSTSRegistryUrls(config.registry)
  return `${vstsUrls.registry}\n${vstsUrls.npm}`
}
