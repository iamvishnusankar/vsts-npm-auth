import { IVSTSRegistryUrls, INpmRcConfig, IKey } from '../inteface'

export const cleanUrl = (url: string): string => {
  return `${url}/`.replace(/([^:])(\/\/+)/g, '$1/')
}

export const getBaseUrl = (url: string): string => {
  return cleanUrl(url).replace('/npm/registry', '/npm').slice(6)
}

export const toBase64 = (text: string): string => {
  return Buffer.from(text.trim()).toString('base64')
}

export const toVSTSRegistryUrls = (config: INpmRcConfig): IVSTSRegistryUrls => {
  const baseUrl = getBaseUrl(config.registry)
  const base64Password = toBase64(config.token)

  const registryKeys: IKey[] = [
    {
      key: `${baseUrl}registry/:username`,
      value: config.username,
    },
    {
      key: `${baseUrl}registry/:_password`,
      value: base64Password,
    },
  ]

  const npmKeys: IKey[] = [
    {
      key: `${baseUrl}:username`,
      value: config.username,
    },
    {
      key: `${baseUrl}:_password`,
      value: base64Password,
    },
  ]

  return {
    registryKeys,
    npmKeys,
  }
}
