import { getBaseUrl, toVSTSRegistryUrls } from './index'

const url =
  'https://pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/registry/'

describe('vsts-npm-auth', () => {
  test('getBaseUrl', () => {
    expect(getBaseUrl(url)).toStrictEqual(
      '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/'
    )
  })

  test('toVSTSRegistryUrls', () => {
    expect(toVSTSRegistryUrls(url)).toStrictEqual({
      registry:
        '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/registry/:_authToken=${NPM_TOKEN}',
      npm:
        '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/:_authToken=${NPM_TOKEN}',
    })
  })
})
