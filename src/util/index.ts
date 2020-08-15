import { IVSTSRegistryUrls } from '../inteface'

export const getBaseUrl = (url: string): string => {
  const cleanUrl = `${url}/`.replace(/([^:])(\/\/+)/g, '$1/')
  return cleanUrl.replace('/npm/registry', '/npm').slice(6)
}

export const toVSTSRegistryUrls = (url: string): IVSTSRegistryUrls => {
  const baseUrl = getBaseUrl(url)

  const registry = `${baseUrl}registry/:_authToken=\${NPM_TOKEN}`
  const npm = `${baseUrl}:_authToken=\${NPM_TOKEN}`

  return {
    registry,
    npm,
  }
}
