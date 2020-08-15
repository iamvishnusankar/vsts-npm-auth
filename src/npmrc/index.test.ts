import { getNpmrcContent } from './index'
import { testConfig } from '../fixtures'
import { toBase64 } from '../util'

describe('vsts-npm-auth', () => {
  test('getNpmrcContent', () => {
    const content = getNpmrcContent(testConfig)

    let output = `//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/registry/:username=${testConfig.username}`
    output += `\n//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/registry/:_password=${toBase64(
      testConfig.token
    )}`

    output += `\n//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/:username=${testConfig.username}`
    output += `\n//pkgs.dev.azure.com/microsoftLearnModule/_packaging/microsoftLearnModule/npm/:_password=${toBase64(
      testConfig.token
    )}`

    expect(content).toStrictEqual(output.trim())
  })
})
