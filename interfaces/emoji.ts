import { Snowflake } from './index'
import { User } from './user'

export interface Emoji {
  id: Snowflake | null
  name: string | null
  roles?: Snowflake[]
  user?: User
  require_colons?: boolean
  managed?: boolean
  animated?: boolean
  available?: boolean
}

export default Emoji
