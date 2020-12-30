import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

const RequireAuth = () => {
  const [session, loading] = useSession()

  if (loading) return null

  if (!loading && !session) {
    const router = useRouter()
    router.push('/')
  }
}

export default RequireAuth
