import { expect, test } from 'vitest'
import { loginUser } from '../userService'

test('loginUser should return a token', async () => {
  const user = await loginUser({
    username: 'mor_2314',
    password: '83r5^_'
  })

  expect(user.status).toBe(200)

  expect(user.data.token).toContain('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
})
