import { Snowflake, ISO8601 } from './index'
import { Channel } from './channel'
import { Emoji } from './emoji'
import { User } from './user'

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

export interface PartialGuild {
  id: Snowflake
  name: string
  icon: string | null
  owner?: boolean
  permissions?: string
  features: GuildFeature[]
}

export interface RoleTags {
  // bot_id?	snowflake	the id of the bot this role belongs to
  bot_id?: Snowflake
  // integration_id?	snowflake	the id of the integration this role belongs to
  integration_id?: Snowflake
  // premium_subscriber?	null	whether this is the guild's premium subscriber role
  premium_subscriber?: null
}

export interface Role {
  // id	snowflake	role id
  id: Snowflake
  // name	string	role name
  name: string
  // color	integer	integer representation of hexadecimal color code
  color: number
  // hoist	boolean	if this role is pinned in the user listing
  hoist: boolean
  // position	integer	position of this role
  position: number
  // permissions	string	permission bit set
  permissions: string
  // managed	boolean	whether this role is managed by an integration
  managed: boolean
  // mentionable	boolean	whether this role is mentionable
  mentionable: boolean
  // tags?	role tags object	the tags this role has
  tags?: RoleTags
}

export interface GuildMember {
  // user?	user object	the user this guild member represents
  user?: User
  // nick	?string	this users guild nickname
  nick: string | null
  // roles	array of snowflakes	array of role object ids
  roles: Snowflake[]
  // joined_at	ISO8601 timestamp	when the user joined the guild
  joined_at: ISO8601
  // premium_since?	?ISO8601 timestamp	when the user started boosting the guild
  premium_since?: ISO8601 | null
  // deaf	boolean	whether the user is deafened in voice channels
  deaf: boolean
  // mute	boolean	whether the user is muted in voice channels
  mute: boolean
  // pending?	boolean	whether the user has not yet passed the guild's Membership Screening requirements
  pending?: boolean
}

export interface VoiceState {
  // guild_id?	snowflake	the guild id this voice state is for
  guild_id?: Snowflake
  // channel_id	?snowflake	the channel id this user is connected to
  channel_id: Snowflake | null
  // user_id	snowflake	the user id this voice state is for
  user_id: Snowflake
  // member?	guild member object	the guild member this voice state is for
  member?: GuildMember
  // session_id	string	the session id for this voice state
  session_id: string
  // deaf	boolean	whether this user is deafened by the server
  deaf: boolean
  // mute	boolean	whether this user is muted by the server
  mute: boolean
  // self_deaf	boolean	whether this user is locally deafened
  self_deaf: boolean
  // self_mute	boolean	whether this user is locally muted
  self_mute: boolean
  // self_stream?	boolean	whether this user is streaming using "Go Live"
  self_stream?: boolean
  // self_video	boolean	whether this user's camera is enabled
  self_video: boolean
  // suppress	boolean	whether this user is muted by the current user
  suppress: boolean
}

export enum PresenceStatus {
  IDLE = 'idle',
  DND = 'dnd',
  ONLINE = 'online',
  OFFLINE = 'offline',
}

export interface ClientStatus {
  // desktop?	string	the user's status set for an active desktop (Windows, Linux, Mac) application session
  desktop?: string
  // mobile?	string	the user's status set for an active mobile (iOS, Android) application session
  mobile?: string
  // web?	string	the user's status set for an active web (browser, bot account) application session
  web?: string
}

export enum ActivityType {
  // 0	Game	Playing {name}	"Playing Rocket League"
  GAME = 0,
  // 1	Streaming	Streaming {details}	"Streaming Rocket League"
  STREAMING = 1,
  // 2	Listening	Listening to {name}	"Listening to Spotify"
  LISTENING = 2,
  // 4	Custom	{emoji} {name}	":smiley: I am cool"
  CUSTOM = 4,
  // 5	Competing	Competing in {name}	"Competing in Arena World Champions"
  COMPETING = 5,
}

export interface ActivityTimestamp {
  // start?	integer	unix time (in milliseconds) of when the activity started
  start?: number
  // end?	integer	unix time (in milliseconds) of when the activity ends
  end?: number
}

export interface ActivityEmoji {
  // name	string	the name of the emoji
  name: string
  // id?	snowflake	the id of the emoji
  id?: Snowflake
  // animated?	boolean	whether this emoji is animated
  animated?: boolean
}

export interface ActivityParty {
  // id?	string	the id of the party
  id?: string
  // size?	array of two integers (current_size, max_size)	used to show the party's current and maximum size
  size?: [number, number]
}

export interface ActivityAssets {
  // large_image?	string	the id for a large asset of the activity, usually a snowflake
  large_image?: string
  // large_text?	string	text displayed when hovering over the large image of the activity
  large_text?: string
  // small_image?	string	the id for a small asset of the activity, usually a snowflake
  small_image?: string
  // small_text?	string	text displayed when hovering over the small image of the activity
  small_text?: string
}

export interface ActivitySecrets {
  // join?	string	the secret for joining a party
  join?: string
  // spectate?	string	the secret for spectating a game
  spectate?: string
  // match?	string	the secret for a specific instanced match
  match?: string
}

export enum ActivityFlags {
  INSTANCE = 1 << 0,
  JOIN = 1 << 1,
  SPECTATE = 1 << 2,
  JOIN_REQUEST = 1 << 3,
  SYNC = 1 << 4,
  PLAY = 1 << 5,
}

export interface Activity {
  // name	string	the activity's name
  name: string
  // type	integer	activity type
  type: ActivityType
  // url?	?string	stream url, is validated when type is 1
  url?: string | null
  // created_at	integer	unix timestamp of when the activity was added to the user's session
  created_at: number
  // timestamps?	timestamps object	unix timestamps for start and/or end of the game
  timestamps?: ActivityTimestamp
  // application_id?	snowflake	application id for the game
  application_id?: Snowflake
  // details?	?string	what the player is currently doing
  details?: string | null
  // state?	?string	the user's current party status
  state?: string | null
  // emoji?	?emoji object	the emoji used for a custom status
  emoji?: ActivityEmoji | null
  // party?	party object	information for the current party of the player
  party?: ActivityParty
  // assets?	assets object	images for the presence and their hover texts
  assets?: ActivityAssets
  // secrets?	secrets object	secrets for Rich Presence joining and spectating
  secrets?: ActivitySecrets
  // instance?	boolean	whether or not the activity is an instanced game session
  instance?: boolean
  // flags?	integer	activity flags ORd together, describes what the payload includes
  flags?: ActivityFlags
}

export interface PresenceUpdate {
  // user	user object	the user presence is being updated for
  user: User
  // guild_id	snowflake	id of the guild
  guild_id: Snowflake
  // status	string	either "idle", "dnd", "online", or "offline"
  status: PresenceStatus
  // activities	array of activity objects	user's current activities
  activities: Activity[]
  // client_status	client_status object	user's platform-dependent status
  client_status: ClientStatus
}

export enum DefaultMessageNotificationLevel {
  ALL_MESSAGES = 0,
  ONLY_MENTIONS = 1,
}

export enum ExplicitContentFilterLevel {
  DISABLED = 0,
  MEMBERS_WITHOUT_ROLES = 1,
  ALL_MEMBERS = 2,
}

export enum MFALevel {
  NONE = 0,
  ELEVATED = 1,
}

export enum VerificationLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  VERY_HIGH = 4,
}

export enum PremiumTier {
  NONE = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
}

export enum SystemChannelFlags {
  SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
}

export interface Guild {
  id: Snowflake
  // id	snowflake	guild id
  name: string
  // name	string	guild name (2-100 characters, excluding trailing and leading whitespace)
  icon: string | null
  // icon	?string	icon hash
  icon_hash?: string | null
  // icon_hash?	?string	icon hash, returned when in the template object
  splash: string | null
  // splash	?string	splash hash
  discovery_splash: string | null
  // discovery_splash	?string	discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
  owner?: boolean
  // owner? **	boolean	true if the user is the owner of the guild
  owner_id: Snowflake
  // owner_id	snowflake	id of owner
  permissions?: string
  // permissions? **	string	total permissions for the user in the guild (excludes overrides)
  region: string
  // region	string	voice region id for the guild
  afk_channel_id: Snowflake | null
  // afk_channel_id	?snowflake	id of afk channel
  afk_timeout: number
  // afk_timeout	integer	afk timeout in seconds
  widget_enabled?: boolean
  // widget_enabled?	boolean	true if the server widget is enabled
  widget_channel_id?: Snowflake | null
  // widget_channel_id?	?snowflake	the channel id that the widget will generate an invite to, or null if set to no invite
  verification_level: VerificationLevel
  // verification_level	integer	verification level required for the guild
  default_message_notifications: DefaultMessageNotificationLevel
  // default_message_notifications	integer	default message notifications level
  explicit_content_filter: ExplicitContentFilterLevel
  // explicit_content_filter	integer	explicit content filter level
  roles: Role[]
  // roles	array of role objects	roles in the guild
  emojis: Emoji[]
  // emojis	array of emoji objects	custom guild emojis
  features: GuildFeature[]
  // features	array of guild feature strings	enabled guild features
  mfa_level: MFALevel
  // mfa_level	integer	required MFA level for the guild
  application_id: Snowflake | null
  // application_id	?snowflake	application id of the guild creator if it is bot-created
  system_channel_id: Snowflake | null
  // system_channel_id	?snowflake	the id of the channel where guild notices such as welcome messages and boost events are posted
  system_channel_flags: SystemChannelFlags
  // system_channel_flags	integer	system channel flags
  rules_channel_id: Snowflake | null
  // rules_channel_id	?snowflake	the id of the channel where Community guilds can display rules and/or guidelines
  joined_at?: ISO8601
  // joined_at? *	ISO8601 timestamp	when this guild was joined at
  large?: boolean
  // large? *	boolean	true if this is considered a large guild
  unavailable?: boolean
  // unavailable? *	boolean	true if this guild is unavailable due to an outage
  member_count?: number
  // member_count? *	integer	total number of members in this guild
  voice_states?: VoiceState[]
  // voice_states? *	array of partial voice state objects	states of members currently in voice channels; lacks the guild_id key
  members?: GuildMember[]
  // members? *	array of guild member objects	users in the guild
  channels?: Channel[]
  // channels? *	array of channel objects	channels in the guild
  presences?: PresenceUpdate[]
  // presences? *	array of partial presence update objects	presences of the members in the guild, will only include non-offline members if the size is greater than large threshold
  max_presences?: number | null
  // max_presences?	?integer	the maximum number of presences for the guild (the default value, currently 25000, is in effect when null is returned)
  max_members?: number
  // max_members?	integer	the maximum number of members for the guild
  vanity_url_code: string | null
  // vanity_url_code	?string	the vanity url code for the guild
  description: string | null
  // description	?string	the description for the guild, if the guild is discoverable
  banner: string | null
  // banner	?string	banner hash
  premium_tier: PremiumTier
  // premium_tier	integer	premium tier (Server Boost level)
  premium_subscription_count?: number
  // premium_subscription_count?	integer	the number of boosts this guild currently has
  preferred_locale: string
  // preferred_locale	string	the preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US"
  public_updates_channel_id: Snowflake | null
  // public_updates_channel_id	?snowflake	the id of the channel where admins and moderators of Community guilds receive notices from Discord
  max_video_channel_users?: number
  // max_video_channel_users?	integer	the maximum amount of users in a video channel
  approximate_member_count?: number
  // approximate_member_count?	integer	approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true
  approximate_presence_count?: number
  // approximate_presence_count?	integer	approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true
}

export default Guild
