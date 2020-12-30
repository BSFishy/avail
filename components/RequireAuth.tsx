import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

export function RequireAuth(): 'loading' | 'redirect' | 'ok' {
  const [session, loading] = useSession()
  console.log(session, loading)

  if (loading) {
    return 'loading'
  }

  if (!loading && !session) {
    const router = useRouter()
    router.push('/')

    return 'redirect'
  }

  return 'ok'
}

export default RequireAuth
