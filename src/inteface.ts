export interface INpmRcConfig {
  registry: string
  alwaysAuth: string | boolean
  username: string
  token: string
}

export interface IKey {
  key: string
  value: string
}

export interface IVSTSRegistryUrls {
  registryKeys: IKey[]
  npmKeys: IKey[]
}
