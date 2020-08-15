import { INpmRcConfig } from '../inteface'
import { toVSTSRegistryUrls } from '../util'

export const getNpmrcContent = (config: INpmRcConfig): string => {
  const vstsUrls = toVSTSRegistryUrls(config)

  let content = ''
  for (const k of vstsUrls.registryKeys) {
    content += `${k.key}=${k.value}\n`
  }

  for (const k of vstsUrls.npmKeys) {
    content += `${k.key}=${k.value}\n`
  }

  return content.trim()
}
