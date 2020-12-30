import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getSession } from 'next-auth/client'

import styles from '../../styles/Dashboard.module.scss'
import Layout from '../../components/Layout'
import RequireAuth from '../../components/RequireAuth'

import { PartialGuild, Permissions } from '../../interfaces'
import { isError } from '../../interfaces/error'
import { getGuilds } from '../../util/discordApi'

type Props = {
  guilds: PartialGuild[]
}

const Dashboard = ({ guilds }: Props) => {
  RequireAuth()

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Choose a server:</h1>
        {guilds.map(guild => (
          <div key={guild.id} className={styles.guild}>
            {guild.icon && (
              <Image
                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`}
                width={styles.height}
                height={styles.height}
                priority={true}
                className={styles.icon}
              />
            )}
            <div className={styles.name}>
              <Link href={`/dashboard/${guild.id}`}>
                <a className={styles.link}>{guild.name}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let session = await getSession(context)
  let guilds = null

  if (session && session.accessToken) {
    guilds = await getGuilds(session.accessToken)

    if (isError(guilds)) {
      guilds = []
    }

    guilds = guilds.filter(guild =>
      (guild.permissions & Permissions.ADMINISTRATOR) == Permissions.ADMINISTRATOR ||
      (guild.permissions & Permissions.MANAGE_GUILD) == Permissions.MANAGE_GUILD)
  }

  return {
    props: { guilds: guilds },
  }
}

export default Dashboard
