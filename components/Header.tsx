import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { signIn, signOut, useSession } from 'next-auth/client'

type Props = {};

const Header = ({}: Props) => {
  const [session, loading] = useSession()

  const userText = !session ? 'Login' : 'Logout';
  const userLink = !session ? signIn : signOut;

  // @ts-ignore
  return (
    <nav className={styles.nav_bar}>
      <ul>
        <li><h1>Avail</h1></li>
        <li><Link href='/'>Home</Link></li>
        {session && <li><Link href='/dashboard'>Dashboard</Link></li>}
        <li className={styles.item_right}><a onClick={() => userLink()}>{userText}</a></li>
      </ul>
    </nav>
  )
};

export default Header
