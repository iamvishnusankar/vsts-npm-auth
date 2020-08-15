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
      `registry "https://example.com"\nalways-auth false\nusername 123\npassword pass`
    )
  })
})
