import { Snowflake, ISO8601, User } from "./index"

export enum OverwriteType {
  ROLE = 0,
  MEMBER = 1,
}

export enum ChannelType {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_NEWS = 5,
  GUILD_STORE = 6,
}

export interface Overwrite {
  id: Snowflake
  type: OverwriteType
  allow: string
  deny: string
}

export interface Channel {
  id: Snowflake
  type: ChannelType
  guild_id?: Snowflake
  position?: number
  permission_overwrites?: Overwrite[]
  name?: string
  topic?: string | null
  nsfw?: boolean
  last_message_id?: Snowflake | null
  bitrate?: number
  user_limit?: number
  rate_limit_per_user: number
  recipients: User[]
  icon?: string | null
  owner_id?: Snowflake
  application_id?: Snowflake
  parent_id?: Snowflake | null
  last_pin_timestamp?: ISO8601 | null
}

export default Channel
