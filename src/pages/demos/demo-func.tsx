import { demoApi } from '@/services'
import { Card } from 'antd'
import React, { useEffect, useState } from 'react'

interface Props {
  query: { [key: string]: string };
}

const Test = (props: Props): JSX.Element => {
  const [name, setName] = useState('')
  console.log({ props })
  useEffect(() => {
    setName('函数组件')
    demoApi.getTest().then((rs) => {
      console.log(rs)
    })
  }, [])

  return <Card>
    <div className="Home">
      <h2>{name}</h2>
      <h3>props:{JSON.stringify(props, null, 4)}</h3>
    </div>
  </Card>
}

export default Test
