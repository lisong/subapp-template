import React from 'react'
import routes from '@/routers/routers'

console.warn(routes)

const Home = (): JSX.Element => (
  <div className="Home" style={{ height: '100%', overflow: 'auto' }}>
    <h1>欢迎来到首页</h1>
  </div>
)

export default Home
