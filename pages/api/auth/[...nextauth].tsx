import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      // @ts-ignore
      scope: 'identify email guilds',
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options)
