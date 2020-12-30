import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import styles from '../../styles/DashboardGuild.module.scss'
import Layout from '../../components/Layout'
import RequireAuth from '../../components/RequireAuth'

import { Channel, PartialGuild, Permissions } from '../../interfaces'
import { HTTPError, isError } from '../../interfaces/error'
import { getChannels } from '../../util/discordApi'

type Props = {
  error?: HTTPError
  channels?: Channel[]
}

const Server = ({ error, channels }: Props) => {
  let auth = RequireAuth()
  if (auth === 'loading') {
    return null
  } else if (auth === 'redirect') {
    return (<p>Redirecting...</p>)
  }

  if (error) {
    // TODO(BSFishy): make this invite link a part of the regular page
    return (
      <Layout>
        <div className={styles.error}>
          <h1>Invite the bot to your server:</h1>
          <a className={styles.errorLink} href={'https://discord.com/oauth2/authorize?client_id=793202057916973118&scope=bot&permissions=537127025'} target={'_blank'} role={'button'}>Invite!</a>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      Hello world 2
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { id } = context.params

  if (Array.isArray(id)) {
    console.error('Got an array of id\'s instead of just one', id)
    id = id.join('')
  }

  let session = await getSession(context)
  let props = {}

  if (session) {
    let channels = await getChannels(id)
    if (isError(channels)) {
      props = {
        error: channels
      }
    } else {
      props = {
        channels: channels
      }
    }
  }

  return {
    props: props
  }
}

export default Server
