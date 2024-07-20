import React from 'react'
import styles from './index.module.less'
import Header from '@/components/header'
import Footer from '@/components/footer'
interface Props {
  children: any;
}

const MainLayout = (props: Props): JSX.Element => {
  console.log(props)
  return (<>
    <div className={styles.wrapper}>
      <Header />
      {props.children}
      <Footer />
    </div>
  </>)
}

export default MainLayout
