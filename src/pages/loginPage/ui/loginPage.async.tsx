import { lazy } from 'react'

const LoginPageAsync = lazy(async () => {
  return await import('./loginPage')
})

export { LoginPageAsync }
