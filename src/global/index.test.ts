import { toBase64 } from './index'

describe('vsts-npm-auth', () => {
  test('toBase64', () => {
    expect(toBase64('Hello World')).toStrictEqual('SGVsbG8gV29ybGQ=')

    expect(
      Buffer.from(toBase64('Hey there'), 'base64').toString('ascii')
    ).toStrictEqual('Hey there')
  })
})
