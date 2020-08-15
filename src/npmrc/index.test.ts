import { getNpmrcContent } from './index'

describe('vsts-npm-auth', () => {
  test('getNpmrcContent', () => {
    const content = getNpmrcContent({
      registry: 'https://example.com',
      alwaysAuth: false,
      username: 'username',
      password: 'helloworld',
    })

    expect(content).toStrictEqual(
      `registry=https://example.com\nusername=username\npassword=helloworld\nalways-auth=false`
    )
  })
})
