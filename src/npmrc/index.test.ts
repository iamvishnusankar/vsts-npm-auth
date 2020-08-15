import { getNpmrcContent } from './index'

describe('vsts-npm-auth', () => {
  test('getNpmrcContent', () => {
    const content = getNpmrcContent({
      registry: 'https://example.com/npm',
      alwaysAuth: false,
    })

    expect(content).toStrictEqual(
      '//example.com/npm/registry/:_authToken=${NPM_TOKEN}\n//example.com/npm/:_authToken=${NPM_TOKEN}'
    )
  })
})
