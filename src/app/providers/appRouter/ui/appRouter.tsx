import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouterConfig } from 'shared/config/appRouter/appRouterconfig'
import { PageLoader } from 'shared/ui/PageLoader'

function AppRouter () {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(RouterConfig).map(({ path, element }) => (
          <Route
              element={
                <div className="pageWrapper">
                  {element}
                </div>
}
              key={path}
              path={path}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export { AppRouter }
