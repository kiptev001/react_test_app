import { lazy } from 'react'

const MainPageAsync = lazy(async () => {
  return await import('./mainPage')
})

export { MainPageAsync }
