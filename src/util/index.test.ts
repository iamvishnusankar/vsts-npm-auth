import { getBaseUrl, toVSTSRegistryUrls, toBase64 } from './index'
import { testConfig } from '../fixtures'

describe('vsts-npm-auth', () => {
  test('toBase64', () => {
    expect(toBase64('Hello World')).toStrictEqual('SGVsbG8gV29ybGQ=')

    expect(
      Buffer.from(toBase64('Hey there'), 'base64').toString('ascii')
    ).toStrictEqual('Hey there')
  })

  test('getBaseUrl', () => {
    expect(getBaseUrl(testConfig.registry)).toStrictEqual(
      '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/'
    )
  })

  test('toVSTSRegistryUrls', () => {
    expect(toVSTSRegistryUrls(testConfig)).toStrictEqual({
      registryKeys: [
        {
          key:
            '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/registry/:username',
          value: testConfig.username,
        },
        {
          key:
            '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/registry/:_password',
          value: toBase64(testConfig.token),
        },
      ],
      npmKeys: [
        {
          key:
            '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/:username',
          value: testConfig.username,
        },
        {
          key:
            '//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/:_password',
          value: toBase64(testConfig.token),
        },
      ],
    })
  })
})
