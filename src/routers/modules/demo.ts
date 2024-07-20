import { lazy } from 'react'

const routes = [
  {
    path: '/demo/welcome',
    component: lazy(() => import('@/pages/welcome')),
    meta: {
      title: 'welcome'
    }
  },
  {
    path: '/demo/func',
    component: lazy(() => import('@/pages/demos/demo-func')),
    layout: 'pageTitle',
    meta: {
      title: 'demo - 函数'
    }
  }
]

export default routes
