import NextAuth, { InitOptions, Session, User } from 'next-auth'
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
  secret: process.env.AUTH_SECRET,
  callbacks: { // These callbacks ensure the access token is included with the user's session for subsequent API calls
    session: async (session: any, user: any): Promise<any> => {
      session.accessToken = user.accessToken

      return session
    },
    jwt: async (token: any, user: User, account: any, profile: any, isNewUser: boolean): Promise<any> => {
      if (profile) {
        token.accessToken = account.accessToken
      }
      return token
    },
  }
};

export default (req, res) => NextAuth(req, res, options)
