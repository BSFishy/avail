export enum ErrorCode {
  GENERAL = 0, // General error (such as a malformed request body, amongst other things)
  UNKNOWN_ACCOUNT = 10001,	// Unknown account
  UNKNOWN_APPLICATION = 10002,	// Unknown application
  UNKNOWN_CHANNEL = 10003,	// Unknown channel
  UNKNOWN_GUILD = 10004,	// Unknown guild
  UNKNOWN_INTEGRATION = 10005,	// Unknown integration
  UNKNOWN_INVITE = 10006,	// Unknown invite
  UNKNOWN_MEMBER = 10007,	// Unknown member
  UNKNOWN_MESSAGE = 10008,	// Unknown message
  UNKNOWN_PERMISSION_OVERWRITE = 10009,	// Unknown permission overwrite
  UNKNOWN_PROVIDER = 10010,	// Unknown provider
  UNKNOWN_ROLE = 10011,	// Unknown role
  UNKNOWN_TOKEN = 10012,	// Unknown token
  UNKNOWN_USER = 10013,	// Unknown user
  UNKNOWN_EMOJI = 10014,	// Unknown emoji
  UNKNOWN_WEBHOOK = 10015,	// Unknown webhook
  UNKNOWN_BAN = 10026,	// Unknown ban
  UNKNOWN_SKU = 10027,	// Unknown SKU
  UNKNOWN_STORE_LISTING = 10028,	// Unknown Store Listing
  UNKNOWN_ENTITLEMENT = 10029,	// Unknown entitlement
  UNKNOWN_BUILD = 10030,	// Unknown build
  UNKNOWN_LOBBY = 10031,	// Unknown lobby
  UNKNOWN_BRANCH = 10032,	// Unknown branch
  UNKNOWN_REDISTRIBUTABLE = 10036,	// Unknown redistributable
  UNKNOWN_GUILD_TEMPLATE = 10057,	// Unknown guild template
  CANNOT_USE_ENDPOINT = 20001,	// Bots cannot use this endpoint
  BOT_ENDPOINT = 20002,	// Only bots can use this endpoint
  ANNOUNCEMENT_RATE_LIMIT = 20022,	// This message cannot be edited due to announcement rate limits
  WRITE_RATE_LIMIT = 20028,	// The channel you are writing has hit the write rate limit
  MAX_GUILDS = 30001,	// Maximum number of guilds reached (100)
  MAX_FRIENDS = 30002,	// Maximum number of friends reached (1000)
  MAX_PINS = 30003,	// Maximum number of pins reached for the channel (50)
  MAX_ROLES = 30005,	// Maximum number of guild roles reached (250)
  MAX_WEBHOOKS = 30007,	// Maximum number of webhooks reached (10)
  MAX_REACTIONS = 30010,	// Maximum number of reactions reached (20)
  MAX_CHANNELS = 30013,	// Maximum number of guild channels reached (500)
  MAX_ATTACHMENTS = 30015,	// Maximum number of attachments in a message reached (10)
  MAX_INVITES = 30016,	// Maximum number of invites reached (1000)
  ALREADY_HAS_TEMPLATE = 30031,	// Guild already has a template
  UNAUTHORIZED = 40001,	// Unauthorized. Provide a valid token and try again
  NEED_ACCOUNT_VERIFICATION = 40002,	// You need to verify your account in order to perform this action
  ENTITY_TOO_LARGE = 40005,	// Request entity too large. Try sending something smaller in size
  FEATURE_DISABLED = 40006,	// This feature has been temporarily disabled server-side
  USER_IS_BANNED = 40007,	// The user is banned from this guild
  ALREADY_CROSSPOSTED = 40033,	// This message has already been crossposted
  MISSING_ACCESS = 50001,	// Missing access
  INVALID_ACCOUNT_TYPE = 50002,	// Invalid account type
  CANNOT_EXECUTE_IN_DM = 50003,	// Cannot execute action on a DM channel
  WIDGET_DISABLED = 50004,	// Guild widget disabled
  CANNOT_EDIT_MESSAGE_FROM_ANOTHER_USER = 50005,	// Cannot edit a message authored by another user
  CANNOT_SEND_EMPTY_MESSAGE = 50006,	// Cannot send an empty message
  CANNOT_SEND_MESSAGE = 50007,	// Cannot send messages to this user
  CANNOT_SEND_MESSAGE_IN_VOICE = 50008,	// Cannot send messages in a voice channel
  CHANNEL_VERIFICATION_TOO_HIGH = 50009,	// Channel verification level is too high for you to gain access
  NO_BOT = 50010,	// OAuth2 application does not have a bot
  APPLICATION_LIMIT = 50011,	// OAuth2 application limit reached
  INVALID_STATE = 50012,	// Invalid OAuth2 state
  LACK_PERMISSION = 50013,	// You lack permissions to perform that action
  INVALID_AUTHENTICATION_TOKEN = 50014,	// Invalid authentication token provided
  NOTE_TOO_LONG = 50015,	// Note was too long
  BAD_DELETE_AMOUNT = 50016,	// Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete
  MESSAGE_PIN_IN_WRONG_CHANNEL = 50019,	// A message can only be pinned to the channel it was sent in
  INVALID_INVITE = 50020,	// Invite code was either invalid or taken
  CANNOT_EXECUTE_ON_SYSTEM_MESSAGE = 50021,	// Cannot execute action on a system message
  CANNOT_EXECUTE_IN_CHANNEL = 50024,	// Cannot execute action on this channel type
  INVALID_ACCESS_TOKEN = 50025,	// Invalid OAuth2 access token provided
  INVALID_RECIPIENT = 50033,	// "Invalid Recipient(s)"
  MESSAGE_TOO_OLD = 50034,	// A message provided was too old to bulk delete
  INVALID_BODY = 50035,	// Invalid form body (returned for both application/json and multipart/form-data bodies), or invalid Content-Type provided
  INVALID_INVITE_ACCEPTANCE = 50036,	// An invite was accepted to a guild the application's bot is not in
  INVALID_API_VERSION = 50041,	// Invalid API version provided
  CANNOT_DELETE_CHANNEL = 50074,	// Cannot delete a channel required for Community guilds
  INVALID_STICKER = 50081,	// Invalid sticker sent
  REACTION_BLOCKED = 90001,	// Reaction was blocked
  RESOURCE_OVERLOADED = 130000,	// API resource is currently overloaded. Try again a little later
}

export interface HTTPError {
  code: ErrorCode
  message: string
}

export function isError(obj: any): obj is HTTPError {
  return 'code' in obj && 'message' in obj
}

export default HTTPError
