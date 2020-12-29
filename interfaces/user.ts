import { Snowflake } from "./index"

export interface User {
  id: Snowflake
  username: string
  discriminator: string
  avatar: string | null
  bot?: boolean
  system?: boolean
  mfa_enabled?: boolean
  locale?: string
  verified?: boolean
  email?: string | null
  flags?: number
  premium_type?: number
  public_flags?: number
}

export default User
