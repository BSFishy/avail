import React, { ReactNode } from 'react'
import { useSession } from 'next-auth/client'
import Unauthorized from './Unauthorized'

type Props = {
  children?: ReactNode
}

const RequireAuth = ({ children }: Props) => {
  const [session, loading] = useSession()

  if (loading) return null

  if (!loading && !session)
    return (
      <Unauthorized>
        Test
      </Unauthorized>
    )

  return children
}

export default RequireAuth
