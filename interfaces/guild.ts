import { Snowflake } from './index'
import { Emoji } from './emoji'

export type GuildFeature =
  'INVITE_SPLASH' |
  'VIP_REGIONS' |
  'VANITY_URL' |
  'VERIFIED' |
  'PARTNERED' |
  'COMMUNITY' |
  'COMMERCE' |
  'NEWS' |
  'DISCOVERABLE' |
  'FEATURABLE' |
  'ANIMATED_ICON' |
  'BANNER' |
  'WELCOME_SCREEN_ENABLED'

export interface Guild {
  id: Snowflake
  name: string
  icon: string | null
  splash: string | null
  discovery_splash: string | null
  emojis: Emoji[]
  features: GuildFeature[]
  approximate_member_count: number
  approximate_presence_count: number
  description: string | null
}

export default Guild
