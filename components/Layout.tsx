import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'
import Header from './Header'

type Props = {
  children?: ReactNode
};

const Layout = ({ children }: Props) => (
  <>
    <div className={styles.wrapper}>
      <Header/>
      {children}
    </div>
    <footer className={styles.footer}>
      &copy; Fishy 2020
    </footer>
  </>
)

export default Layout
