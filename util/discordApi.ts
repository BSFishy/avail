import { Snowflake, Channel, Guild, HTTPError, PartialGuild } from '../interfaces'

function endpoint(part: string): string {
  return `https://discord.com/api/v8${part}`
}

async function createFetch(part: string, headers: any): Promise<Response> {
  return await fetch(endpoint(part), headers)
}

function authorizationHeaders(value: string): any {
  return {
    headers: {
      'Authorization': value
    }
  }
}

function oauthHeaders(token: string): any {
  return authorizationHeaders(`Bearer ${token}`)
}

function botHeaders(): any {
  return authorizationHeaders(`Bot ${process.env.DISCORD_BOT_TOKEN}`)
}

async function oauthFetch(part: string, token: string): Promise<Response> {
  return await createFetch(part, oauthHeaders(token))
}

async function botFetch(part: string): Promise<Response> {
  return await createFetch(part, botHeaders())
}

async function apiCall<T>(response: Response): Promise<T | HTTPError> {
  return await response.json()
}

async function oauthCall<T>(part: string, token: string): Promise<T | HTTPError> {
  return await apiCall(await oauthFetch(part, token))
}

async function botCall<T>(part: string): Promise<T | HTTPError> {
  return await apiCall(await botFetch(part))
}

export async function getGuilds(token: string): Promise<PartialGuild[] | HTTPError> {
  return oauthCall('/users/@me/guilds', token)
  // let guilds = await fetch(endpoint('/users/@me/guilds'), {
  //   headers: {
  //     'Authorization': `Bearer ${token}`
  //   }
  // })
  //
  // return await guilds.json()
}

export async function getGuild(guildId: Snowflake): Promise<Guild | HTTPError> {
  return await botCall(`/guilds/${guildId}`)
  // let guild = await fetch(endpoint(``), {
  //   headers: {
  //     'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
  //   }
  // })
  //
  // return await guild.json()
}

export async function getChannels(guildId: Snowflake): Promise<Channel[] | HTTPError> {
  return await botCall(`/guilds/${guildId}/channels`)
  // let channels = await fetch(endpoint(`/guilds/${guildId}/channels`), {
  //   headers: {
  //     'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
  //   }
  // })
  //
  // return await channels.json()
}
