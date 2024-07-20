import React from 'react'
import styles from './index.module.less'

interface Props {
  children: any;
  title: string;
}

const pageTitleLayout = (props: Props): JSX.Element => {
  const breadcrumb = localStorage.getItem('breadcrumb')
  const noBreadcrumb = breadcrumb === '[]'
  return (<>
    <div className={[styles.pageLayout, noBreadcrumb ? styles.noBreadcrumb : ''].join(' ')}>
      <div className={styles.pageTitle}>{props.title}</div>
    </div>
    {props.children}
  </>)
}

export default pageTitleLayout
