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
      `registry "https://example.com"\nalways-auth false\n"_username" 123\n"_password" pass`
    )
  })
})
