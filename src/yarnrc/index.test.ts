import { getYarnrcContent } from './index'

describe('vsts-npm-auth', () => {
  test('getYarnrcContent', () => {
    const content = getYarnrcContent({
      registry: 'https://example.com',
      alwaysAuth: false,
      username: '123',
      password: 'pass',
    })

    expect(content).toStrictEqual(
      `"registry" "https://example.com"\n"always-auth" "false"\n"username" "123"\n"password" "pass"`
    )
  })
})
