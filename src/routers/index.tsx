import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageTitleLayout from '@/components/layout/pageTitleLayout'
import MainLayout from '@/components/layout/mainLayout'

import qs from 'qs'
import routes from './routers'
import NotFound from '@/pages/404'
import ErrorBoundary from '@/components/common/error-catch'

const getRouteContent = (route: any) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })
  let result = null
  document.title = route.meta.title
  switch (route.layout) {
    case 'pageTitle':
      result = (
        <PageTitleLayout title={(route.meta || {}).title}>
          <route.component query={query} />
        </PageTitleLayout>
      )
      break
    case 'main':
      result = (
        <MainLayout>
          <route.component query={query} />
        </MainLayout>
      )
      break
    default:
      result = <route.component query={query} />
  }

  return result
}

const getRoutes = () => {
  const routeDom = (<Routes>
    {
      routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={getRouteContent(route)}
        />
      ))
    }
    <Route path="*" element={<NotFound />} />
  </Routes>)
  return routeDom
}

const BasicRoute = (): JSX.Element => (
  <ErrorBoundary>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {getRoutes()}
      </Suspense>
    </BrowserRouter>
  </ErrorBoundary>
)
export default BasicRoute
