import { getYarnrcContent } from './index'

describe('vsts-npm-auth', () => {
  test('getYarnrcContent', () => {
    const content = getYarnrcContent({
      registry: 'https://example.com',
      alwaysAuth: false,
      username: 'hello',
      token: 'world',
    })

    expect(content).toStrictEqual(
      `registry "https://example.com"\nalways-auth false`
    )
  })
})
