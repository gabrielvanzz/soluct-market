import axiosConfig from './axiosConfiguration'

interface UserLogin {
  username: string
  password: string
}

export async function loginUser({ username, password }: UserLogin) {
  return axiosConfig.post('/auth/login', {
    username,
    password
  })
}
