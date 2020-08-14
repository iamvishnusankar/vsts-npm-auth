import { getNpmrcContent } from './index'

describe('vsts-npm-auth', () => {
  test('getNpmrcContent', () => {
    const content = getNpmrcContent({
      registry: 'https://example.com',
      alwaysAuth: false,
      authToken: '123',
    })

    expect(content).toStrictEqual(
      `registry=https://example.com\n_authToken=123\nalways-auth=false`
    )
  })
})
